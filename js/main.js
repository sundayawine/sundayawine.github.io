(() => {
  'use strict';
  const d = window.PORTFOLIO;
  if (!d) return;
  const person = d.person;
  const $ = (s) => document.querySelector(s);
  const safe = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const cleanUrl = (v) => { try { const u = new URL(v, document.baseURI); return ['https:','http:','mailto:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } };
  const ext = (url) => `href="${safe(cleanUrl(url))}" target="_blank" rel="noopener noreferrer"`;
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    diagonal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="7" height="7" rx="2"/><rect x="15" y="3" width="7" height="7" rx="2"/><rect x="8.5" y="15" width="7" height="7" rx="2"/><path d="M9 6.5h6m3.5 3.5v2L12 15m-6.5-5v2L12 15"/></svg>',
    nodes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><path d="m7 12 3 0m4-1 3-4m-3 6 3 4"/></svg>',
    flow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="8" height="6" rx="1"/><rect x="14" y="15" width="8" height="6" rx="1"/><path d="M6 9v5h12v1m-4-4 4 3-4 3"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 4c-9 0-15 3-15 11a5 5 0 0 0 5 5c8 0 11-6 10-16ZM4 21c3-5 6-8 11-11"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>',
    scan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8V5a1 1 0 0 1 1-1h3m8 0h3a1 1 0 0 1 1 1v3m0 8v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 19c-4-1-6-4-6-8a10 10 0 0 1 20 0c0 4-2 7-6 8v-3c0-1 0-2-1-2 3-1 4-2 4-5 0-1 0-2-1-3l-.2-2.5L15 5a10 10 0 0 0-6 0L6.2 3.5 6 6c-1 1-1 2-1 3 0 3 1 4 4 5-1 0-1 1-1 2v3"/><path d="M8 18c-3 1-4-1-5-2"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 8 .5l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-8-.5l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6c-3-2-6-2-10-1v14c4-1 7-1 10 1 3-2 6-2 10-1V5c-4-1-7-1-10 1Zm0 0v14"/></svg>'
  };
  const linkIcon = icons.arrow;
  function projectCard(p) {
    const link = cleanUrl(p.link);
    return `<article class="research-card reveal"><div class="card-topline"><span class="card-kicker">${safe(p.label)}</span><span class="card-icon">${icons[p.icon] || icons.network}</span></div><h3>${safe(p.title)}</h3><h4>${safe(p.subtitle)}</h4><p>${safe(p.description)}</p><div class="card-footer">${(p.stack||[]).slice(0,4).map(s=>`<span class="tag">${safe(s)}</span>`).join('')}</div>${link?`<a class="card-link" ${ext(link)}>Explore project ${icons.diagonal}</a>`:''}</article>`;
  }
  function publicationCard(p) {
    const link = cleanUrl(p.link);
    const label = p.status || p.type;
    return `<article class="pub-card reveal"><div class="pub-year">${safe(p.year)}</div><div><h3>${safe(p.title)}</h3><div class="pub-meta"><span>${safe(p.venue)}</span><span>${safe(p.type)}</span>${p.role?`<span>${safe(p.role)}</span>`:''}<span>${safe(label)}</span></div>${p.topic?`<div class="pub-extra">${safe(p.topic)}</div>`:''}</div>${link?`<a class="pub-arrow" ${ext(link)} aria-label="View ${safe(p.title)}">${icons.diagonal}</a>`:`<span class="pub-arrow muted-arrow" aria-hidden="true">${icons.book}</span>`}</article>`;
  }
  function achievementCard(a) {
    const link = cleanUrl(a.link);
    return `<article class="timeline-card reveal"><div class="timeline-top"><span class="timeline-date">${safe(a.date)}</span><span class="pill">${safe(a.category)}</span></div><h3>${safe(a.title)}</h3><p>${safe(a.description)}</p>${link?`<a ${ext(link)}>View details ${icons.diagonal}</a>`:''}</article>`;
  }
  function assign(selector, html) { const el = $(selector); if(el) el.innerHTML = html; }
  function renderHome() {
    assign('#home-projects', d.projects.filter(p=>p.featured).slice(0,3).map(projectCard).join(''));
    assign('#home-publications', d.publications.filter(p=>p.featured).slice(0,3).map(publicationCard).join(''));
    assign('#home-achievements', d.achievements.filter(a=>a.featured).slice(0,4).map(achievementCard).join(''));
    assign('#home-stats', `<div class="stat-card"><span class="stat-number">${String(d.publications.length).padStart(2,'0')}</span><p>Selected papers<br>& research posters</p></div><div class="stat-card"><span class="stat-number">${String(d.projects.length).padStart(2,'0')}</span><p>Research projects<br>& technical explorations</p></div><div class="stat-card"><span class="stat-number">03</span><p>Conference papers reviewed<br>at IEEE WF-PST 2026</p></div>`);
  }
  function setupFilter(groupId, targetId, values, items, getCategory, renderer, extra) {
    const group = $(groupId), target = $(targetId);
    if(!group || !target)return;
    let selected='All';
    group.innerHTML = ['All',...values].map(v=>`<button class="filter-btn ${v==='All'?'is-active':''}" type="button" data-filter="${safe(v)}" aria-pressed="${v==='All'?'true':'false'}">${safe(v)}</button>`).join('');
    const update = () => {
      const visible = selected==='All'?items:items.filter(i=>getCategory(i)===selected);
      target.innerHTML = visible.length?visible.map(renderer).join(''):'<div class="empty-state">No entries in this category yet.</div>';
      if(extra)extra(visible.length);
      observeReveals();
    };
    group.addEventListener('click',e=>{
      const btn=e.target.closest('[data-filter]');if(!btn)return;
      selected=btn.dataset.filter;
      group.querySelectorAll('button').forEach(b=>{let active=b===btn;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
      update();
    });
    update();
  }
  function renderPages() {
    renderHome();
    setupFilter('#publication-filters','#publication-items',['Full paper','Short paper','Conference paper','Poster'],d.publications,p=>p.type,publicationCard,n=>assign('#publication-count',`${n} contribution${n!==1?'s':''} displayed`));
    setupFilter('#project-filters','#project-items',['Cloud','Distributed','Edge','Security','AI'],d.projects,p=>p.category,projectCard,n=>assign('#project-count',`${n} project${n!==1?'s':''} displayed`));
    setupFilter('#achievement-filters','#achievement-items',['Publication','Presentation','Education','Service','Research'],d.achievements,a=>a.category,achievementCard,n=>assign('#achievement-count',`${n} milestone${n!==1?'s':''} displayed`));
    assign('#bio-paragraphs',(person.bio||[]).map(p=>`<p>${safe(p)}</p>`).join(''));
    assign('#education-items',(person.education||[]).map(e=>`<article class="info-card reveal"><span class="info-period">${safe(e.period)}</span><h3>${safe(e.degree)}</h3><h4>${safe(e.institution)}</h4><p>${safe(e.detail)}</p></article>`).join(''));
    assign('#experience-items',(person.experience||[]).map(e=>`<article class="experience-item reveal"><div><h3>${safe(e.title)}</h3><div class="exp-sub">${safe(e.organization)}</div></div><p>${safe(e.description)}</p></article>`).join(''));
    assign('#interests',d.researchAreas.map(t=>`<span class="tag">${safe(t)}</span>`).join(''));
    const photo=$('#profile-photo');if(photo&&person.profileImage&&cleanUrl(person.profileImage)){photo.src=cleanUrl(person.profileImage);photo.alt=`Portrait of ${person.name}`;photo.hidden=false;$('#portrait-abstract').hidden=true;}
    const label=$('#site-name');if(label)label.textContent=person.name;
    document.querySelectorAll('[data-copyright-name]').forEach(el=>el.textContent=person.name);
  }
  function socialLinks() {
    const links=[];
    let github=person.github;
    if(!github&&location.hostname.endsWith('.github.io')) {let user=location.hostname.split('.')[0];if(user)github=`https://github.com/${user}`;}
    if(person.email)links.push({name:'Email',desc:person.email,url:`mailto:${person.email}`,icon:'mail'});
    if(github)links.push({name:'GitHub',desc:'Code and open-source projects',url:github,icon:'github'});
    if(person.linkedin)links.push({name:'LinkedIn',desc:'Professional experience and network',url:person.linkedin,icon:'link'});
    if(person.scholar)links.push({name:'Google Scholar',desc:'Research publications and citations',url:person.scholar,icon:'book'});
    if(person.orcid)links.push({name:'ORCID',desc:'Researcher identity',url:person.orcid,icon:'link'});
    if(person.cv)links.push({name:'Curriculum Vitae',desc:'Download academic CV',url:person.cv,icon:'book'});
    assign('#contact-options',links.length?links.map(l=>`<a class="contact-option" ${l.url.startsWith('mailto:')?`href="${safe(l.url)}"`:ext(l.url)}>${icons[l.icon]}<span><strong>${safe(l.name)}</strong><small>${safe(l.desc)}</small></span>${icons.diagonal.replace('<svg ','<svg class="external" ')}</a>`).join(''):'<div class="contact-note">Public contact links are being finalized. Add your email, GitHub, LinkedIn, and Scholar profiles in <strong>js/content.js</strong> before publishing.</div>');
    assign('#footer-social',links.filter(l=>!l.url.startsWith('mailto:')).slice(0,3).map(l=>`<a ${ext(l.url)}>${safe(l.name)}</a>`).join(''));
    if(person.cv)document.querySelectorAll('[data-cv-link]').forEach(el=>{el.hidden=false;el.href=cleanUrl(person.cv);});
    const emailBtn=$('#email-button');if(emailBtn){if(person.email){emailBtn.href=`mailto:${person.email}`;emailBtn.textContent='Send an email ↗';}else{emailBtn.hidden=true;}}
  }
  function nav() {
    const button=$('#mobile-toggle'),menu=$('#nav-links');
    if(button&&menu){button.addEventListener('click',()=>{const open=menu.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');button.setAttribute('aria-expanded','false');}));}
    const current=location.pathname.split('/').pop()||'index.html';
    document.querySelectorAll('.nav-links a').forEach(a=>{const href=a.getAttribute('href');if(href===current){a.classList.add('active');a.setAttribute('aria-current','page');}});
  }
  let observer;
  function observeReveals(){
    const els=document.querySelectorAll('.reveal:not(.visible)');
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(el=>el.classList.add('visible'));return;}
    if(!observer)observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});
    els.forEach(el=>observer.observe(el));
  }
  nav();renderPages();socialLinks();observeReveals();
})();
