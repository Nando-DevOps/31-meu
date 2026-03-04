// Comportamento do site: menu, lightbox da galeria, formulário WhatsApp e utilitários
(function(){
  const PHONE_NUMBER = "5541997249945";

  function qs(sel, ctx=document){return ctx.querySelector(sel)}
  function qsa(sel, ctx=document){return Array.from(ctx.querySelectorAll(sel))}


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

  // Open WhatsApp - tries app first, then falls back to web
  function openWhatsApp(message) {
    const phoneNumber = "5541997249945";
    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    let appBrowserActive = true;
    
    // Check if app opened (window loses focus)
    const onBlur = () => {
      appBrowserActive = false;
      window.removeEventListener('blur', onBlur);
    };
    window.addEventListener('blur', onBlur);
    
    // Try to open app
    const link = document.createElement('a');
    link.href = appUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // If app didn't open after 2 seconds, fallback to web
    setTimeout(() => {
      window.removeEventListener('blur', onBlur);
      if (appBrowserActive) {
        window.open(webUrl, '_blank');
      }
    }, 2000);
  }

  // Expose to global scope for onclick handlers
  window.openWhatsApp = openWhatsApp;

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


    // set current year
    const yearEl = qs('#year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // Initialize Swiper carousel for galeria
    if (typeof Swiper !== 'undefined') {
      new Swiper('.galeria-swiper', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: true,
        a11y: true,
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
        openWhatsApp(text);

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


})();
