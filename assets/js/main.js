// Comportamento do site: menu, carousel, WhatsApp e utilitários
(function () {
  function qs(sel, ctx = document) {
    return ctx.querySelector(sel);
  }
  function qsa(sel, ctx = document) {
    return Array.from(ctx.querySelectorAll(sel));
  }

  // Open WhatsApp using official wa.me API
  function openWhatsApp(message) {
    const phoneNumber = CONFIG.PHONE;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }

  // Build WhatsApp message with language support
  function buildWhatsAppMessage(name, phone, message) {
    const cleanMsg = String(message || "")
      .replace(/\s+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    return `Olá! Meu nome é ${name}.\nWhatsApp: ${phone}\n\nDetalhes:\n${cleanMsg}`;
  }

  // Expose to global scope for onclick handlers
  window.openWhatsApp = openWhatsApp;

  document.addEventListener("DOMContentLoaded", () => {
    // menu toggle
    const menuBtn = qs(".menu-btn");
    const nav = qs("#nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });

      // close menu when clicking a link
      qsa(".nav-list a").forEach((a) =>
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        }),
      );
    }

    // set current year
    const yearEl = qs("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Initialize Swiper carousel for galeria
    if (typeof Swiper !== "undefined") {
      new Swiper(".galeria-swiper", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        keyboard: true,
        a11y: true,
      });
    }

    // Form submit -> open WhatsApp
    const form = qs("#contactForm");
    const status = qs("#formStatus");
    if (form) {
      form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        // Honeypot anti-spam check
        const website = qs("#websiteInput");
        if (website && website.value.trim() !== "") {
          if (status) status.textContent = "Envio rejeitado (anti-spam).";
          return;
        }

        // HTML5 validation
        if (!form.checkValidity()) {
          if (status)
            status.textContent =
              "Confira os campos obrigatórios antes de enviar.";
          form.reportValidity();
          return;
        }

        const name = qs("#nameInput")?.value.trim() || "";
        const phone = qs("#phoneInput")?.value.trim() || "";
        const message = qs("#messageInput")?.value.trim() || "";

        const whatsappText = buildWhatsAppMessage(name, phone, message);
        openWhatsApp(whatsappText);

        if (status) status.textContent = "Abrindo WhatsApp...";
        form.reset();
      });
    }

    // botões dos pacotes -> abrir WhatsApp com pacote selecionado
    qsa(".package-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        const packageName = button.dataset.package || "";
        const message =
          `Olá! Tenho interesse no pacote ${packageName} do 31 MEU Buffet Infantil.\n` +
          `Gostaria de receber mais informações e um orçamento.`;

        openWhatsApp(message);
      });
    });

    // keyboard: close lightbox with Esc
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") closeLightbox();
    });

    // focus management for skip-link
    const skip = qs(".skip-link");
    if (skip) {
      skip.addEventListener("click", () => {
        const target = qs(skip.getAttribute("href"));
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus();
        }
      });
    }
  });

  // Lightbox helpers
  let currentLightbox = null;

  function openLightbox(src, caption) {
    closeLightbox();
    const wrap = document.createElement("div");
    wrap.className = "image-lightbox";
    wrap.innerHTML = `
      <div class="inner">
        <img src="${src}" alt="">
        <div class="caption">${escapeHtml(caption)}</div>
      </div>
    `;
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) closeLightbox();
    });
    document.body.appendChild(wrap);
    currentLightbox = wrap;
    wrap.tabIndex = -1;
    wrap.focus();
  }

  function closeLightbox() {
    if (currentLightbox) {
      currentLightbox.remove();
      currentLightbox = null;
    }
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>\"']/g, function (tag) {
      const chars = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return chars[tag] || tag;
    });
  }
})();
