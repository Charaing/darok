/* 다록 — 우림법 계산, 단계 안내, 우림 타이머 */
(function () {
  const D = window.DAROK;
  const M = (D.methods = {
    w: { ko: '서양식', en: 'Western', desc: '머그·티포트로 적은 찻잎을 넉넉한 물에 우립니다.' },
    g: { ko: '공부차', en: 'Gongfu', desc: '작은 개완·다관에 많은 찻잎을 넣고 짧게 여러 번 우립니다.' },
    j: { ko: '일본식', en: 'Kyusu', desc: '규스(옆손잡이 찻주전자)로 식힌 물에 짧게 우립니다.' },
    c: { ko: '냉침', en: 'Cold brew', desc: '찬물에 넣어 냉장고에서 몇 시간 우립니다.' },
    m: { ko: '말차', en: 'Matcha', desc: '가루를 물에 풀어 차선으로 거품을 냅니다.' },
    k: { ko: '끓이기', en: 'Simmer', desc: '물에 넣고 불에 올려 끓입니다.' },
    x: { ko: '타서 마시기', en: 'Mix', desc: '청이나 분말을 물에 풀어 마십니다.' }
  });
  const ORDER = ['m', 'j', 'g', 'w', 'k', 'x', 'c'];

  function fmtSec(s) {
    if (!s && s !== 0) return '—';
    s = Math.round(s);
    if (s < 60) return s + '초';
    const m = Math.floor(s / 60), r = s % 60;
    return r ? m + '분 ' + r + '초' : m + '분';
  }
  function fmtClock(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000)); const m = Math.floor(s / 60);
    return m + ':' + String(s % 60).padStart(2, '0');
  }
  function fmtTemp(t) {
    if (!t) return '—';
    const [a, b] = t;
    const f = (v) => (v <= 10 ? '찬물' : v + '');
    return a === b ? f(a) : f(a) + '~' + b;
  }
  const fmtG = (g) => (g == null ? '—' : String(+g.toFixed(1)));

  /* 차 하나의 우림법: 프로필 + 차별 덮어쓰기 + 사용자 편집(시간만) */
  D.getBrew = function (tea, edits) {
    const prof = tea.brewProfile ? D.profiles[tea.brewProfile] : null;
    const ov = tea.brewOverride || {};
    const out = {};
    for (const k of ORDER) {
      const base = ov[k] || (prof && prof[k]);
      if (!base) continue;
      const src = ov[k] ? (tea.builtin ? 'tea' : 'user') : 'profile';
      const m = JSON.parse(JSON.stringify(base));
      if (edits && edits[k] && Array.isArray(edits[k]) && m.s) m.userSteeps = edits[k];
      out[k] = Object.assign(m, { src });
    }
    return { methods: out, profile: prof, keys: Object.keys(out) };
  };
  D.defaultMethod = function (tea, brew, pref) {
    const ks = brew.keys;
    if (pref && ks.includes(pref)) return pref;
    if (ks.includes('m')) return 'm';
    if (ks.includes('j')) return 'j';
    if (['oolong', 'dark'].includes(tea.primaryCategory) && ks.includes('g')) return 'g';
    if (ks.includes('w')) return 'w';
    return ks[0] || null;
  };

  /* 우림 순서(초) — 타이머·반복 우림 표에 사용 */
  D.steepSchedule = function (k, m) {
    if (!m || !m.s) return [];
    if (m.userSteeps && m.userSteeps.length) return m.userSteeps.slice();
    const s = m.s.filter((v) => v > 0);
    const r = m.r || s.length;
    const out = [];
    for (let i = 0; i < r; i++) {
      if (i < s.length) out.push(s[i]);
      else out.push((out[out.length - 1] || 30) + (m.inc || 10));
    }
    return out;
  };

  /* 단계 안내 문장 */
  D.brewSteps = function (k, m, tea) {
    const t = fmtTemp(m.t);
    const gear = tea.gear || '';
    const steps = [];
    if (k === 'w') {
      steps.push('깨끗한 물을 끓인 뒤 ' + (m.t && m.t[1] < 100 ? t + '℃로 식힙니다.' : '끓는 직후의 물(약 100℃)을 준비합니다.'));
      steps.push((gear && !/개완|자사호|규스/.test(gear) ? gear : '티포트나 머그') + '를 뜨거운 물로 데운 뒤 물을 버립니다.');
      steps.push('찻잎 ' + fmtG(m.g) + 'g을 넣고 물 ' + m.ml + 'ml를 붓습니다.');
      steps.push(fmtSec(m.s[0]) + ' 동안 우립니다. 뚜껑을 덮으면 향이 덜 날아갑니다.');
      steps.push('찻잎을 건져 내거나 찻물을 모두 따라 내 우림을 멈춥니다.');
      if ((m.r || 1) > 1 && m.s[1]) steps.push('두 번째는 ' + fmtSec(m.s[1]) + (m.s[2] ? ', 세 번째는 ' + fmtSec(m.s[2]) : '') + ' 우립니다.');
    } else if (k === 'g') {
      steps.push('개완이나 작은 다관(' + m.ml + 'ml 안팎)과 잔을 뜨거운 물로 데웁니다.');
      steps.push('찻잎 ' + fmtG(m.g) + 'g을 넣습니다. 데운 다구 안에서 마른 잎 향을 맡아 보십시오.');
      if (m.rinse) steps.push(t + '℃ 물을 부었다가 5초 안에 따라 버립니다(세차). 잎을 깨우고 먼지를 씻는 과정입니다.');
      steps.push(t + '℃ 물을 붓고 ' + fmtSec(m.s[0]) + ' 뒤 공도배에 모두 따릅니다.');
      steps.push('공도배의 차를 잔에 나눕니다. 찻잎에 물이 남지 않게 끝까지 따르십시오.');
      steps.push('다음 우림부터는 ' + fmtSec(m.s[1]) + ', ' + fmtSec(m.s[2]) + ' 순으로, 이후 ' + (m.inc || 10) + '초씩 늘려 약 ' + m.r + '회까지 우립니다.');
    } else if (k === 'j') {
      steps.push('끓인 물을 찻잔에 먼저 부어 잔을 데우며 ' + t + '℃까지 식힙니다.');
      steps.push('규스에 찻잎 ' + fmtG(m.g) + 'g을 넣습니다.');
      steps.push('식힌 물 ' + m.ml + 'ml를 규스에 붓고 뚜껑을 덮어 ' + fmtSec(m.s[0]) + ' 기다립니다.');
      steps.push('여러 잔이면 조금씩 번갈아 따라 농도를 맞추고, 마지막 한 방울까지 따릅니다.');
      if (m.s[1]) steps.push('두 번째 우림은 ' + fmtSec(m.s[1]) + (m.s[2] ? ', 세 번째는 ' + fmtSec(m.s[2]) : '') + '이면 충분합니다. 잎이 이미 펴져 빨리 우러납니다.');
    } else if (k === 'c') {
      steps.push('깨끗한 병에 찻잎 ' + fmtG(m.g) + 'g과 찬 정수 ' + m.ml + 'ml를 넣습니다.');
      steps.push('뚜껑을 닫아 냉장고(약 4℃)에서 ' + m.h[0] + '~' + m.h[1] + '시간 우립니다.');
      steps.push('찻잎을 걸러 내고 냉장 보관하며 24시간 안에 마십니다.');
    } else if (k === 'm') {
      const u = m.usu;
      steps.push('차완을 뜨거운 물로 데우고 물기를 닦습니다. 차선도 물에 적셔 둡니다.');
      steps.push('말차 ' + fmtG(u.g) + 'g(차샤쿠 약 2스푼)을 체에 내려 차완에 담습니다. 뭉침을 없애는 단계입니다.');
      steps.push(fmtTemp(u.t) + '℃ 물 ' + u.ml + 'ml를 붓습니다.');
      steps.push('손목을 써서 차선을 앞뒤(M자·W자)로 15~20초 빠르게 저어 고운 거품을 냅니다.');
      steps.push('마지막에 차선을 거품 표면에서 천천히 들어 올려 가운데를 정리하고 바로 마십니다.');
    } else if (k === 'k') {
      steps.push('냄비나 주전자에 물 ' + m.ml + 'ml를 넣고 끓입니다.');
      steps.push('재료 ' + fmtG(m.g) + 'g을 넣습니다.');
      steps.push('약한 불로 줄여 ' + m.min[0] + '~' + m.min[1] + '분 끓입니다.');
      steps.push('불을 끄고 건더기를 걸러 냅니다. 남은 차는 식혀 냉장 보관하고 하루 안에 마십니다.');
    } else if (k === 'x') {
      steps.push('잔에 ' + (fmtTemp(m.t) === '—' ? '따뜻한 물' : fmtTemp(m.t) + '℃ 물') + ' ' + m.ml + 'ml를 준비합니다.');
      steps.push('청이나 분말을 약 ' + fmtG(m.g) + 'g(1~2큰술) 넣고 잘 저어 녹입니다.');
      steps.push('단맛이 강하면 물을 더하고, 약하면 조금 더 넣어 맞춥니다.');
    }
    return steps;
  };
  D.fmt = { sec: fmtSec, temp: fmtTemp, g: fmtG, clock: fmtClock };

  /* ───────── 타이머 ───────── */
  let audioCtx = null;
  function chime() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      [[659.25, 0], [987.77, 0.18]].forEach(([f, d]) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, now + d); g.gain.exponentialRampToValueAtTime(0.12, now + d + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, now + d + 1.6);
        o.connect(g).connect(audioCtx.destination); o.start(now + d); o.stop(now + d + 1.7);
      });
    } catch (e) { /* 소리를 낼 수 없는 환경 */ }
  }
  D.unlockAudio = function () { try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); } catch (e) {} };

  D.Timer = function (opts) {
    /* opts: { steeps:[초], onTick(remainMs,totalMs,idx), onDone(idx), sound:()=>bool } */
    let idx = 0, total = (opts.steeps[0] || 0) * 1000, remain = total, endAt = 0, running = false, raf = 0, iv = 0, wake = null;
    function loop() {
      if (!running) return;
      remain = endAt - performance.now();
      if (remain <= 0) { remain = 0; running = false; stopLoops(); releaseWake(); opts.onTick(0, total, idx); if (opts.sound()) chime(); if (navigator.vibrate) try { navigator.vibrate(200); } catch (e) {} opts.onDone(idx); return; }
      opts.onTick(remain, total, idx);
    }
    function stopLoops() { cancelAnimationFrame(raf); clearInterval(iv); }
    function frame() { loop(); if (running) raf = requestAnimationFrame(frame); }
    async function grabWake() { try { if ('wakeLock' in navigator) wake = await navigator.wakeLock.request('screen'); } catch (e) { wake = null; } }
    function releaseWake() { try { wake && wake.release(); } catch (e) {} wake = null; }
    return {
      get idx() { return idx; }, get running() { return running; }, get remain() { return remain; }, get total() { return total; },
      start() { if (running || remain <= 0) return; running = true; endAt = performance.now() + remain; raf = requestAnimationFrame(frame); iv = setInterval(loop, 250); grabWake(); },
      pause() { if (!running) return; running = false; remain = Math.max(0, endAt - performance.now()); stopLoops(); releaseWake(); opts.onTick(remain, total, idx); },
      reset() { running = false; stopLoops(); releaseWake(); remain = total; opts.onTick(remain, total, idx); },
      go(i) { running = false; stopLoops(); releaseWake(); idx = i; total = (opts.steeps[i] || 0) * 1000; remain = total; opts.onTick(remain, total, idx); },
      setSteep(i, sec) { opts.steeps[i] = sec; if (i === idx && !running) { total = sec * 1000; remain = total; opts.onTick(remain, total, idx); } },
      destroy() { running = false; stopLoops(); releaseWake(); }
    };
  };
})();
