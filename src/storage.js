/* 다록 — 사용자 데이터 저장소
   기본 차 데이터(DAROK.teas)와 분리해 별점·즐겨찾기·사용자 추가 차·이미지·설정만 저장합니다.
   IndexedDB → localStorage → 메모리 순으로 대체합니다. */
(function () {
  const DB = 'darok', VER = 1;
  let db = null, mode = 'memory';
  const mem = {};

  function openIdb() {
    return new Promise((res) => {
      try {
        if (!window.indexedDB) return res(null);
        const rq = indexedDB.open(DB, VER);
        rq.onupgradeneeded = () => {
          const d = rq.result;
          if (!d.objectStoreNames.contains('kv')) d.createObjectStore('kv');
          if (!d.objectStoreNames.contains('images')) d.createObjectStore('images');
        };
        rq.onsuccess = () => res(rq.result);
        rq.onerror = () => res(null);
        rq.onblocked = () => res(null);
        setTimeout(() => res(null), 2500);
      } catch (e) { res(null); }
    });
  }
  function tx(store, kind, fn) {
    return new Promise((res, rej) => {
      try {
        const t = db.transaction(store, kind); const s = t.objectStore(store); const rq = fn(s);
        t.oncomplete = () => res(rq && rq.result); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
      } catch (e) { rej(e); }
    });
  }
  function lsOk() { try { const k = '__darok_t'; localStorage.setItem(k, '1'); localStorage.removeItem(k); return true; } catch (e) { return false; } }

  const Store = {
    get mode() { return mode; },
    async init() {
      db = await openIdb();
      if (db) { try { await tx('kv', 'readonly', (s) => s.get('ping')); mode = 'idb'; return mode; } catch (e) { db = null; } }
      mode = lsOk() ? 'local' : 'memory';
      return mode;
    },
    async get(key, store = 'kv') {
      try {
        if (mode === 'idb') return await tx(store, 'readonly', (s) => s.get(key));
        if (mode === 'local') { const v = localStorage.getItem('darok:' + store + ':' + key); return v == null ? undefined : JSON.parse(v); }
      } catch (e) { console.warn('읽기 실패', key, e); }
      return mem[store + ':' + key];
    },
    async set(key, val, store = 'kv') {
      mem[store + ':' + key] = val;
      try {
        if (mode === 'idb') return await tx(store, 'readwrite', (s) => s.put(val, key));
        if (mode === 'local') localStorage.setItem('darok:' + store + ':' + key, JSON.stringify(val));
      } catch (e) { console.warn('저장 실패', key, e); throw e; }
    },
    async del(key, store = 'kv') {
      delete mem[store + ':' + key];
      try {
        if (mode === 'idb') return await tx(store, 'readwrite', (s) => s.delete(key));
        if (mode === 'local') localStorage.removeItem('darok:' + store + ':' + key);
      } catch (e) { console.warn('삭제 실패', key, e); }
    },
    async keys(store = 'images') {
      try {
        if (mode === 'idb') return await tx(store, 'readonly', (s) => s.getAllKeys());
        if (mode === 'local') { const p = 'darok:' + store + ':'; const out = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith(p)) out.push(k.slice(p.length)); } return out; }
      } catch (e) { console.warn(e); }
      return Object.keys(mem).filter((k) => k.startsWith(store + ':')).map((k) => k.slice(store.length + 1));
    },
    async clearAll() {
      for (const k of Object.keys(mem)) delete mem[k];
      try {
        if (mode === 'idb') { await tx('kv', 'readwrite', (s) => s.clear()); await tx('images', 'readwrite', (s) => s.clear()); }
        if (mode === 'local') { const del = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('darok:')) del.push(k); } del.forEach((k) => localStorage.removeItem(k)); }
      } catch (e) { console.warn(e); }
    }
  };
  window.DarokStore = Store;
})();
