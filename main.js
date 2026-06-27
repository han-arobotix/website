/* nav scroll */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));

/* reveal */
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));

/* tech tabs */
const tabs=document.querySelectorAll('.tech-tab'),panels=document.querySelectorAll('.tech-panel');
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('active'));panels.forEach(p=>p.classList.remove('active'));
  t.classList.add('active');document.querySelector('.tech-panel[data-panel="'+t.dataset.tab+'"]').classList.add('active');
}));

/* hardware tabs */
(function(){
  const ex=document.querySelector('.hw-explorer'); if(!ex) return;
  const ht=ex.querySelectorAll('.hw-tab'), hp=ex.querySelectorAll('.hw-panel');
  ht.forEach(t=>t.addEventListener('click',()=>{
    ht.forEach(x=>x.classList.remove('active')); hp.forEach(p=>p.classList.remove('active'));
    t.classList.add('active'); ex.querySelector('.hw-panel[data-hwpanel="'+t.dataset.hw+'"]').classList.add('active');
  }));
})();

/* lightbox */
(function(){
  const lb=document.getElementById('lightbox'), im=document.getElementById('lbImg'); if(!lb) return;
  document.querySelectorAll('.hw-img').forEach(el=>el.addEventListener('click',()=>{im.src=el.dataset.full||el.src; lb.classList.add('open');}));
  const close=()=>lb.classList.remove('open');
  lb.addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
})();

/* background videos: force muted autoplay, play when in view, pause when out */
(function(){
  const vids=document.querySelectorAll('video'); if(!vids.length) return;
  const play=v=>{try{v.muted=true;v.defaultMuted=true;const p=v.play();if(p&&p.catch)p.catch(()=>{});}catch(e){}};
  vids.forEach(v=>{
    v.muted=true; v.setAttribute('muted','');
    v.addEventListener('loadeddata',()=>play(v),{once:true});
    v.addEventListener('canplay',()=>play(v),{once:true});
  });
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) play(e.target); else e.target.pause(); }),{threshold:.15});
    vids.forEach(v=>io.observe(v));
  } else { vids.forEach(play); }
  // last-resort: kick playback on first user interaction
  const kick=()=>{vids.forEach(play); document.removeEventListener('pointerdown',kick); document.removeEventListener('scroll',kick);};
  document.addEventListener('pointerdown',kick,{passive:true,once:true});
  document.addEventListener('scroll',kick,{passive:true,once:true});
})();

/* mobile menu */
(function(){
  const t=document.querySelector('.nav-toggle'), m=document.getElementById('mobileMenu'); if(!t||!m) return;
  t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.classList.toggle('open',o);t.setAttribute('aria-expanded',o);});
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');t.classList.remove('open');t.setAttribute('aria-expanded',false);}));
})();
