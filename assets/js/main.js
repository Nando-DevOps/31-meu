// Comportamento do site: menu, lightbox da galeria, formulário WhatsApp e utilitários
(function(){
  const PHONE_NUMBER = '5541972499945';

  function qs(sel, ctx=document){return ctx.querySelector(sel)}
  function qsa(sel, ctx=document){return Array.from(ctx.querySelectorAll(sel))}

  // Simple translation dictionary
  const I18N = {
    pt: {
      'nav.home': 'Início',
      'nav.gallery': 'Galeria',
      'nav.about': 'Sobre',
      'nav.location': 'Localização',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contato',
      'hero.title': '31 MEU Buffet Infantil',
      'hero.lead': 'Espaço completo para festas infantis — segurança, diversão e memórias.',
      'cta.gallery': 'Ver Galeria',
      'cta.contact': 'Agendar Visita'
    },
    en: {
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.about': 'About',
      'nav.location': 'Location',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'hero.title': '31 MEU Kids Buffet',
      'hero.lead': 'Complete venue for kids parties — safety, fun and memories.',
      'cta.gallery': 'View Gallery',
      'cta.contact': 'Schedule Visit'
    }
  };

  function applyTranslations(lang){
    qsa('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const txt = (I18N[lang] && I18N[lang][key]) || '';
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = txt;
      else el.textContent = txt;
    });
  }

  // Carousel initializer for Bootstrap-like markup (vanilla JS)
  function initCarousels(){
    qsa('.carousel.slide').forEach(carousel => {
      const inner = qs('.carousel-inner', carousel);
      if(!inner) return;
      const items = qsa('.carousel-item', inner);
      let current = items.findIndex(i => i.classList.contains('active'));
      if(current === -1) current = 0;
      const interval = parseInt(carousel.getAttribute('data-interval') || '5000', 10);
      let timer = null;

      function show(index){
        index = (index + items.length) % items.length;
        items.forEach((it, i)=> it.classList.toggle('active', i===index));
        const indicators = qsa('.carousel-indicators [data-slide-to]', carousel);
        indicators.forEach(ind => ind.classList.toggle('active', Number(ind.getAttribute('data-slide-to'))===index));
        current = index;
      }

      function next(){ show(current+1); }
      function prev(){ show(current-1); }

      // indicators
      qsa('.carousel-indicators [data-slide-to]', carousel).forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const idx = Number(btn.getAttribute('data-slide-to'));
          show(idx);
          reset();
        });
      });

      // controls
      qsa('.carousel-control-prev, .carousel-control-next', carousel).forEach(ctrl=>{
        ctrl.addEventListener('click', (e)=>{
          e.preventDefault();
          if(ctrl.classList.contains('carousel-control-prev')) prev(); else next();
          reset();
        });
      });

      carousel.addEventListener('mouseenter', ()=> clearInterval(timer));
      carousel.addEventListener('mouseleave', ()=> start());

      document.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight') next();
        if(e.key === 'ArrowLeft') prev();
      });

      function start(){ if(timer) clearInterval(timer); timer = setInterval(next, interval); }
      function reset(){ clearInterval(timer); start(); }
      start();
      show(current);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // menu toggle
    const menuBtn = qs('.menu-btn');
    const nav = qs('#nav');
    if(menuBtn && nav){
      menuBtn.addEventListener('click', ()=>{
        const open = nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
      });

      // close menu when clicking a link
      qsa('.nav-list a').forEach(a=> a.addEventListener('click', ()=>{
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded','false');
      }));
    }

    // language toggle
    const saved = localStorage.getItem('site-lang') || 'pt';
    setLanguage(saved);
    qsa('.lang-switch').forEach(btn=> btn.addEventListener('click', ()=> setLanguage(btn.getAttribute('data-lang'))));

    // set current year
    const yearEl = qs('#year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // Gallery lightbox (same behavior)
    const gallery = qs('.gallery');
    if(gallery){
      gallery.addEventListener('click', (e)=>{
        const fig = e.target.closest('figure');
        if(!fig) return;
        const img = fig.querySelector('img');
        openLightbox(img.src, fig.querySelector('figcaption')?.textContent || '');
      });
    }

    // Form submit -> open WhatsApp
    const form = qs('#contactForm');
    const status = qs('#formStatus');
    if(form){
      form.addEventListener('submit', (ev)=>{
        ev.preventDefault();
        const website = qs('#websiteInput');
        if(website && website.value.trim() !== ''){
          if(status) status.textContent = 'Envio rejeitado.';
          return;
        }

        const name = qs('#nameInput')?.value.trim() || '';
        const phone = qs('#phoneInput')?.value.trim() || '';
        const message = qs('#messageInput')?.value.trim() || '';

        if(!name || !phone || !message){
          if(status) status.textContent = 'Preencha todos os campos.';
          return;
        }

        const text = `Olá! Meu nome é ${name}. ${message} (WhatsApp: ${phone})`;
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');

        if(status) status.textContent = 'Abrindo WhatsApp...';
      });
    }

    // keyboard: close lightbox with Esc
    document.addEventListener('keyup', (e)=>{
      if(e.key === 'Escape') closeLightbox();
    });

    // focus management for skip-link
    const skip = qs('.skip-link');
    if(skip){
      skip.addEventListener('click', (e)=>{
        const target = qs(skip.getAttribute('href'));
        if(target){
          target.setAttribute('tabindex','-1');
          target.focus();
        }
      });
    }

    // initialize any carousels
    initCarousels();
  });

  // Lightbox helpers
  let currentLightbox = null;
  function openLightbox(src, caption){
    closeLightbox();
    const wrap = document.createElement('div');
    wrap.className = 'image-lightbox';
    wrap.innerHTML = `\n      <div class="inner">\n        <img src="${src}" alt="">\n        <div class="caption">${escapeHtml(caption)}</div>\n      </div>\n    `;
    wrap.addEventListener('click', (e)=>{ if(e.target === wrap) closeLightbox(); });
    document.body.appendChild(wrap);
    currentLightbox = wrap;
    wrap.tabIndex = -1;
    wrap.focus();
  }
  function closeLightbox(){
    if(currentLightbox){
      currentLightbox.remove();
      currentLightbox = null;
    }
  }

  function escapeHtml(str){
    return String(str).replace(/[&<>\"']/g, function(tag){
      const chars = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"};
      return chars[tag] || tag;
    });
  }

  function setLanguage(lang){
    localStorage.setItem('site-lang', lang);
    applyTranslations(lang);
    qsa('.lang-switch').forEach(b=> b.classList.toggle('active', b.getAttribute('data-lang')===lang));
  }

})();
