# 🎉 31 MEU Buffet Infantil

Site profissional para um espaço de eventos infantis em Curitiba/PR, desenvolvido como projeto acadêmico aplicado, com foco em experiência do usuário, acessibilidade e geração de leads via WhatsApp.

---

## 🎯 Sobre o Projeto

O **31 MEU Buffet Infantil** é uma vitrine digital que apresenta:

- Estrutura do espaço
- Pacotes de festa
- Galeria de imagens
- Informações institucionais
- Canal direto de contato via WhatsApp

O projeto evoluiu de uma landing page simples para um **site completo, modular e escalável**, com separação de estilos por página e melhorias contínuas de UX/UI.

---

## 🧱 Estrutura do Projeto
31-meu/
├── index.html
├── galeria.html
├── pacotes.html
├── pacote-premium.html
├── pacote-pocket.html
├── pacote-escolar.html
├── sobre.html
├── localizacao.html
├── faq.html
├── contato.html
│
├── assets/
│ ├── css/
│ │ ├── style.css # Estilos globais (layout, header, footer)
│ │ ├── home.css
│ │ ├── galeria.css
│ │ ├── pacotes.css
│ │ ├── contato.css
│ │ ├── faq.css
│ │ ├── sobre.css
│ │ ├── localizacao.css
│ │ ├── pacote-premium.css
│ │ ├── pacote-pocket.css
│ │ └── pacote-escolar.css
│ │
│ ├── js/
│ │ ├── config.js
│ │ └── main.js
│ │
│ ├── img/
│ │ ├── galeria/
│ │ ├── premium/
│ │ └── decor/ # SVGs decorativos do site
│ │
│ └── video/
│ └── 31meu.mp4


## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (Flexbox + Grid + variáveis CSS)
- JavaScript Vanilla (sem frameworks)
- Swiper.js (carrossel de galeria)
- WhatsApp API (wa.me)

---

## ✨ Funcionalidades

### 🎨 Interface
- Layout responsivo (mobile-first)
- Identidade visual lúdica e infantil
- Animações suaves (hover, fade, transições)
- Componentes reutilizáveis (cards, botões, grids)

### 📱 Experiência do Usuário
- Navegação intuitiva
- Botões de ação claros (CTA)
- Integração direta com WhatsApp
- Scroll suave e foco em conversão

### 📦 Páginas
- **Home**: Hero com vídeo + diferenciais
- **Galeria**: Carrossel interativo com Swiper
- **Pacotes**: Visão resumida + páginas detalhadas
- **Detalhamento**: Premium, Pocket e Escolar
- **Contato**: Formulário + WhatsApp
- **FAQ**: Accordion acessível
- **Localização**: Google Maps + informações

---

## ⚙️ Arquitetura CSS

O projeto evoluiu de um CSS único para uma arquitetura modular:

### 🔹 Global (`style.css`)
- Reset
- Variáveis CSS (cores, sombras, transições)
- Header e navegação
- Footer
- Botões e cards
- Layout base

### 🔹 Por página
Cada página possui seu próprio CSS:

- `home.css`
- `galeria.css`
- `pacotes.css`
- `contato.css`
- etc.

### 👉 Vantagens:
- Manutenção mais simples
- Código mais organizado
- Evita conflitos de estilo

---

## 🎯 Recursos Implementados

### 📈 Performance
- Lazy loading de imagens
- CSS modular
- Código otimizado e limpo

### ♿ Acessibilidade
- ARIA labels
- Skip links
- Navegação por teclado
- HTML semântico

### 🔒 Segurança
- Validação HTML5
- Honeypot anti-spam
- Sanitização de dados
- Uso de `noopener noreferrer`

### 🔍 SEO
- Meta tags completas
- Open Graph
- Estrutura semântica
- Conteúdo organizado

---

## 💬 Integração WhatsApp

Os botões utilizam a API oficial:
https://wa.me/{numero}?text={mensagem}

### Deploy
- GitHub Pages

### 🎨 Identidade Visual
- Tema infantil e moderno
- Uso de SVGs decorativos no background
- Cores suaves e acessíveis
- Elementos visuais distribuídos por seção (não poluem leitura)

### 📱 Compatibilidade
Navegador	Suporte
Chrome	    ✅
Firefox	    ✅
Safari	    ✅
Edge	      ✅
Mobile	    ✅

### 🧠 Aprendizados do Projeto
- Separação de responsabilidades (CSS modular)
- Melhoria contínua de UX/UI
- Integração com APIs externas
- Boas práticas de acessibilidade e SEO
- Estruturação de projeto real

### 👤 Autor
Desenvolvido por Luiz Fernando Alves Moreira
Projeto acadêmico aplicado (ADS)

### 📌 Status do Projeto
🚧 Em evolução
Novas melhorias de layout, animações e conversão estão sendo implementadas continuamente.
