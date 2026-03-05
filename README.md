# 31 MEU Buffet Infantil

Site profissional para espaço de eventos infantis com estrutura completa, galeria, FAQ e integração WhatsApp.

## 🎯 Sobre o Projeto

**31 MEU** é uma vitrine digital para um buffet infantil em Curitiba, focada em:
- ✨ **Experiência do Usuário**: Navegação intuitiva e responsiva
- 🔐 **Segurança**: Validação de formulários e proteção anti-spam
- ⚡ **Performance**: CSS consolidado, lazy loading de imagens
- 📱 **Mobile First**: Menu responsivo e otimizado
- 🌐 **Acessibilidade**: ARIA labels, skip links, validação HTML5
- 💬 **WhatsApp API**: Integração com wa.me para orçamentos

## 📂 Estrutura do Projeto

```
31-meu/
├── index.html              # Página inicial
├── galeria.html            # Galeria de fotos
├── sobre.html              # Informações da empresa
├── localizacao.html        # Localização e mapa
├── faq.html                # Perguntas frequentes
├── contato.html            # Formulário de contato
├── README.md               # Este arquivo
├── LICENSE                 # Licença
│
├── assets/
│   ├── css/
│   │   └── style.css       # CSS consolidado (global + pages)
│   │   └── contato.css     # Estilos específicos do formulário
│   │
│   ├── js/
│   │   ├── config.js       # Configuração centralizada (telefone, cores, etc)
│   │   └── main.js         # Lógica principal (menu, WhatsApp, form, lightbox)
│   │
│   ├── img/
│   │   ├── logo_128.png    # Logo da marca
│   │   └── galeria/        # Fotos da galeria
│   │
│   └── video/
│       └── 31meu.mp4       # Vídeo hero da página inicial
```

## 🛠️ Tecnologias

- **HTML5** - Semântica e acessibilidade
- **CSS3** - Responsivo, flexbox, grid
- **Vanilla JavaScript** - Sem dependências (exceto Swiper para galeria)
- **Swiper.js v11** - Carrossel de galeria (CDN)
- **WhatsApp API** - Integração wa.me

## ✨ Funcionalidades

### 🎨 Páginas
- **Home**: Hero com vídeo + CTA buttons
- **Galeria**: Carrossel com Swiper.js
- **Sobre**: Informações da empresa
- **Localização**: Mapa do Google + info de contato
- **FAQ**: Accordion com perguntas frequentes
- **Contato**: Formulário → WhatsApp

### 🔧 Recursos
- 📱 Menu mobile responsivo com animação
- 🎯 Formulário com validação HTML5 + honeypot
- 💬 Botões WhatsApp pré-preenchidos
- 🔆 Lazy loading em imagens
- ⌨️ Navegação por teclado (acessível)
- 🔍 SEO otimizado (meta tags, schema.org)
- 👨‍🦯 ARIA labels e skip links

## 🚀 Como Usar

### Localmente
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/31-meu.git
cd 31-meu

# Abrir em servidor local (recomendado)
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node (http-server)
npx http-server

# Opção 3: VS Code Live Server
# Abrir index.html com Live Server
```

Acesse `http://localhost:8000`

### Deploy
- **GitHub Pages**: Push para branch `main` e ativar Pages nas configurações
- **Netlify**: Conectar repositório e fazer deploy em 1 clique
- **Servidor tradicional**: Upload dos arquivos via FTP

## 📝 Configuração

Editar `assets/js/config.js`:
```javascript
const CONFIG = {
  PHONE: '5541997249945',           // Seu número WhatsApp
  PHONE_DISPLAY: '(41) 97249-9945', // Formato para exibição
  
  COLORS: {
    accent: '#00bcd4',
    accentDark: '#0097a7',
    accentLight: '#80deea'
  },
  
  SOCIAL: {
    instagram: 'https://instagram.com/31meu',
    facebook: 'https://facebook.com/31meu',
    tiktok: 'https://tiktok.com/@31meu'
  },
  
  ADDRESS: {
    street: 'R. Benjamin Zampieri Parizi, 75',
    neighborhood: 'Butiatuvinha',
    city: 'Curitiba',
    state: 'PR',
    zip: '82400-090'
  },
  
  HOURS: '9h às 22h'
};
```

## 🎯 Otimizações Implementadas

✅ **Performance**
- CSS consolidado em 1 arquivo (655 linhas)
- JavaScript minificado e otimizado
- Lazy loading nas 8 imagens da galeria
- Swiper.js para carrossel performático

✅ **Código**
- Config.js centralizado (single source of truth)
- Code morto removido
- Validação HTML5 nativa
- IIFE para escopo isolado

✅ **Responsividade**
- Mobile first approach
- Menu dropdown dinâmico
- Layout fluido com flex/grid
- Breakpoint em 880px

✅ **Acessibilidade**
- ARIA labels corretos
- Skip link para conteúdo
- Focus management
- Keyboard navigation

## 📱 Compatibilidade

| Browser | Suporte |
|---------|---------|
| Chrome | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Edge | ✅ Completo |
| IE 11 | ⚠️ Parcial (sem Swiper) |
| Mobile | ✅ Completo |

## 📄 Meta Tags & SEO

- Open Graph (Facebook, WhatsApp preview)
- Schema.org (EventVenue estruturado)
- Mobile viewport otimizado
- Descrição meta em todas as páginas
- Canonical URLs

## 🔒 Segurança

- Validação de formulários no frontend + backend recommended
- Honeypot anti-spam no formulário
- `noopener,noreferrer` em links externos
- Sanitização de HTML no escape
- HTTPS recomendado

## 📞 WhatsApp Integration

Botões WhatsApp usam `wa.me` API oficial:
```javascript
https://wa.me/{phone}?text={message}
```

Automático redireciona para:
- WhatsApp Desktop (se instalado)
- WhatsApp Web (fallback)
- WhatsApp Mobile (smartphones)

## 📊 Estrutura CSS

```css
/* Global */
style.css (655 linhas)
├── CSS Variables (cores, sombras, transitions)
├── Reset & Base
├── Header & Navigation
├── Hero & Sections
├── Cards & Gallery
├── Forms & Buttons
├── Footer
├── Animations (fadeIn, slideDown, etc)
├── Responsive (880px breakpoint)
└── Page-specific (HOME, GALERIA, SOBRE, LOCALIZAÇÃO)

/* Específico */
contato.css (220 linhas)
└── Formulário + FAQ + Cards
```

## 🎨 Paleta de Cores

```
Primária:  #00bcd4 (Cyan)
Escura:    #0097a7 (Cyan Dark)
Clara:     #80deea (Cyan Light)
Texto:     #1f2937 (Gray 800)
Muted:     #6b7280 (Gray 600)
Fundo:     #ffffff (White)
BG Alt:    #f3f4f6 (Gray 100)
```

## 📦 Dependências

- `Swiper.js` v11 (CDN) - Carrossel
- Nenhuma outra (vanilla JS puro)

## 🐛 Issues & Troubleshooting

**Menu não abre em mobile?**
- Verificar se `main.js` está sendo carregado
- Verificar `z-index` do nav em media query

**Formulário não envia para WhatsApp?**
- Verificar número em `config.js`
- Verificar validação HTML5

**Imagens não carregam?**
- Verificar caminho em `assets/img/galeria/`
- Verificar se servidor está rodando

## 📄 Licença

[Adicione sua licença aqui - MIT, Apache, etc]

## 👤 Autor

Desenvolvido para **31 MEU Buffet Infantil** - Curitiba, PR

---

**Última atualização**: 04/03/2026 | **Versão**: 1.0