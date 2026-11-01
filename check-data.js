// 다록 데이터 점검 — node check-data.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ctx = { window: {}, console }; ctx.window = ctx; vm.createContext(ctx);
['core', 'china-green-white-yellow', 'china-oolong-black-dark', 'taiwan-japan-korea', 'world', 'blends-tisanes', 'expansion-1', 'expansion-2', 'knowledge'].forEach((f) =>
  vm.runInContext(fs.readFileSync(path.join(__dirname, 'src/data', f + '.js'), 'utf8'), ctx, { filename: f }));
vm.runInContext(fs.readFileSync(path.join(__dirname, 'src/brewing.js'), 'utf8'), ctx);
const D = ctx.DAROK, problems = [];
const kinds = {}, cats = {};
const nm = {};
for (const t of D.teas) {
  kinds[t.kind] = (kinds[t.kind] || 0) + 1; cats[t.primaryCategory] = (cats[t.primaryCategory] || 0) + 1;
  if (t.parent && !D.byId[t.parent]) problems.push('없는 상위 항목: ' + t.id + ' → ' + t.parent);
  if (!t.description) problems.push('설명 없음: ' + t.id);
  (t.sourceKeys || []).forEach((k) => { if (!D.sources[k]) problems.push('없는 출처: ' + t.id + ' → ' + k); });
  const k = t.nameKo.replace(/\s/g, ''); (nm[k] = nm[k] || []).push(t.id);
  const b = D.getBrew(t);
  if (!b.keys.length) problems.push('우림법 없음: ' + t.id);
  for (const [mk, m] of Object.entries(b.methods)) {
    const tt = m.t || (m.usu && m.usu.t);
    if (tt && (tt[0] > tt[1] || tt[1] > 100 || (tt[0] < 40 && mk !== 'x'))) problems.push('온도 이상: ' + t.id + ' ' + mk + ' ' + tt);
    if (m.s && !m.s.some((x) => x > 0)) problems.push('우림 시간 없음: ' + t.id + ' ' + mk);
  }
  if ((t.secondaryCategories || []).includes('powder') && (b.methods.w || b.methods.g || b.methods.j)) problems.push('분말차에 잎차 우림: ' + t.id);
  if (D.cats[t.primaryCategory].cs === false && t.cultivar) problems.push('대용차에 차나무 품종: ' + t.id);
  if (/백차/.test(t.nameKo) && t.primaryCategory !== 'white') console.log('  참고: 이름에 "백차"가 있지만 분류가 ' + t.primaryCategory + ' →', t.nameKo);
  if (/은침/.test(t.nameKo)) console.log('  참고: 은침 →', t.nameKo, t.primaryCategory);
}
Object.entries(nm).filter(([, v]) => v.length > 1).forEach(([k, v]) => problems.push('같은 이름 중복: ' + k + ' ' + v.join(',')));
// 별칭이 다른 항목의 한국어 이름과 정확히 같은 경우(중복 등록 의심)
const byName = {}; D.teas.forEach((t) => (byName[t.nameKo.replace(/\s/g, '')] = t.id));
D.teas.forEach((t) => t.aliases.forEach((a) => { const o = byName[a.replace(/\s/g, '')]; if (o && o !== t.id) console.log('  참고: 별칭 "' + a + '"(' + t.id + ')이 다른 항목 이름과 같음 → ' + o); }));
console.log('\n항목 수', D.teas.length, kinds, '\n분류', cats);
console.log('차별 우림 참고값', D.teas.filter((t) => t.brewOverride && Object.keys(t.brewOverride).length).length);
console.log('지식 글', D.knowledge.length, '다구', D.teaware.length);
console.log('\n코어 오류', D.errors);
console.log('문제', problems.length ? problems : '없음');
process.exitCode = problems.length || D.errors.length ? 1 : 0;
