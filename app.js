// app.js — extended G.A.P.S. UI glue with local persistence
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  bindNavLinks();
  loadState();
  applyState();
  // register service worker when available (already added on branch)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(err => console.warn('SW registration failed', err));
  }
});

// ---------- Persistent state ----------
const STORAGE_KEY = 'gaps_state_v1';
let state = {
  currentDay: 47,
  coverOpen: true,
  haltScores: { H:0, A:0, L:0, T:0 },
  checkinAnswers: {},
  flourishEntries: [],
  resumeName: '',
  schoolName: '',
  mode: 'worker',
};

function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      state = Object.assign(state, s);
    }
  } catch(e){ console.warn('loadState failed', e); }
}
function saveState(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e){ console.warn('saveState failed', e); }
}

function applyState(){
  // day
  const dayEl = document.getElementById('panel-day');
  if (dayEl) dayEl.textContent = state.currentDay;
  const dayDisplay = document.getElementById('day-display'); if (dayDisplay) dayDisplay.textContent = (dayDisplay.textContent.includes('Day')? 'Day ' + state.currentDay : 'Slow Soak · Day ' + state.currentDay);
  // cover
  const cover = document.getElementById('cover'); if (cover) cover.classList.toggle('open', state.coverOpen);
  const coverBtn = document.getElementById('cover-toggle-btn'); if (coverBtn) coverBtn.textContent = state.coverOpen ? 'CLOSE COVER ↓' : 'OPEN COVER ↑';
  // mode
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode===state.mode));
  // halt
  if (document.getElementById('halt-rows')) buildHalt();
  // flourish entries
  if (state.flourishEntries && state.flourishEntries.length) {
    const wrap = document.getElementById('flourish-entries');
    if (wrap) {
      wrap.innerHTML = '';
      state.flourishEntries.slice().reverse().forEach(txt => {
        const e = document.createElement('div'); e.className='journal-entry'; e.textContent = txt; wrap.prepend(e);
      });
    }
  }
  // resume/school names
  const rs = document.getElementById('resume-status'); if (rs && state.resumeName) rs.textContent = 'Selected: ' + state.resumeName;
  const ss = document.getElementById('school-status'); if (ss && state.schoolName) ss.textContent = 'Selected: ' + state.schoolName;
}

// ---------- Clock ----------
function startClock(){
  updateClock();
  setInterval(updateClock, 30000);
}
function updateClock(){
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  el.textContent = h + ':' + m;
  const gEl = document.getElementById('greeting'); if (!gEl) return;
  const g = now.getHours() < 12 ? 'Good morning' : now.getHours() < 17 ? 'Good afternoon' : 'Good evening';
  gEl.textContent = g;
}

// ---------- Navigation & UI ----------
function bindNavLinks(){
  window.go = (id) => {
    document.querySelectorAll('.scr').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('s-' + id) || document.getElementById(id);
    if (el) el.classList.add('active');
    // some screens need build
    if (id === 'tier' || id === 'paws') { buildPawsList && buildPawsList(); }
    if (id === 'breath') resetBreath && resetBreath();
    if (id === 'checkin') resetCheckin && resetCheckin();
    currentScreen = id;
  };
  window.dpaGoTo = (id) => window.go(id);

  window.setMode = (m) => {
    state.mode = m;
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode===m));
    saveState();
  };

  window.openCover = () => { state.coverOpen = true; saveState(); const c = document.getElementById('cover'); if(c) c.classList.add('open'); };
  window.toggleCover = () => { state.coverOpen = !state.coverOpen; saveState(); const c = document.getElementById('cover'); if(c) c.classList.toggle('open', state.coverOpen); const btn=document.getElementById('cover-toggle-btn'); if(btn) btn.textContent = state.coverOpen ? 'CLOSE COVER ↓' : 'OPEN COVER ↑'; };
}

// ---------- Day controls ----------
function changeDay(delta){
  state.currentDay = Math.max(1, Math.min(365, (state.currentDay || 47) + delta));
  saveState();
  const pd = document.getElementById('panel-day'); if (pd) pd.textContent = state.currentDay;
  const dd = document.getElementById('day-display'); if (dd) dd.textContent = dd.textContent.includes('Day') ? 'Day ' + state.currentDay : 'Slow Soak · Day ' + state.currentDay;
  // update any PAWS label
  const lbl = document.getElementById('paws-label') || document.getElementById('tier-label'); if (lbl && typeof getPawsHurdle === 'function') {
    const h = getPawsHurdle(state.currentDay);
    lbl.textContent = h ? ('PAWS H' + h.id + ' · ' + h.name) : '';
    if (h && h.color) { lbl.style.color = h.color; }
  }
}

// ---------- HALT (generic) ----------
function buildHalt(){
  const dims = [{k:'H',l:'Hungry',c:'#B07820'},{k:'A',l:'Angry',c:'#C03030'},{k:'L',l:'Lonely',c:'#1F7EA1'},{k:'T',l:'Tired',c:'#7B4EA6'}];
  const container = document.getElementById('halt-rows');
  if (!container) return;
  container.innerHTML = '';
  dims.forEach(d => {
    const row = document.createElement('div'); row.className='halt-row';
    row.innerHTML = `<div class="halt-header"><span style="font-size:10px;color:${d.c};font-weight:700">${d.k} — ${d.l}</span><span style="font-size:10px;color:#D4A820;font-weight:900" id="halt-score-${d.k}">`+(state.haltScores[d.k]||0)+`/5</span></div><div class="halt-bars" id="halt-bars-${d.k}"></div>`;
    container.appendChild(row);
    const bars = document.getElementById('halt-bars-' + d.k);
    for (let v = 1; v <= 5; v++){
      const b = document.createElement('button'); b.className='halt-bar'; b.style.background = d.c; b.id = 'hbar-' + d.k + '-' + v;
      b.onclick = () => setHalt(d.k, v, d.c);
      bars.appendChild(b);
    }
    // set initial state
    const current = state.haltScores && state.haltScores[d.k] ? state.haltScores[d.k] : 0;
    for (let v=1; v<=5; v++){ const el=document.getElementById('hbar-'+d.k+'-'+v); if(el) el.classList.toggle('on', v<=current); }
  });
  updateHaltResult();
}

function setHalt(key, val, color){
  state.haltScores = state.haltScores || {H:0,A:0,L:0,T:0};
  state.haltScores[key] = val;
  saveState();
  const scoreEl = document.getElementById('halt-score-' + key); if(scoreEl) scoreEl.textContent = val + '/5';
  for (let v = 1; v <= 5; v++){ const b=document.getElementById('hbar-'+key+'-'+v); if(b) b.classList.toggle('on', v<=val); }
  updateHaltResult();
}

function updateHaltResult(){
  const total = Object.values(state.haltScores||{H:0,A:0,L:0,T:0}).reduce((a,b)=>a+b,0);
  const risk = total <= 6 ? {l:'LOW',c:'#34C759'} : total <= 12 ? {l:'MODERATE',c:'#FF9500'} : {l:'HIGH',c:'#C03030'};
  const rl = document.getElementById('halt-risk-label'); if (rl) { rl.textContent = total>0?risk.l:'—'; rl.style.color = risk.c; }
  const rt = document.getElementById('halt-total'); if (rt) rt.textContent = 'Total ' + total + '/20';
  const res = document.getElementById('halt-result'); if (res) { res.style.background = total>0? risk.c + '1A' : 'transparent'; res.style.border = total>0? ('1px solid '+risk.c+'44') : 'none'; }
  const tip = document.getElementById('halt-tip'); if (tip) tip.style.display = total>12? 'block' : 'none';
  const breathBtn = document.getElementById('halt-breath-btn'); if (breathBtn) breathBtn.style.display = total>0 ? 'block' : 'none';
}

// ---------- BREATH (lightweight) ----------
let breathTimer = null, breathPhase='idle', breathCount=0, breathCycles=0;
function resetBreath(){ clearInterval(breathTimer); breathPhase='idle'; breathCount=0; breathCycles=0; setBreathUI && setBreathUI('ONE-BREATH RESET','#1F7EA1','◉','4 in · 2 hold · 6 out · 3 cycles',68,false,true); }
function startBreath(){ breathCycles=0; runPhase('in'); }
function runPhase(phase){ if (breathTimer) clearInterval(breathTimer); const dur = {in:4,hold:2,out:6}[phase]; const colors={in:'#1A5C2A',hold:'#B07820',out:'#1F7EA1'}; const labels={in:'BREATHE IN',hold:'HOLD',out:'BREATHE OUT'}; const sizes={in:84,hold:74,out:64}; breathPhase=phase; breathCount=dur; setBreathUI && setBreathUI(labels[phase], colors[phase], String(dur), 'Cycle '+(breathCycles+1)+' of 3', sizes[phase], false, false);
  breathTimer = setInterval(()=>{ breathCount--; const num = document.getElementById('breath-num'); if (num) num.textContent = breathCount; if (breathCount<=0){ clearInterval(breathTimer); if (phase==='in') runPhase('hold'); else if (phase==='hold') runPhase('out'); else { breathCycles++; if (breathCycles>=3){ breathPhase='done'; setBreathUI && setBreathUI('COMPLETE','#34C759','◉','All 3 cycles complete',68,true,true); const btn=document.getElementById('breath-start-btn'); if(btn){ btn.textContent='AGAIN'; btn.onclick=startBreath; } } else runPhase('in'); } } },1000);
}
function stopBreath(){ if (breathTimer) clearInterval(breathTimer); resetBreath(); go && go('home'); }
function setBreathUI(label,color,numTxt,sub,size,showDone,showBtn){ const lbl=document.getElementById('breath-label'); if(lbl){ lbl.textContent=label; lbl.style.color=color;} const num=document.getElementById('breath-num'); if(num){ num.textContent=numTxt; num.style.color=color;} const subEl=document.getElementById('breath-sub'); if(subEl) subEl.textContent=sub; const circle=document.getElementById('breath-circle'); if(circle){ circle.style.width=size+'px'; circle.style.height=size+'px'; circle.style.borderColor=color; circle.style.background='radial-gradient(circle,'+color+'12,transparent)'; } const done=document.getElementById('breath-done-msg'); if(done) done.style.display = showDone? 'block':'none'; const btn=document.getElementById('breath-start-btn'); if(btn) btn.style.display = showBtn? 'block':'none'; }

// ---------- Dialogue notes / Flourish ----------
function addDialogueNote(tag,inputId){ const i = document.getElementById(inputId); if (!i) return; const v = i.value.trim(); if (!v) return; const p = document.createElement('div'); p.className='journal-entry'; p.textContent = `${tag}: ${v}`; i.value=''; const wrap = document.getElementById('flourish-entries') || document.getElementById('beachcomb-content') || document.body; if (wrap) wrap.prepend(p); // persist as flourish
  state.flourishEntries = state.flourishEntries || []; state.flourishEntries.push(v); if (state.flourishEntries.length>200) state.flourishEntries.shift(); saveState(); }

function addFlourishEntry(){ const t = document.getElementById('flourish-input'); if(!t) return; const txt = t.value.trim(); if(!txt) return; const wrap = document.getElementById('flourish-entries'); const e = document.createElement('div'); e.className='journal-entry'; e.textContent = txt; if (wrap) wrap.prepend(e); state.flourishEntries = state.flourishEntries || []; state.flourishEntries.push(txt); if (state.flourishEntries.length>200) state.flourishEntries.shift(); saveState(); t.value=''; }

// ---------- File inputs (placeholders) ----------
function handleResumeFile(ev){ const st = document.getElementById('resume-status'); const f = ev.target.files && ev.target.files[0]; state.resumeName = f?f.name:''; saveState(); if (st) st.textContent = f?`Selected: ${f.name}`:'No file uploaded'; }
function handleSchoolFile(ev){ const st = document.getElementById('school-status'); const f = ev.target.files && ev.target.files[0]; state.schoolName = f?f.name:''; saveState(); if (st) st.textContent = f?`Selected: ${f.name}`:'No file uploaded'; }

// ---------- SOS & UIP placeholders ----------
function sosPressed(btn, who){ console.log('SOS', who); const c = document.getElementById('sos-confirm'); if (c) { c.style.display = 'block'; c.textContent = `Selected: ${who}. Confirm action in your real environment.`; } }
function startUIP(){ if (typeof buildUIP === 'function') { buildUIP(); go && go('uip'); } }

// ---------- T-F-B select stub ----------
function tfbSelect(part){ if (typeof window.tfbSelect === 'function' && window.tfbSelect !== tfbSelect) { return window.tfbSelect(part); }
  // basic highlight if boxes exist
  ['trigger','thought','feeling','behaviour','consequence'].forEach(k=>{ const el=document.getElementById('tfb-'+k+'-box'); if (el) el.style.opacity = (part && part!==k)?'0.5':'1'; });
  const det = document.getElementById('tfb-detail'); if (!part) { if(det) det.style.display='none'; return; } if (det) { det.style.display='block'; const title = document.getElementById('tfb-detail-title'); if(title) title.textContent = part.toUpperCase(); const body = document.getElementById('tfb-detail-body'); if(body) body.textContent = `Detail for ${part}.`; }
}

// ---------- Check-in persistence (if CI flow exists in page) ----------
function saveCheckinAnswer(key,value){ state.checkinAnswers = state.checkinAnswers || {}; state.checkinAnswers[key] = value; saveState(); }

// Expose changeDay for inline controls if missing
window.changeDay = changeDay;
window.setHalt = setHalt;
window.startBreath = startBreath;
window.stopBreath = stopBreath;
window.openCover = window.openCover;
window.toggleCover = window.toggleCover;
window.resetBreath = resetBreath;
window.handleResumeFile = handleResumeFile;
window.handleSchoolFile = handleSchoolFile;
window.addFlourishEntry = addFlourishEntry;
window.addDialogueNote = addDialogueNote;
window.sosPressed = sosPressed;
window.tfbSelect = tfbSelect;
window.saveCheckinAnswer = saveCheckinAnswer;
