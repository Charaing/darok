// 다록 빌드: src/ 의 CSS·데이터·스크립트를 하나의 HTML로 묶습니다.
// 출력: dist/darok.html (브라우저에서 바로 여는 독립 실행 파일), dist/artifact.html (게시용 본문)
const fs = require('fs'), path = require('path');
const src = (p) => fs.readFileSync(path.join(__dirname, 'src', p), 'utf8');
const scripts = ['data/core.js', 'data/china-green-white-yellow.js', 'data/china-oolong-black-dark.js', 'data/taiwan-japan-korea.js', 'data/world.js', 'data/blends-tisanes.js', 'data/knowledge.js', 'storage.js', 'brewing.js', 'app.js'];
const safe = (s) => s.replace(/<\/script/gi, '<\\/script');
const head = `<title>다록 茶錄</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="세계 차 백과사전과 개인 별점 아카이브">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600&family=Noto+Serif+KR:wght@500;600;700&family=Noto+Serif+TC:wght@500;600&display=swap">
<style>${src('style.css')}</style>`;
const body = src('body.html') + scripts.map((s) => `<script>/* ${s} */\n${safe(src(s))}</script>`).join('\n');
fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'darok.html'), `<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head}\n</head>\n<body>\n${body}\n</body>\n</html>\n`);
fs.writeFileSync(path.join(__dirname, 'dist', 'artifact.html'), `${head}\n${body}\n`);
fs.copyFileSync(path.join(__dirname, 'dist', 'darok.html'), path.join(__dirname, 'index.html'));
console.log('built', (fs.statSync(path.join(__dirname, 'dist', 'darok.html')).size / 1024).toFixed(0) + 'KB');
