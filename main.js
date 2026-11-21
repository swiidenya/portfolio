(() => {
  const C = CONTENT;
  const $ = (s, r = document) => r.querySelector(s);
  const ext = 'target="_blank" rel="noreferrer noopener"';
  const ICON = {
    github: '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>',
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>',
    instagram: '<path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/>',
    codepen: '<path d="M12 0 0 8v8l12 8 12-8V8L12 0Zm0 2.4 8.6 5.74L12 11.9 3.4 8.14 12 2.4ZM2.4 9.7l6 2.3-6 2.3V9.7Zm1 5.9L12 12.9l-.01 0L12 13l8.6 2.6L12 21.6l-8.6-6ZM21.6 14.3l-6-2.3 6-2.3v4.6ZM12 13.1Z"/>',
    mail: '<path d="M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.6 2 8.4 6 8.4-6H3.6Z"/>',
    link: '<path d="M10.6 13.4a1 1 0 0 1 0-1.4l4-4a3 3 0 1 1 4.2 4.2l-2 2-1.4-1.4 2-2a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-4 4a3 3 0 1 1-4.2-4.2l2-2 1.4 1.4-2 2a1 1 0 0 0 1.4 1.4l4-4a1 1 0 0 1 1.4 0Z"/>',
  };
  const svgIcon = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[n] || ICON.link}</svg>`;
  const ARROW = '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"/></svg>';
  Object.assign(ICON, {
    phone: '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1l-2.25 2.2Z"/>',
    pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>',
  });

  const tags = (t, label = 'Skills') => t && t.length ? `<ul class="tags" aria-label="${label}">${t.map(x => `<li class="tag">${x}</li>`).join('')}</ul>` : '';
  const thumb = (src, alt) => `<div class="thumb"><img src="${src || ''}" alt="${alt || ''}" loading="lazy" onerror="this.replaceWith(document.createTextNode('IMAGE'))"></div>`;
  const ttl = (text, url) => `<h3 class="title">${url ? `<a href="${url}" ${ext}>${text}${ARROW}</a>` : text}</h3>`;
  const paras = x => [].concat(x).map(p => `<p>${p}</p>`).join('');
  const bullets = b => b && b.length ? `<ul class="bullets">${b.map(i => `<li>${i}</li>`).join('')}</ul>` : '';

  const entry = e => `
    <li class="card"><div class="meta">${e.dates || ''}</div>
      <div>${ttl(e.org ? `${e.title} · ${e.org}` : e.title, e.url)}
        ${e.description ? `<p>${e.description}</p>` : ''}${bullets(e.bullets)}${tags(e.tags, e.tagLabel || 'Skills')}
      </div></li>`;

  const project = p => `
    <li class="card has-thumb">${thumb(p.image, p.title)}
      <div>${p.type ? `<div class="meta">${p.type}</div>` : ''}${ttl(p.title, p.url)}
        ${p.description ? `<p>${p.description}</p>` : ''}
        ${p.skills && p.skills.length ? `<div class="extra"><span>Skills demonstrated</span></div>${tags(p.skills, 'Skills demonstrated')}` : ''}
      </div></li>`;

  const group = (h, inner) => `<div class="group"><h3 class="group-title">${h}</h3>${inner}</div>`;

  let S = [
    { k: 'intro', id: 'intro', l: 'Introduction', h: () => `<div class="about">${paras(C.intro)}</div>` },
    { k: 'aboutMe', id: 'about', l: 'About Me', h: () => C.aboutMe.filter(a => a.text).map(a => group(a.heading, `<p>${a.text}</p>`)).join('') },
    { k: 'education', id: 'education', l: 'Education', h: () => `<ol class="cards">${C.education.map(entry).join('')}</ol>` },
    { k: 'skills', id: 'skills', l: 'Skills', h: () => C.skills.filter(g => g.items && g.items.length).map(g => group(g.group, tags(g.items, g.group))).join('') },
    { k: 'projects', id: 'projects', l: 'Projects', h: () => `<ul class="cards">${C.projects.map(project).join('')}</ul>` },
    { k: 'experience', id: 'experience', l: 'Experience', h: () => `<ol class="cards">${C.experience.map(entry).join('')}</ol>` },
    { k: 'achievements', id: 'achievements', l: 'Achievements', h: () => C.achievements.filter(g => g.items && g.items.length).map(g => group(g.group, `<ul class="cards">${g.items.map(entry).join('')}</ul>`)).join('') },
    { k: 'contact', id: 'contact', l: 'Contact', h: () => `${C.contact.text ? `<div class="about">${paras(C.contact.text)}</div>` : ''}
      <ul class="contact">${(C.contact.links || []).map(x => `<li>${x.url ? `<a href="${x.url}" ${/^https?:/.test(x.url) ? ext : ''}>` : '<a role="presentation" style="pointer-events:none">'}${svgIcon(x.icon)}<span class="k">${x.label}</span><span>${x.value || ''}</span></a></li>`).join('')}</ul>` },
  ].filter(s => { const v = C[s.k]; return v && (Array.isArray(v) ? v.length : true); })
    .map(s => ({ ...s, html: s.h() }))
    .filter(s => s.html.trim());

  if (C.resume && C.resume.url) {
    const host = S.find(s => s.id === 'experience') || S[0];
    if (host) host.html += `<a class="cta" href="${C.resume.url}" ${ext}>${C.resume.label || 'View Full Résumé'}${ARROW}</a>`;
  }

  $('#header').innerHTML = `
    <div>
      ${C.photo !== null ? `<div class="avatar"><img src="${C.photo || ''}" alt="Photo of ${C.name}" onerror="this.replaceWith(document.createTextNode('PHOTO'))"></div>` : ''}
      <h1 class="name"><a href="">${C.name}</a></h1>
      ${C.program ? `<h2 class="role">${C.program}</h2>` : ''}
      ${C.school ? `<p class="school">${C.school}</p>` : ''}
      ${C.tagline ? `<p class="tagline">${C.tagline}</p>` : ''}
      <nav aria-label="In-page jump links"><ul>
        ${S.map(s => `<li><a href="#${s.id}" data-id="${s.id}"><span class="bar"></span>${s.l}</a></li>`).join('')}
      </ul></nav>
    </div>
    <ul class="socials" aria-label="Social media">
      ${(C.socials || []).map(s => `<li><a href="${s.url}" ${ext} aria-label="${s.label}" title="${s.label}">${svgIcon(s.icon)}</a></li>`).join('')}
    </ul>`;

  $('#content').innerHTML =
    S.map(s => `<section id="${s.id}" aria-label="${s.l}"><h2 class="sec-title">${s.l}</h2>${s.html}</section>`).join('') +
    (C.footer ? `<footer>${C.footer}</footer>` : '');
  document.title = `${C.name} – ${C.program}`;

  const links = [...document.querySelectorAll('nav a')];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.dataset.id === e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section').forEach(s => spy.observe(s));

  addEventListener('pointermove', e => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
  });

  const root = document.documentElement, btn = $('#theme');
  const SUN = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  const paint = () => { btn.innerHTML = current() === 'dark' ? SUN : MOON; };
  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });
  paint();
})();