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

  const reservedIds=new Set([
    'lceoWorkspaceFrame','lceoLeftRail','lceoActionRail','lceoActionDrawer',
    'lceoActionBackdrop','lceoNavToast'
  ]);

  const normalize=value=>String(value||'')
    .replace(/[+→›⌄]/g,' ')
    .replace(/\s+/g,' ')
    .trim()
    .toLowerCase();

  const currentFromHash=()=>{
    const key=normalize(location.hash.replace(/^#/,''));
    return Object.keys(labels).find(area=>labels[area].includes(key))||null;
  };

  function shouldRemainOutsideWorkspace(element){
    return reservedIds.has(element.id)||['SCRIPT','STYLE','LINK'].includes(element.tagName);
  }

  function moveIntoWorkspace(frame,element){
    if(!element||element===frame||shouldRemainOutsideWorkspace(element))return;
    const position=getComputedStyle(element).position;
    if(position!=='fixed')element.classList.add('lceo-workspace-root');
    frame.appendChild(element);
  }

  function ensureWorkspace(){
    let frame=document.querySelector('#lceoWorkspaceFrame');
    if(!frame){
      frame=document.createElement('div');
      frame.id='lceoWorkspaceFrame';
      frame.setAttribute('data-lceo-workspace','true');
      document.body.insertBefore(frame,document.body.firstChild);
    }

    [...document.body.children].forEach(element=>moveIntoWorkspace(frame,element));
    return frame;
  }

  function nativeControl(area){
    const nav=document.querySelector('.lceo-original-main-nav');
    if(!nav)return null;
    const controls=[...nav.querySelectorAll('a,button,[role="button"],[data-page],[data-area],[data-section],[data-view]')];
    const aliases=labels[area]||[area];
    return controls.find(element=>{
      const href=normalize((element.getAttribute('href')||'').replace(/^#/,'').split('#').pop());
      const data=normalize(element.dataset.page||element.dataset.area||element.dataset.section||element.dataset.view||'');
      const text=normalize(element.innerText||element.getAttribute('aria-label')||element.title||'');
      return aliases.includes(href)||aliases.includes(data)||aliases.includes(text);
    })||null;
  }

  function markActive(area){
    document.querySelectorAll('.lceo-left-button').forEach(button=>{
      button.classList.toggle('active',button.dataset.area===area);
    });
  }

  function closeDrawer(){
    document.querySelector('#lceoActionDrawer')?.classList.remove('open');
    document.querySelector('#lceoActionBackdrop')?.classList.remove('open');
    document.querySelector('#lceoActionDrawer')?.setAttribute('aria-hidden','true');
  }

  function setHash(area){
    const oldUrl=location.href;
    location.hash=area;
    if(location.href===oldUrl)window.dispatchEvent(new HashChangeEvent('hashchange'));
  }

  function navigate(area){
    if(!labels[area])return;
    closeDrawer();
    markActive(area);

    const control=nativeControl(area);
    if(control)control.click();
    else setHash(area);

    setTimeout(()=>{
      if(currentFromHash()!==area)setHash(area);
      markActive(area);
      ensureWorkspace();
      window.scrollTo({top:0,left:0,behavior:'auto'});
    },90);
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
    setTimeout(ensureWorkspace,40);
  });

  function init(){
    closeDrawer();
    ensureWorkspace();

    const area=currentFromHash();
    if(area)markActive(area);

    const observer=new MutationObserver(mutations=>{
      const frame=document.querySelector('#lceoWorkspaceFrame');
      if(!frame)return;
      mutations.forEach(mutation=>{
        mutation.addedNodes.forEach(node=>{
          if(node.nodeType===1&&node.parentElement===document.body){
            moveIntoWorkspace(frame,node);
          }
        });
      });
    });
    observer.observe(document.body,{childList:true});
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>setTimeout(init,120));
  }else{
    setTimeout(init,120);
  }
})();