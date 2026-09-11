// Build the Better View operating agreement redraft: gates, then HTML + DOCX.
// Usage: node src/build.mjs  (run from better-view-operating-agreement/)
// DOCX_MODULE env var may point at a docx package directory if it is not resolvable.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { meta, notes, preamble, articles, signaturePage, schedules, exhibits } from './agreement.mjs';
import { plain } from './plain.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const outDir = path.join(root, 'redraft');
fs.mkdirSync(outDir, { recursive: true });
const require = createRequire(import.meta.url);
const docx = require(process.env.DOCX_MODULE || 'docx');

// ---------------------------------------------------------------- numbering + refs
const refs = new Map(); // id -> {label, anchor}
articles.forEach((a, ai) => {
  a.num = ai + 1;
  a.anchor = `a-${a.num}`;
  refs.set(a.id, { label: `Article ${a.num}`, anchor: a.anchor, kind: 'art' });
  a.sections.forEach((s, si) => {
    s.num = `${a.num}.${si + 1}`;
    s.anchor = `s-${a.num}-${si + 1}`;
    if (refs.has(s.id)) throw new Error(`duplicate id ${s.id}`);
    refs.set(s.id, { label: `Section ${s.num}`, anchor: s.anchor, kind: 'sec' });
  });
});
for (const x of [...schedules, ...exhibits]) {
  x.anchor = x.id;
  refs.set(x.id, { label: x.label, anchor: x.anchor, kind: 'x' });
}

const problems = [];
// Plain-English notes: one for every article, section, schedule, and exhibit, and none for unknown ids.
for (const id of refs.keys()) if (!plain[id] || plain[id].trim().length < 20) problems.push(`no plain-English note for ${id}`);
for (const k of Object.keys(plain)) if (!refs.has(k)) problems.push(`plain note for unknown id ${k}`);
const plainText = Object.values(plain).join('\n');
function resolve(text, mode /* 'html' | 'text' */) {
  return text.replace(/\{\{(ref|art):([a-z0-9-]+)\}\}/g, (m, kind, id) => {
    const r = refs.get(id);
    if (!r) { problems.push(`unresolved ${kind}:${id}`); return `[[${id}]]`; }
    if (kind === 'art' && r.kind !== 'art') problems.push(`{{art:${id}}} points at a ${r.kind}`);
    if (kind === 'ref' && r.kind === 'art') problems.push(`{{ref:${id}}} points at an article; use {{art:}}`);
    return mode === 'html' ? `<a href="#${r.anchor}">${r.label}</a>` : r.label;
  });
}

// ---------------------------------------------------------------- walk helpers
const letters = i => `(${String.fromCharCode(97 + i)})`;
const romans = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv','xv'];
const roman = i => `(${romans[i]})`;
function defLine(term, text) {
  const joiner = /^(has |have |means|of a )/.test(text) ? ' ' : ' means ';
  return { term, joiner, text };
}

// Collect all prose for gates.
const proseChunks = [];
function collectBody(body) {
  for (const item of body) {
    if (typeof item === 'string') proseChunks.push(item);
    else if (item.list) { if (item.lead) proseChunks.push(item.lead); collectList(item.list); }
    else if (item.defs) for (const [t, x] of item.defs) proseChunks.push(`"${t}" ${x}`);
    else if (item.table) for (const r of [item.table.cols, ...item.table.rows]) proseChunks.push(r.join(' '));
    else if (item.sig) proseChunks.push(item.sig.fields.join(' '));
  }
}
function collectList(list) {
  for (const li of list) {
    if (typeof li === 'string') proseChunks.push(li);
    else { proseChunks.push(li.text); if (li.sub) collectList(li.sub); }
  }
}
proseChunks.push(...notes.intro, ...notes.decisions.map(d => d[0] + ' ' + d[1]), ...notes.blanks, ...notes.attorney, ...preamble, signaturePage.witness);
for (const a of articles) for (const s of a.sections) collectBody(s.body);
for (const x of [...schedules, ...exhibits]) collectBody(x.body);
const allText = proseChunks.map(t => resolve(t, 'text')).join('\n');

// ---------------------------------------------------------------- gates
const dashes = (allText + '\n' + plainText).match(/[—–]/g);
if (dashes) problems.push(`${dashes.length} em/en dashes found`);
const british = (allText + '\n' + plainText).match(/\b\w*(colour|favour|honour|labour|behaviour|centre\b|licence|defence|offence|organis(e|ation)|realis(e|ation)|recognis(e|ation)|analyse|catalogue|programme|cheque|travell|modell|cancell|judgement|practise\b|grey\b|whilst|amongst)\w*\b/gi);
if (british) problems.push(`British spellings: ${[...new Set(british)].join(', ')}`);

// Defined-term gate: every capitalized term from the watch list must be defined
// (in 1.1 or inline in quotes) and every definition must be used somewhere else.
const definedTerms = new Set();
const notTerms = new Set(['Including', 'Written']); // interpretation rules quoted in 1.2, not defined terms
for (const s of articles[0].sections) for (const item of s.body) if (item.defs) for (const [t] of item.defs) t.split(/,\s*|\s+and\s+/).forEach(x => { x = x.replace(/^and\s+/, '').trim(); if (x) definedTerms.add(x); });
for (const m of allText.matchAll(/"([A-Z][A-Za-z-]+(?: [A-Za-z-]+){0,4})"/g)) {
  const t = m[1];
  if (notTerms.has(t)) continue;
  if (/^(Agreement|Company|Members?|Effective Date)$/.test(t) || /^[A-Z][a-z]+( [A-Z][A-Za-z-]+)*$/.test(t)) definedTerms.add(t);
}
const watch = ['Approved Project Plan','Project Plan','Capital Call','Default Advance','Default Amount','Default Contribution','Defaulting Member','Member Loan','Capital Account','Distributable Cash','Tax Distribution','Reserves','Reserved Decision','Emergency Expenditure','Company Opportunity','Confidential Information','Deadlock','Offeror','Unit Price','Offer Notice','Buy-Sell Event','Affected Member','Cause','Purchase Price','Net Asset Value','Valuation Date','Economic Interest','Economic Interest Holder','Majority in Interest','Supermajority in Interest','Unanimous Consent','Percentage Interest','Membership Interest','Maximum Additional Commitment','Initial Capital Contribution','Unreturned Capital Contribution','Bankruptcy Event','Disability','Business Day','Fiscal Year','Related Party','Subsidiary','Transfer','Transferee','Transferor','Assumed Tax Rate','Effective Date','Profits','Losses','Person','Manager','Member','Act','Articles','Code','Treasury Regulations','Project','Affiliate','Capital Contribution'];
for (const t of watch) {
  const singular = t;
  const defined = definedTerms.has(singular) || definedTerms.has(singular.replace(/s$/, ''));
  if (!defined) problems.push(`term used but never defined: ${t}`);
}
for (const t of definedTerms) {
  const esc = t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const uses = (allText.match(new RegExp(`(?<!")\\b${esc}s?\\b(?!")`, 'g')) || []).length;
  if (uses === 0) problems.push(`defined term never used outside its definition: ${t}`);
}

const words = allText.split(/\s+/).filter(Boolean).length;
if (problems.length) {
  console.error('GATES FAILED');
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
console.log(`gates ok: ${articles.length} articles, ${articles.reduce((n, a) => n + a.sections.length, 0)} sections, ${refs.size} anchors, ${words} words, ${definedTerms.size} defined terms, ${Object.keys(plain).length} plain notes (${plainText.split(/\s+/).length} words)`);

// ---------------------------------------------------------------- HTML
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Bracketed blanks become highlighted spans; bare underscore runs (signature and fill-in lines)
// become flexible rules so they can never force horizontal scrolling on a phone.
const H = s => resolve(esc(s), 'html').replace(/\[__________\]/g, '<span class="blank">[__________]</span>').replace(/(?<!\[)_{4,}(?!\])/g, '<span class="rule"></span>');
const sigLine = f => esc(f).replace(/_{4,}/g, '<span class="rule"></span>');

function htmlList(list, level = 0) {
  const out = [`<ol class="lv${level}">`];
  list.forEach((li, i) => {
    const lab = level === 0 ? letters(i) : roman(i);
    if (typeof li === 'string') out.push(`<li><span class="lab">${lab}</span><div>${H(li)}</div></li>`);
    else out.push(`<li><span class="lab">${lab}</span><div>${H(li.text)}${li.sub ? htmlList(li.sub, level + 1) : ''}</div></li>`);
  });
  out.push('</ol>');
  return out.join('');
}
function htmlBody(body) {
  const out = [];
  for (const item of body) {
    if (typeof item === 'string') out.push(`<p>${H(item)}</p>`);
    else if (item.list) { if (item.lead) out.push(`<p class="lead-in">${H(item.lead)}</p>`); out.push(htmlList(item.list)); }
    else if (item.defs) {
      out.push('<dl class="defs">');
      for (const [t, x] of item.defs) { const d = defLine(t, x); out.push(`<div><dt>"${esc(d.term)}"</dt><dd>${esc(d.joiner)}${H(d.text)}</dd></div>`); }
      out.push('</dl>');
    } else if (item.table) {
      const T = item.table;
      out.push('<div class="tw"><table><thead><tr>' + T.cols.map(c => `<th>${esc(c)}</th>`).join('') + '</tr></thead><tbody>');
      for (const r of T.rows) out.push(`<tr${r[0] === 'Total' ? ' class="tot"' : ''}>` + r.map(c => `<td>${H(c)}</td>`).join('') + '</tr>');
      out.push('</tbody></table></div>');
    } else if (item.sig) {
      for (let i = 0; i < item.sig.count; i++) out.push(`<div class="sig"><div class="sig-l">${esc(item.sig.label)}${item.sig.count > 1 ? ' ' + (i + 1) : ''}</div>` + item.sig.fields.map(f => `<div>${sigLine(f)}</div>`).join('') + '</div>');
    }
  }
  return out.join('\n');
}

const toc = articles.map(a => `<li><a href="#${a.anchor}"><b>${a.num}.</b> ${esc(a.title)}</a><ol>${a.sections.map(s => `<li><a href="#${s.anchor}">${s.num} ${esc(s.title)}</a></li>`).join('')}</ol></li>`).join('') +
  [...schedules, ...exhibits].map(x => `<li><a href="#${x.anchor}"><b>${esc(x.label)}.</b> ${esc(x.title)}</a></li>`).join('');

const css = `
:root{--paper:#F7F5F0;--card:#FFFDF9;--ink:#1B1915;--muted:#6E6759;--faint:#918977;--rule:#E2DDD2;--rule-soft:#EDE9E0;--pine:#24544A;--pine-soft:#E3ECE8;--brass:#A0761F;--brass-soft:#F3EAD5;--shadow:0 1px 2px rgba(27,25,21,.05),0 8px 24px -12px rgba(27,25,21,.18)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--paper:#14161A;--card:#1A1D22;--ink:#E9E6DF;--muted:#9A958A;--faint:#7C776D;--rule:#2A2E35;--rule-soft:#22262C;--pine:#7FB8A6;--pine-soft:#1E2A27;--brass:#D2A24C;--brass-soft:#2A2418;--shadow:none}}
:root[data-theme="dark"]{--paper:#14161A;--card:#1A1D22;--ink:#E9E6DF;--muted:#9A958A;--faint:#7C776D;--rule:#2A2E35;--rule-soft:#22262C;--pine:#7FB8A6;--pine-soft:#1E2A27;--brass:#D2A24C;--brass-soft:#2A2418;--shadow:none}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--paper);color:var(--ink);font-family:"DM Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:17px;line-height:1.6;font-weight:400}
a{color:var(--pine);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--pine) 40%,transparent)}a:hover{border-bottom-color:var(--pine)}
.wrap{max-width:52rem;margin:0 auto;padding:0 20px 80px}
header.top{padding:56px 0 28px;border-bottom:1px solid var(--rule)}
.eyebrow{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brass);margin:0 0 14px}
h1{font-size:clamp(2rem,5vw,3rem);line-height:1.05;letter-spacing:-.02em;margin:0 0 10px;font-weight:600;text-wrap:balance}
.sub{font-size:1.1rem;color:var(--muted);margin:0 0 22px;max-width:40rem}
.btns{display:flex;flex-wrap:wrap;gap:10px}
.btn{display:inline-block;padding:11px 18px;border-radius:8px;border:1px solid var(--pine);background:var(--pine);color:#fff;font-weight:600;font-size:15px}
.btn.alt{background:transparent;color:var(--pine)}
.note{background:var(--card);border:1px solid var(--rule);border-radius:12px;padding:26px 28px;margin:36px 0;box-shadow:var(--shadow)}
.note h2{margin:0 0 4px;font-size:1.35rem;letter-spacing:-.01em}
.note .rm{color:var(--brass);font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;margin:0 0 16px}
.note h3{font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);margin:26px 0 10px;font-weight:600}
.dec{display:grid;grid-template-columns:11rem 1fr;gap:6px 18px;margin:0}
.dec dt{font-weight:600;color:var(--ink);padding-top:10px;border-top:1px solid var(--rule-soft)}
.dec dd{margin:0;padding:10px 0 12px;border-top:1px solid var(--rule-soft)}
.dec dd .where{display:block;font-size:13px;color:var(--faint);margin-top:4px}
@media (max-width:640px){.dec{grid-template-columns:1fr}.dec dt{padding-bottom:0}.dec dd{border-top:0;padding-top:4px}}
ul.plain{padding-left:1.2rem;margin:0}ul.plain li{margin:0 0 8px}
nav.toc{margin:36px 0 10px;padding:22px 26px;background:var(--card);border:1px solid var(--rule);border-radius:12px}
nav.toc h2{font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);margin:0 0 12px;font-weight:600}
nav.toc>ol{margin:0;padding:0;list-style:none;columns:2;column-gap:28px}
nav.toc>ol>li{break-inside:avoid;margin:0 0 10px;font-weight:500}
nav.toc ol ol{list-style:none;padding:2px 0 0 14px;margin:0;font-size:13.5px;font-weight:400;color:var(--muted)}
nav.toc ol ol li{margin:0 0 2px}nav.toc a{border:0}
@media (max-width:640px){nav.toc>ol{columns:1}}
.doc-title{text-align:center;margin:56px 0 30px}
.doc-title .t1{font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:600}
.doc-title h2{font-size:clamp(1.5rem,3.4vw,2rem);margin:6px 0 2px;letter-spacing:-.01em}
.doc-title .t3{color:var(--muted);font-size:15px}
.preamble p{font-size:17px}
article.art{margin:48px 0 0;padding-top:28px;border-top:1px solid var(--rule)}
article.art>h2{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 2px;font-weight:600}
article.art>h2 span{display:block;font-size:1.5rem;letter-spacing:-.01em;text-transform:none;color:var(--ink);margin-top:2px;font-weight:600}
section.sec{margin:26px 0 0}
section.sec h3{font-size:1.02rem;margin:0 0 6px;font-weight:600}
section.sec h3 .n{color:var(--brass);margin-right:8px;font-variant-numeric:tabular-nums}
section.sec p{margin:0 0 12px}
p.lead-in{margin-bottom:6px}
ol.lv0,ol.lv1{list-style:none;padding:0;margin:0 0 12px}
ol.lv0>li,ol.lv1>li{display:grid;grid-template-columns:2.4rem 1fr;gap:0 4px;margin:0 0 8px}
ol.lv0{padding-left:.6rem}ol.lv1{padding-left:0;margin-top:8px}
.lab{color:var(--muted);font-variant-numeric:tabular-nums}
dl.defs{margin:8px 0 0}dl.defs>div{margin:0 0 10px;padding-left:1.4rem;text-indent:-1.4rem}
dl.defs dt{display:inline;font-weight:600}dl.defs dd{display:inline;margin:0}
.blank{background:var(--brass-soft);color:var(--brass);border-radius:3px;padding:0 3px;font-variant-numeric:tabular-nums}
.page{margin:56px 0 0;padding-top:28px;border-top:1px solid var(--rule)}
.page>h2{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 2px;font-weight:600}
.page>h2 span{display:block;font-size:1.4rem;letter-spacing:-.01em;text-transform:none;color:var(--ink);margin-top:2px;font-weight:600}
.page p{margin:0 0 12px}
.sig{margin:22px 0 0 0;padding:14px 16px;border:1px dashed var(--rule);border-radius:8px;font-size:15px;line-height:1.9}
.sig-l{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);font-weight:600}
.sig.co{border-style:solid}
.sig div{overflow-wrap:anywhere}
.rule{display:inline-block;width:14rem;max-width:70%;border-bottom:1px solid var(--muted);height:1em;vertical-align:baseline;margin:0 2px}
p .rule{width:9rem;max-width:45%}
.tw{overflow-x:auto;margin:10px 0 14px}
table{border-collapse:collapse;width:100%;font-size:14px}
th,td{text-align:left;padding:8px 10px;border-bottom:1px solid var(--rule);vertical-align:top}
th{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--faint);font-weight:600;border-bottom:2px solid var(--rule)}
tr.tot td{font-weight:600}
footer.foot{margin-top:64px;padding-top:22px;border-top:1px solid var(--rule);font-size:13.5px;color:var(--muted)}
footer.foot p{margin:0 0 8px}
.plain,.art-plain{margin:14px 0 0;padding:12px 16px;background:var(--pine-soft);border-left:3px solid var(--pine);border-radius:0 8px 8px 0;font-size:15.5px;line-height:1.55;color:var(--ink)}
.art-plain{margin-top:10px}
.plain .pl-l{display:block;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--pine);font-weight:700;margin-bottom:4px}
.toggle{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:var(--muted);margin-top:16px;cursor:pointer;user-select:none}
.toggle input{width:16px;height:16px;accent-color:var(--pine);margin:0}
body.hide-plain .plain,body.hide-plain .art-plain{display:none}
@media print{body{background:#fff;color:#000;font-size:11.5pt}.btns,nav.toc,footer.foot,.toggle{display:none}.plain,.art-plain{background:#f3f3f3;border-left-color:#666;color:#000}.note{border:1px solid #999;box-shadow:none;page-break-after:always}.wrap{max-width:none;padding:0}article.art,.page{page-break-inside:auto}.page{page-break-before:always}a{color:#000;border:0}.blank{background:none;color:#000}}
`;

const decisionsHtml = notes.decisions.map(([q, a, where]) => {
  const r = refs.get(where);
  if (!r) problems.push(`decision points at unknown id ${where}`);
  return `<dt>${esc(q)}</dt><dd>${esc(a)}<span class="where">Where: <a href="#${r.anchor}">${r.label}${r.kind === 'sec' ? ', ' + esc(articles.flatMap(x => x.sections).find(s => s.id === where).title) : ''}</a></span></dd>`;
}).join('');
if (problems.length) { console.error(problems); process.exit(1); }

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Better View Operating Agreement Redraft</title>
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="googlebot" content="noindex, nofollow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap">
<style>${css}</style>
</head>
<body>
<div class="wrap">
<header class="top">
  <p class="eyebrow">Georgia SEO Company &middot; Document Redraft &middot; ${esc(meta.date)}</p>
  <h1>Operating Agreement of ${esc(meta.company)}</h1>
  <p class="sub">${esc(meta.version)}. A complete rewrite of the September 2026 draft that applies all thirty-five findings in the review. Under every section there is a plain-English note saying what it means for the five of you; the notes are a reading aid, not part of the agreement. Bracketed items are for the Members to fill in.</p>
  <div class="btns"><a class="btn" href="${esc(meta.docxFile)}">Download the Word file</a><a class="btn alt" href="../">Read the review</a></div>
  <label class="toggle"><input type="checkbox" id="plainToggle" checked> Show the plain-English notes</label>
</header>

<section class="note" id="note">
  <h2>${esc(notes.title)}</h2>
  <p class="rm">${esc(notes.remove)}</p>
  ${notes.intro.map(p => `<p>${H(p)}</p>`).join('\n  ')}
  <h3>${esc(notes.decisionsHeading)}</h3>
  <dl class="dec">${decisionsHtml}</dl>
  <h3>${esc(notes.blanksHeading)}</h3>
  <ul class="plain">${notes.blanks.map(b => `<li>${H(b)}</li>`).join('')}</ul>
  <h3>${esc(notes.attorneyHeading)}</h3>
  <ul class="plain">${notes.attorney.map(b => `<li>${H(b)}</li>`).join('')}</ul>
</section>

<nav class="toc"><h2>Contents</h2><ol>${toc}</ol></nav>

<div class="doc-title"><div class="t1">Operating Agreement of</div><h2>${esc(meta.company)}</h2><div class="t3">A Georgia limited liability company managed by Managers</div></div>
<div class="preamble">${preamble.map(p => `<p>${H(p)}</p>`).join('\n')}</div>

${articles.map(a => `<article class="art" id="${a.anchor}"><h2>Article ${a.num}<span>${esc(a.title)}</span></h2>
<p class="art-plain">${esc(plain[a.id])}</p>
${a.sections.map(s => `<section class="sec" id="${s.anchor}"><h3><span class="n">${s.num}</span>${esc(s.title)}</h3>
${htmlBody(s.body)}
<aside class="plain"><span class="pl-l">In plain English</span>${esc(plain[s.id])}</aside>
</section>`).join('\n')}
</article>`).join('\n')}

<div class="page" id="signatures"><h2>Signatures<span>Signature Page</span></h2>
<p>${esc(signaturePage.witness)}</p>
<div class="sig co"><div class="sig-l">${esc(signaturePage.company.label)}</div><div>${esc(signaturePage.company.name)}</div><div>${sigLine(signaturePage.company.by)}</div>${signaturePage.company.fields.map(f => `<div>${sigLine(f)}</div>`).join('')}</div>
${Array.from({ length: signaturePage.members }, (_, i) => `<div class="sig"><div class="sig-l">Member ${i + 1}</div>${signaturePage.memberFields.map(f => `<div>${sigLine(f)}</div>`).join('')}</div>`).join('\n')}
</div>

${[...schedules, ...exhibits].map(x => `<div class="page" id="${x.anchor}"><h2>${esc(x.label)}<span>${esc(x.title)}</span></h2>
<p class="art-plain">${esc(plain[x.id])}</p>
${htmlBody(x.body)}
</div>`).join('\n')}

<footer class="foot">
  <p><strong>Georgia SEO Company</strong> &middot; Redraft prepared for ${esc(meta.company)}, ${esc(meta.date)}, from the draft operating agreement as provided and the review published with it. Not for redistribution outside the Members and their advisors.</p>
  <p>This is a working draft for review by a Georgia attorney. It is not legal or tax advice, it has not been reviewed by an attorney, and it does not create an attorney-client relationship. Statute references are to the Georgia Limited Liability Company Act (O.C.G.A. &sect; 14-11-100 and following), the Internal Revenue Code, and Treasury Regulations as understood on the drafting date, and should be confirmed against current law before anyone signs.</p>
</footer>
</div>
<script>
(function(){var cb=document.getElementById('plainToggle');if(!cb)return;var key='bv-plain-notes';
try{if(localStorage.getItem(key)==='off'){cb.checked=false;document.body.classList.add('hide-plain');}}catch(e){}
cb.addEventListener('change',function(){document.body.classList.toggle('hide-plain',!cb.checked);try{localStorage.setItem(key,cb.checked?'on':'off');}catch(e){}});
})();
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(outDir, 'index.html'), html);
fs.writeFileSync(path.join(process.env.TEXT_OUT || outDir, 'agreement.txt'), allText);
console.log('html written', (html.length / 1024).toFixed(1) + 'KB');

// ---------------------------------------------------------------- DOCX
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, Header, Footer, PageNumber, TabStopType, LevelFormat } = docx;
const FONT = 'Times New Roman';
const SZ = 24; // 12pt
const run = (text, opts = {}) => new TextRun({ text, font: FONT, size: SZ, ...opts });
const T = s => resolve(s, 'text');
const P = (children, opts = {}) => new Paragraph({ spacing: { after: 120, line: 264 }, ...opts, children: Array.isArray(children) ? children : [children] });
const para = (text, opts = {}) => P(run(T(text)), opts);
const heading = (text, level = HeadingLevel.HEADING_1, opts = {}) => new Paragraph({ heading: level, alignment: AlignmentType.CENTER, spacing: { before: 360, after: 120 }, keepNext: true, ...opts, children: [run(text, { bold: true })] });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

function docxList(list, level = 0) {
  const out = [];
  list.forEach((li, i) => {
    const lab = level === 0 ? letters(i) : roman(i);
    const text = typeof li === 'string' ? li : li.text;
    out.push(new Paragraph({ spacing: { after: 100, line: 264 }, indent: { left: 720 + level * 720, hanging: 540 }, tabStops: [{ type: TabStopType.LEFT, position: 720 + level * 720 }], children: [run(lab + '\t' + T(text))] }));
    if (typeof li !== 'string' && li.sub) out.push(...docxList(li.sub, level + 1));
  });
  return out;
}
function docxBody(body) {
  const out = [];
  for (const item of body) {
    if (typeof item === 'string') out.push(para(item));
    else if (item.list) { if (item.lead) out.push(para(item.lead, { spacing: { after: 80, line: 264 } })); out.push(...docxList(item.list)); }
    else if (item.defs) {
      for (const [t, x] of item.defs) { const d = defLine(t, x); out.push(P([run(`"${d.term}"`, { bold: true }), run(d.joiner + T(d.text))], { indent: { left: 360 } })); }
    } else if (item.table) {
      const Tb = item.table;
      const total = Tb.widths.reduce((a, b) => a + b, 0);
      const cell = (text, w, head = false, bold = false) => new TableCell({ width: { size: w, type: WidthType.DXA }, shading: head ? { type: ShadingType.CLEAR, fill: 'E7E6E6', color: 'auto' } : undefined, margins: { top: 60, bottom: 60, left: 90, right: 90 }, children: [new Paragraph({ spacing: { after: 0 }, children: [run(T(text), { bold: head || bold, size: 20 })] })] });
      out.push(new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: Tb.widths, rows: [
        new TableRow({ tableHeader: true, children: Tb.cols.map((c, i) => cell(c, Tb.widths[i], true)) }),
        ...Tb.rows.map(r => new TableRow({ children: r.map((c, i) => cell(c, Tb.widths[i], false, r[0] === 'Total')) })),
      ] }));
      out.push(P(run('')));
    } else if (item.sig) {
      for (let i = 0; i < item.sig.count; i++) {
        out.push(P(run(item.sig.label.toUpperCase() + (item.sig.count > 1 ? ' ' + (i + 1) : ''), { bold: true, size: 20 }), { spacing: { before: 280, after: 60 }, keepNext: true }));
        item.sig.fields.forEach((f, j) => out.push(P(run(f), { spacing: { after: 60, line: 300 }, keepNext: j < item.sig.fields.length - 1 })));
      }
    }
  }
  return out;
}

const children = [];
// Note page
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { after: 60 }, children: [run(notes.title.toUpperCase(), { bold: true })] }));
children.push(P(run(notes.remove, { italics: true })));
notes.intro.forEach(p => children.push(para(p)));
children.push(P(run(notes.decisionsHeading, { bold: true }), { spacing: { before: 240, after: 100 }, keepNext: true }));
notes.decisions.forEach(([q, a, where]) => { const r = refs.get(where); children.push(P([run(q + '. ', { bold: true }), run(T(a) + ` (${r.label}.)`)], { indent: { left: 360 } })); });
children.push(P(run(notes.blanksHeading, { bold: true }), { spacing: { before: 240, after: 100 }, keepNext: true }));
notes.blanks.forEach(b => children.push(new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { after: 80 }, children: [run(T(b))] })));
children.push(P(run(notes.attorneyHeading, { bold: true }), { spacing: { before: 240, after: 100 }, keepNext: true }));
notes.attorney.forEach(b => children.push(new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { after: 80 }, children: [run(T(b))] })));
children.push(P(run('Prepared by Georgia SEO Company, Rome, Georgia, from the draft operating agreement as provided and the review published with it. Not legal advice.', { italics: true, size: 20 }), { spacing: { before: 300 } }));
children.push(pageBreak());
// Title
children.push(P(run('OPERATING AGREEMENT', { bold: true, size: 32 }), { alignment: AlignmentType.CENTER, spacing: { before: 1200, after: 120 } }));
children.push(P(run('OF', { bold: true }), { alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
children.push(P(run(meta.company.toUpperCase(), { bold: true, size: 28 }), { alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
children.push(P(run('A Georgia Limited Liability Company Managed by Managers'), { alignment: AlignmentType.CENTER, spacing: { after: 600 } }));
preamble.forEach(p => children.push(para(p)));
// Articles
for (const a of articles) {
  children.push(heading(`ARTICLE ${a.num}`, HeadingLevel.HEADING_1, { spacing: { before: 480, after: 0 } }));
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, alignment: AlignmentType.CENTER, spacing: { after: 200 }, keepNext: true, children: [run(a.title.toUpperCase(), { bold: true })] }));
  for (const s of a.sections) {
    const [first, ...rest] = s.body;
    if (typeof first === 'string') {
      children.push(P([run(`${s.num} ${s.title}. `, { bold: true }), run(T(first))], { keepNext: rest.length > 0 }));
      children.push(...docxBody(rest));
    } else {
      children.push(P([run(`${s.num} ${s.title}.`, { bold: true }), ...(first.list && first.lead ? [run(' ' + T(first.lead))] : [])], { keepNext: true }));
      const body = first.list && first.lead ? [{ ...first, lead: undefined }, ...rest] : s.body;
      children.push(...docxBody(body));
    }
  }
}
// Signature page
children.push(pageBreak());
children.push(P(run('SIGNATURE PAGE', { bold: true }), { alignment: AlignmentType.CENTER, spacing: { after: 200 } }));
children.push(para(signaturePage.witness));
children.push(P(run(signaturePage.company.label, { bold: true, size: 20 }), { spacing: { before: 300, after: 60 }, keepNext: true }));
children.push(P(run(signaturePage.company.name, { bold: true }), { spacing: { after: 160 }, keepNext: true }));
children.push(P(run(signaturePage.company.by), { spacing: { after: 60, line: 300 }, keepNext: true }));
signaturePage.company.fields.forEach(f => children.push(P(run(f), { spacing: { after: 60, line: 300 } })));
for (let i = 0; i < signaturePage.members; i++) {
  children.push(P(run(`MEMBER ${i + 1}`, { bold: true, size: 20 }), { spacing: { before: 300, after: 60 }, keepNext: true }));
  signaturePage.memberFields.forEach((f, j) => children.push(P(run(f), { spacing: { after: 60, line: 300 }, keepNext: j < signaturePage.memberFields.length - 1 })));
}
// Schedules and exhibits
for (const x of [...schedules, ...exhibits]) {
  children.push(pageBreak());
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER, spacing: { after: 0 }, keepNext: true, children: [run(x.label.toUpperCase(), { bold: true })] }));
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, alignment: AlignmentType.CENTER, spacing: { after: 240 }, keepNext: true, children: [run(x.title, { bold: true })] }));
  children.push(...docxBody(x.body));
}

const doc = new Document({
  creator: 'Georgia SEO Company',
  title: `Operating Agreement of ${meta.company} (draft)`,
  styles: {
    default: {
      document: { run: { font: FONT, size: SZ } },
      heading1: { run: { font: FONT, size: SZ, bold: true, color: '000000' }, paragraph: { spacing: { before: 360, after: 120 } } },
      heading2: { run: { font: FONT, size: SZ, bold: true, color: '000000' }, paragraph: { spacing: { before: 0, after: 200 } } },
    },
  },
  numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [run(`DRAFT FOR ATTORNEY REVIEW  ·  NOT FOR SIGNATURE  ·  ${meta.date}`, { size: 16, color: '666666' })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run(`${meta.company}  ·  Operating Agreement  ·  Page `, { size: 18, color: '666666' }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18, color: '666666' }), run(' of ', { size: 18, color: '666666' }), new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 18, color: '666666' })] })] }) },
    children,
  }],
});
const buf = await Packer.toBuffer(doc);
const docxPath = path.join(outDir, meta.docxFile);
fs.writeFileSync(docxPath, buf);
console.log('docx written', docxPath, (buf.length / 1024).toFixed(1) + 'KB');
