(()=>{
  'use strict';
  const labels={
    home:['home','dashboard'],
    plan:['plan','planning'],
    work:['work','business'],
    money:['money','finance','finances'],
    content:['content','social','social media'],
    growth:['growth','goals'],
    notes:['notes','journal']
  };
  const normalize=v=>String(v||'').replace(/[+→›⌄]/g,' ').replace(/\s+/g,' ').trim().toLowerCase();
  const currentFromHash=()=>{
    const key=normalize(location.hash.replace(/^#/,''));
    return Object.keys(labels).find(area=>labels[area].includes(key))||null;
  };
  function nativeControl(area){
    const nav=document.querySelector('.lceo-original-main-nav');
    if(!nav)return null;
    const controls=[...nav.querySelectorAll('a,button,[role="button"],[data-page],[data-area],[data-section],[data-view]')];
    const aliases=labels[area]||[area];
    return controls.find(el=>{
      const href=normalize((el.getAttribute('href')||'').replace(/^#/,'').split('#').pop());
      const data=normalize(el.dataset.page||el.dataset.area||el.dataset.section||el.dataset.view||'');
      const text=normalize(el.innerText||el.getAttribute('aria-label')||el.title||'');
      return aliases.includes(href)||aliases.includes(data)||aliases.includes(text);
    })||null;
  }
  function markActive(area){
    document.querySelectorAll('.lceo-left-button').forEach(btn=>btn.classList.toggle('active',btn.dataset.area===area));
  }
  function closeDrawer(){
    document.querySelector('#lceoActionDrawer')?.classList.remove('open');
    document.querySelector('#lceoActionBackdrop')?.classList.remove('open');
    document.querySelector('#lceoActionDrawer')?.setAttribute('aria-hidden','true');
  }
  function navigate(area){
    if(!labels[area])return;
    closeDrawer();
    markActive(area);
    const control=nativeControl(area);
    if(control){
      control.click();
    }else{
      const old=location.href;
      location.hash=area;
      if(location.href===old)window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
    setTimeout(()=>{
      const now=currentFromHash();
      if(now!==area){
        const oldURL=location.href;
        location.hash=area;
        if(location.href===oldURL)window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
      markActive(area);
    },80);
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest?.('.lceo-left-button');
    if(!button)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    navigate(button.dataset.area);
  },true);
  window.addEventListener('hashchange',()=>{
    const area=currentFromHash();
    if(area)markActive(area);
  });
  function init(){
    closeDrawer();
    const area=currentFromHash();
    if(area)markActive(area);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,120));
  else setTimeout(init,120);
})();
