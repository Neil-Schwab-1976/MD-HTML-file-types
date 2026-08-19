// app.js — minimal glue for G.A.P.S. UI
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  bindNavLinks();
  // register service worker when available
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(err => console.warn('SW registration failed', err));
  }
});

function startClock(){
  const el = document.getElementById('clock');
  if (!el) return;
  function tick(){
    const d = new Date();
    el.textContent = d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  }
  tick(); setInterval(tick, 30_000);
}

function bindNavLinks(){
  window.go = (id) => {
    // hide all screens and show target
    document.querySelectorAll('.scr').forEach(s => s.classList.remove('active'));
    const idCandidates = ['s-' + id, id, 's-' + id.replace(/^s-/,'')];
    for (const cid of idCandidates) {
      const el = document.getElementById(cid);
      if (el) { el.classList.add('active'); break; }
    }
    // scroll top of screen content
    const sc = document.getElementById('screenContent'); if (sc) sc.scrollTop = 0;
  };

  window.dpaGoTo = (id) => window.go(id);

  window.setMode = (m) => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode===m));
    // small visual switch: toggle body attribute
    document.body.setAttribute('data-mode', m);
  };

  window.openCover = () => {
    const c = document.getElementById('cover');
    if (c) c.classList.add('open');
  };

  // lightweight stubs so clicks don't error
  window.startBreath = () => { console.log('startBreath'); const b=document.getElementById('breath-num'); if(b) b.textContent='1'; };
  window.stopBreath = () => { console.log('stopBreath'); };
  window.addDialogueNote = (tag,inputId) => {
    const i = document.getElementById(inputId);
    if (!i) return;
    const v = i.value.trim(); if (!v) return;
    // append visible note locally
    const p = document.createElement('div'); p.className='journal-entry'; p.textContent = `${tag}: ${v}`;
    i.value='';
    const wrap = document.getElementById('flourish-entries') || document.getElementById('beachcomb-content') || document.body;
    if (wrap) wrap.prepend(p);
  };

  window.handleResumeFile = (ev) => {
    const st = document.getElementById('resume-status');
    const f = ev.target.files && ev.target.files[0];
    st.textContent = f ? `Selected: ${f.name}` : 'No file uploaded';
  };
  window.handleSchoolFile = (ev) => {
    const st = document.getElementById('school-status');
    const f = ev.target.files && ev.target.files[0];
    st.textContent = f ? `Selected: ${f.name}` : 'No file uploaded';
  };

  // placeholders for other calls:
  window.sosPressed = (btn,who) => { console.log('SOS', who); alert(`SOS: ${who}`); };
  window.tfbSelect = (part) => { console.log('TFB select', part); const d=document.getElementById('tfb-detail'); if(d){ d.style.display='block'; document.getElementById('tfb-detail-title').textContent = part.toUpperCase(); document.getElementById('tfb-detail-body').textContent = `Details for ${part}.`;} };
  window.dpaAcesChoice = (choice) => { console.log('aces choice', choice); if(choice==='controller'){ const n=document.getElementById('aces-controller-note'); if(n) n.style.display='block'; } };
  window.addFlourishEntry = () => {
    const t = document.getElementById('flourish-input'); if(!t) return;
    const txt = t.value.trim(); if(!txt) return;
    const wrap = document.getElementById('flourish-entries');
    const e = document.createElement('div'); e.className='journal-entry'; e.textContent = txt;
    if (wrap) wrap.prepend(e);
    t.value='';
  };
}
