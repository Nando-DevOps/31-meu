# Inventário técnico - 31 Meu

## Objetivo

Mapear a estrutura atual do projeto 31 Meu antes de qualquer refatoração, migração de stack ou mudança arquitetural.

Este documento registra páginas, estilos, scripts, assets, integrações, infraestrutura e possíveis pontos de melhoria.

## Status utilizados

- Ativo
- Revisar
- Possivelmente obsoleto
- Duplicado
- Não identificado

## 1. Páginas HTML

| Arquivo | Função | CSS | JS | Integrações | Estado | Observações |
|---|---|---|---|---|---|---|
| `index.html` | Home / apresentação principal do buffet | `assets/css/style.css`, `assets/css/home.css` | `assets/js/config.js`, `assets/js/main.js` | Instagram, Facebook, Schema.org, vídeo local | Ativo | Possui SEO básico, Open Graph, JSON-LD, vídeo hero, navegação principal, CTAs e footer social. Revisar dados estruturados, uso de estilos inline e possíveis melhorias de SEO/performance. |
| `galeria.html` | Galeria de fotos do espaço e celebrações | `assets/css/style.css`, `assets/css/galeria.css`, Swiper CSS via CDN | `assets/js/config.js`, `assets/js/main.js`, Swiper JS via CDN | Swiper.js, WhatsApp, Instagram, Facebook | Ativo | Carrossel com 8 imagens locais e lazy loading. Revisar dependência via CDN, imagens sem dimensões explícitas, uso de `onclick` inline e duplicação estrutural de header/footer. |
| `pacotes.html` | Página geral de apresentação dos pacotes Escolar, Pocket e Premium | `assets/css/style.css`, `assets/css/pacotes.css` | `assets/js/config.js`, `assets/js/main.js` | Instagram, Facebook | Ativo | Página comercial com cards dos pacotes e regras de contratação. Revisar semântica HTML, estilos inline, duplicação de header/footer e manutenção manual de conteúdo repetido com páginas individuais dos pacotes. |
| `pacote-escolar.html` | Página de detalhe do Pacote Escolar | `assets/css/style.css`, `assets/css/pacote-detalhado.css` | `assets/js/config.js`, `assets/js/main.js` | WhatsApp via `data-package`, Instagram, Facebook | Ativo | Página detalhada do pacote Escolar. Usa layout compartilhado de pacote, conteúdo comercial específico e CTA de orçamento. Revisar duplicação de conteúdo com `pacotes.html` e demais páginas de pacotes. |
| `pacote-pocket.html` | Página de detalhe do Pacote Pocket | `assets/css/style.css`, `assets/css/pacote-detalhado.css` | `assets/js/config.js`, `assets/js/main.js` | WhatsApp via `data-package`, Instagram, Facebook | Ativo | Compartilha praticamente a mesma estrutura de `pacote-escolar.html`, alterando principalmente conteúdo e `data-package`. Revisar duplicação estrutural e centralização futura dos dados. |
| `pacote-premium.html` | Página de detalhe do Pacote Premium | `assets/css/style.css`, `assets/css/pacote-detalhado.css` | `assets/js/config.js`, `assets/js/main.js` | WhatsApp via `data-package`, Instagram, Facebook | Ativo | Compartilha a mesma base estrutural das páginas Escolar e Pocket, com conteúdo adicional de cobertura fotográfica e galeria própria. Revisar duplicação estrutural, imagens sem dimensões explícitas e centralização futura dos dados dos pacotes. |
| `sobre.html` | Página institucional sobre o buffet, valores e proposta da marca | `assets/css/style.css`, `assets/css/sobre.css` | `assets/js/config.js`, `assets/js/main.js` | Instagram, Facebook | Ativo | Página institucional com conteúdo sobre propósito, valores e CTA para contato. Estrutura simples, mas repete header, navegação e footer das demais páginas. |
| `localizacao.html` | Página de endereço, mapa, contato e orientações de acesso | `assets/css/style.css`, `assets/css/localizacao.css` | `assets/js/config.js`, `assets/js/main.js` | Google Maps Embed, Google Maps Directions, WhatsApp, Instagram, Facebook | Ativo | Página de localização com mapa incorporado, links de rota, telefone/WhatsApp e horário de atendimento. Revisar `aria-current`, uso de `onclick` inline, consistência de SEO local e centralização de dados de contato/endereço. |
| `faq.html` | Página de perguntas frequentes sobre pacotes, orçamento e atendimento | `assets/css/style.css`, `assets/css/faq.css` | `assets/js/config.js`, `assets/js/main.js` | WhatsApp, Instagram, Facebook | Ativo | FAQ implementado com `<details>` e `<summary>`, sem dependência externa específica. Revisar duplicação de header/footer, conteúdo comercial e uso de `onclick` inline no CTA do WhatsApp. |
| `contato.html` | Página de contato, orçamento e acesso rápido ao WhatsApp | `assets/css/style.css`, `assets/css/contato.css` | `assets/js/config.js`, `assets/js/main.js` | WhatsApp, Google Maps Directions, Instagram, Facebook | Ativo | Possui formulário com validação HTML5, honeypot anti-spam, status via `aria-live` e CTAs de contato. Revisar semântica HTML, uso de `onclick` inline, comportamento do telefone e centralização de endereço/contato. |

## Achados iniciais

### `index.html`

- SEO básico já implementado:
  - `title`
  - `meta description`
  - Open Graph
  - dados estruturados JSON-LD
- Utiliza `EventVenue` no Schema.org.
- Possui vídeo local no hero: `assets/video/31meu.mp4`.
- Carrega dois CSS:
  - `style.css`
  - `home.css`
- Carrega dois scripts:
  - `config.js`
  - `main.js`
- Possui integração externa com:
  - Instagram
  - Facebook
- Possui navegação para todas as páginas principais do site.
- Existem estilos inline em elementos `<h3>`.
- Revisar consistência e validade dos dados estruturados.
- Revisar impacto do vídeo do hero em LCP e carregamento inicial.

### `galeria.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega CSS global e específico da página:
  - `assets/css/style.css`
  - `assets/css/galeria.css`
- Utiliza Swiper.js 11 via CDN:
  - CSS externo
  - JavaScript externo
- Carrega:
  - `assets/js/config.js`
  - `assets/js/main.js`
- Galeria composta por 8 imagens locais em `assets/img/galeria/`.
- Todas as imagens utilizam `loading="lazy"`.
- Possui CTA para WhatsApp através da função `openWhatsApp()`.
- Possui links externos para Instagram e Facebook.
- Header e footer apresentam estrutura muito semelhante à Home.

### `pacotes.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/pacotes.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Apresenta os pacotes:
  - Escolar
  - Pocket
  - Premium
- Possui links para páginas individuais de cada pacote.
- Possui informações comerciais sobre:
  - duração
  - quantidade de convidados
  - pagamento
  - validade de orçamento
- Header, navegação e footer repetem a estrutura das demais páginas.
- Possui links externos para Instagram e Facebook.

#### Pontos para revisão

- Conteúdo dos pacotes existe nesta página e também nas páginas individuais, criando risco de divergência de informação.
- Existe estilo inline em:
  - `text-align: center`
- Revisar estrutura semântica da seção "Informações importantes".
- Existe um `<h3>` diretamente dentro de um `<ul>`, o que não é uma estrutura HTML adequada.
- A última `<ul>` aparenta não possuir fechamento correspondente antes do `</aside>`.
- Há seções aninhadas que merecem revisão de semântica e necessidade.
- Header e footer continuam duplicados manualmente.

#### Pontos para revisão

- Imagens da galeria não possuem `width` e `height` explícitos.
- Avaliar impacto das imagens em CLS e carregamento.
- Swiper é carregado por CDN, criando dependência externa em produção.
- CTA utiliza `onclick` inline.
- Header, navegação, footer e redes sociais estão duplicados entre páginas HTML.
- Avaliar acessibilidade dos controles do Swiper.

### `pacote-escolar.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/pacote-detalhado.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Utiliza estrutura visual específica para páginas de pacote.
- Conteúdo dividido em:
  - estrutura
  - equipe
  - gastronomia
  - decoração
  - opcionais
  - informações importantes
- Possui CTA de orçamento com:
  - `data-package="escolar"`
- Possui navegação de retorno para `pacotes.html`.
- Header e footer seguem o mesmo padrão das demais páginas.
- Possui links externos para Instagram e Facebook.

#### Pontos para revisão

- Parte das informações do pacote Escolar também aparece em `pacotes.html`.
- Risco de divergência entre resumo e página detalhada.
- Conteúdo estruturado em texto com marcadores `•` dentro de `<p>`, em vez de listas semânticas.
- Avaliar se as três páginas de pacote repetem praticamente a mesma estrutura HTML.
- Avaliar possibilidade futura de centralizar dados dos pacotes.
- A hero do Pocket utiliza a classe `package-detail-hero--escolar`; verificar se é intencional ou resíduo de cópia da página Escolar.

### `pacote-pocket.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/pacote-detalhado.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Utiliza a mesma estrutura visual de `pacote-escolar.html`.
- Conteúdo dividido em:
  - estrutura
  - equipe
  - gastronomia
  - decoração
  - opcionais
  - informações importantes
- CTA de orçamento utiliza:
  - `data-package="pocket"`
- Possui links externos para Instagram e Facebook.
- Compartilha header, navegação e footer com as demais páginas.

#### Pontos para revisão

- Estrutura HTML praticamente duplicada em relação a `pacote-escolar.html`.
- Grande parte dos opcionais também é duplicada.
- Conteúdo de Estrutura e Equipe é praticamente idêntico ao Pacote Escolar.
- Conteúdo utiliza marcadores `•` dentro de `<p>` em vez de listas semânticas.
- Parte das informações também aparece em `pacotes.html`.
- Existe risco de divergência de conteúdo entre página-resumo e página detalhada.
- Avaliar centralização futura dos dados dos pacotes.

### `pacote-premium.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/pacote-detalhado.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Compartilha a mesma estrutura-base das páginas:
  - `pacote-escolar.html`
  - `pacote-pocket.html`
- Possui conteúdo adicional exclusivo:
  - cobertura fotográfica
  - galeria de papelaria
  - doces decorados
  - cardápio gourmet
- Utiliza imagens locais em:
  - `assets/img/premium/`
- CTA de orçamento utiliza:
  - `data-package="premium"`
- Possui links externos para Instagram e Facebook.

### `sobre.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/sobre.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Conteúdo organizado em:
  - apresentação
  - essência
  - valores
  - CTA final
- Utiliza classes compartilhadas como:
  - `section`
  - `container`
  - `section-head`
  - `grid-3`
  - `card`
  - `btn`
- Possui links externos para Instagram e Facebook.
- Header, navegação e footer seguem o mesmo padrão das demais páginas.

#### Pontos para revisão

- O link "Sobre" não possui `aria-current="page"`, diferente de outras páginas que sinalizam a página atual.
- Header, navegação e footer continuam duplicados manualmente.
- Confirmar se o conteúdo institucional está atualizado e alinhado à proposta comercial atual.
- Avaliar consistência de SEO local entre esta página e a Home.

#### Pontos para revisão

- Estrutura HTML amplamente duplicada em relação aos outros pacotes.
- Header, navegação e footer continuam duplicados manualmente.
- Conteúdo de Estrutura e Equipe é praticamente idêntico às demais páginas de pacote.
- Blocos de opcionais também possuem alto grau de repetição.
- Parte das informações do Premium também existe em `pacotes.html`.
- Conteúdo utiliza marcadores `•` dentro de `<p>` em vez de listas semânticas.
- Imagens da galeria Premium não possuem `width` e `height` explícitos.
- Imagens não utilizam `loading="lazy"`.
- Avaliar peso e formato das imagens em `assets/img/premium/`.
- A hero utiliza `package-detail-hero--escolar`; verificar se é intencional ou resíduo de cópia.

### `localizacao.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/localizacao.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Integrações externas:
  - Google Maps Embed via `iframe`
  - Google Maps Directions
  - WhatsApp
  - Instagram
  - Facebook
- O mapa utiliza:
  - `loading="lazy"`
  - `referrerpolicy="no-referrer-when-downgrade"`
  - `allowfullscreen`
- Possui endereço completo, telefone e horário de atendimento.
- Possui múltiplos CTAs para:
  - abrir rota no Google Maps
  - agendar visita pelo WhatsApp
- Header e footer seguem o padrão das demais páginas.

#### Pontos para revisão

- O link `Localização` não possui `aria-current="page"`.
- WhatsApp é acionado por `onclick` inline em mais de um ponto.
- Endereço e telefone aparecem em múltiplos locais do projeto, aumentando risco de divergência.
- Avaliar centralização dos dados institucionais em `config.js`.
- Revisar consistência entre endereço desta página e o JSON-LD da Home.
- Avaliar se horário de atendimento está atualizado e deve ser tratado como dado centralizado.
- Header, navegação e footer continuam duplicados manualmente.

### `faq.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/faq.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Utiliza elementos semânticos nativos:
  - `<details>`
  - `<summary>`
- FAQ composta por perguntas sobre:
  - capacidade do espaço
  - conteúdo dos pacotes
  - orçamento
  - decoração
  - antecedência para agendamento
  - alimentos externos
- Possui CTA para:
  - página de pacotes
  - WhatsApp
- Link `FAQ` utiliza `aria-current="page"`.
- Header e footer seguem o padrão das demais páginas.
- Possui links externos para Instagram e Facebook.

#### Pontos para revisão

- CTA do WhatsApp utiliza `onclick` inline.
- Conteúdo da FAQ replica informações comerciais existentes em outras páginas.
- Existe risco de divergência de dados como capacidade, prazo de agendamento e políticas.
- Avaliar se perguntas frequentes devem receber dados estruturados `FAQPage` no futuro.
- Header, navegação e footer continuam duplicados manualmente.

### `contato.html`

- SEO básico implementado:
  - `title`
  - `meta description`
  - Open Graph
- Carrega:
  - `assets/css/style.css`
  - `assets/css/contato.css`
  - `assets/js/config.js`
  - `assets/js/main.js`
- Possui formulário com:
  - nome
  - telefone/WhatsApp
  - mensagem
  - validação HTML5
  - `novalidate`
  - honeypot anti-spam
  - área de status com `aria-live="polite"`
- Integrações:
  - WhatsApp
  - Google Maps Directions
  - Instagram
  - Facebook
- Possui telefone com `tel:`
- Possui endereço completo e link para mapa.

#### Pontos para revisão

- O link `Contato` não possui `aria-current="page"`.
- Diversos CTAs utilizam `onclick` inline.
- O link de telefone possui `href="tel:..."`, mas o `onclick` intercepta o clique e abre WhatsApp.
- Existe estrutura HTML inválida com `<p>` dentro de outro `<p>`.
- Endereço, telefone e redes sociais estão duplicados em outras páginas.
- Confirmar o comportamento real do formulário em `main.js`.
- Confirmar se o formulário apenas abre WhatsApp ou se existe envio de dados para algum serviço externo.
- Revisar honeypot e validação no JavaScript.
- Header, navegação e footer continuam duplicados manualmente.

## Achados estruturais transversais

### Duplicação das páginas de pacote

As páginas `pacote-escolar.html`, `pacote-pocket.html` e `pacote-premium.html`
utilizam praticamente o mesmo template estrutural.

Elementos repetidos incluem:

- header;
- navegação;
- footer;
- estrutura do hero;
- grid de informações;
- seção de opcionais;
- bloco de informações importantes;
- ações finais;
- scripts e folhas de estilo.

As diferenças estão concentradas principalmente nos dados e conteúdos de cada pacote.

Isso aumenta o custo de manutenção e o risco de inconsistência entre páginas.

Também existe duplicação parcial de conteúdo entre `pacotes.html` e as páginas
detalhadas de cada pacote.

Recomenda-se avaliar, em etapa posterior, uma forma de centralizar os dados dos
pacotes e reduzir a duplicação estrutural.

### Estrutura global duplicada

Até o momento, todas as páginas analisadas mantêm manualmente:

- header;
- logo;
- botão de menu;
- navegação;
- footer;
- links sociais;
- carregamento de `config.js`;
- carregamento de `main.js`.

Essa repetição aumenta o risco de inconsistências entre páginas, como diferenças em
`aria-current`, links, textos ou futuras alterações de navegação.

### Dados institucionais duplicados

Informações como endereço, telefone e possivelmente horário de atendimento aparecem
em mais de uma página do site.

Exemplos identificados:

- `index.html`
  - telefone e endereço no JSON-LD
- `localizacao.html`
  - endereço
  - telefone
  - horário de atendimento

Recomenda-se avaliar posteriormente a centralização desses dados em uma única fonte,
evitando inconsistências entre páginas.

### Conteúdo comercial distribuído

Informações comerciais e operacionais aparecem em múltiplas páginas, incluindo:

- `pacotes.html`
- páginas detalhadas de pacotes
- `faq.html`
- `localizacao.html`

Isso aumenta o risco de informações divergentes quando regras, capacidades,
horários ou condições comerciais forem alterados.

## 2. CSS

| Arquivo | Responsabilidade | Usado por | Estado | Observações |
|---|---|---|---|---|
| `assets/css/style.css` | Base global do site: tokens, reset, layout, tipografia, header/nav, botões, cards, formulários, footer, lightbox, animações e responsividade | Todas as páginas HTML analisadas | Ativo | Estrutura global relativamente organizada. Possui variáveis CSS e componentes reutilizáveis. Revisar tokens incompletos, cores hardcoded, `transition: all`, animações sem `prefers-reduced-motion`, comportamento do skip-link e possíveis regras não utilizadas. |
| `assets/css/home.css` | Estilos específicos da Home, principalmente hero em vídeo, CTAs e elementos de destaque | `index.html` | Ativo | Possui estilos próprios da Home, mas também contém regras genéricas para CTA e botões que podem estar sobrepostas à base global. Revisar duplicação com `style.css`, seletores possivelmente não utilizados e tokens incompletos. |
| `assets/css/galeria.css` | Estilos da página de galeria, incluindo hero, Swiper, navegação, paginação e ações | `galeria.html` | Ativo / Revisar | Parte das regras atende o carrossel Swiper atual; seletores como `.gallery`, `.thumb` e `figcaption` parecem não corresponder ao HTML atual e devem ser validados como possível CSS obsoleto. |
| `assets/css/pacotes.css` | Estilos da página geral de pacotes: hero, grid, cards, listas e ações | `pacotes.html` | Ativo / Revisar | A parte principal atende `pacotes.html`, mas os media queries finais referenciam classes de `pacote-detalhado.css`, sugerindo regras deslocadas ou legado. Também há cores hardcoded equivalentes aos tokens globais. |
| `assets/css/pacote-detalhado.css` | Estilos compartilhados das páginas detalhadas dos pacotes Escolar, Pocket e Premium, incluindo hero, cards, chips, opcionais, observações, ações e galeria Premium | `pacote-escolar.html`, `pacote-pocket.html`, `pacote-premium.html` | Ativo / Revisar | Arquivo central das páginas de pacote detalhado. Possui duplicação parcial com `pacotes.css`, seletores com provável erro de digitação, classes possivelmente não utilizadas e diversas cores hardcoded fora dos tokens globais. |
| `assets/css/contato.css` | Estilos específicos da página de contato, incluindo layout em duas colunas, informações de contato, status do formulário e responsividade | `contato.html` | Ativo | Arquivo coeso e específico da página. Revisar possíveis classes não utilizadas, cores hardcoded e dependência de `transition: all` via token global. |
| `assets/css/faq.css` | Estilos específicos da página FAQ, incluindo hero, acordeão nativo, estados de interação e ações finais | `faq.html` | Ativo | Arquivo coeso e alinhado ao HTML atual. Reutiliza tokens globais, mas ainda possui cores hardcoded e animação sem tratamento de `prefers-reduced-motion`. |
| `assets/css/sobre.css` | Estilos específicos da página institucional, incluindo hero, apresentação, missão, valores e CTA final | `sobre.html` | Ativo | Arquivo coeso e específico da página. Reutiliza componentes e tokens globais, mas mantém gradiente e algumas cores hardcoded equivalentes aos tokens existentes. |
| `assets/css/localizacao.css` | Estilos específicos da página de localização, incluindo hero, layout de mapa/informações, cards, ações e responsividade | `localizacao.html` | Ativo | Arquivo coeso e alinhado ao HTML atual. Reutiliza tokens globais, mas mantém gradiente e algumas cores hardcoded equivalentes aos tokens existentes. |


### `assets/css/style.css`

#### Responsabilidades

- Define tokens globais em `:root`.
- Reset básico e estilos do `body`.
- Container e espaçamento de seções.
- Tipografia e helpers.
- Header e navegação.
- Botões.
- Componentes globais:
  - grids
  - cards
  - side notes
  - divider
- Formulários.
- Footer e redes sociais.
- Lightbox.
- Animações.
- Responsividade global.

#### Pontos positivos

- Utiliza variáveis CSS para:
  - cores principais
  - sombras
  - radius
  - espaçamento
  - largura máxima
  - transições
- Possui classes reutilizáveis.
- Utiliza `clamp()` na tipografia.
- Responsividade concentrada em breakpoints globais.
- Formulários possuem estados de foco.
- Utiliza `sr-only` para conteúdo acessível.
- Possui estilos compartilhados que reduzem duplicação entre CSS de páginas.

#### Pontos para revisão

- Algumas cores continuam hardcoded fora de `:root`.
- `--transition` utiliza `transition: all`, podendo animar propriedades desnecessárias.
- Animações globais são aplicadas automaticamente em `.section`, `.card` e outros elementos.
- Não foi identificado tratamento para `prefers-reduced-motion`.
- `scroll-behavior: smooth` também deveria considerar usuários com redução de movimento.
- Avaliar se todas as animações declaradas ainda são utilizadas.
- Avaliar se `.image-lightbox` ainda possui uso real no JavaScript/páginas.
- Revisar nomenclatura e comportamento de `.skip-link`, pois visualmente ela funciona como botão "voltar ao topo".
- Algumas propriedades visuais poderiam utilizar tokens adicionais.

### Nomenclatura / acessibilidade

A classe `.skip-link` parece estar sendo utilizada como botão flutuante de retorno
ao conteúdo/topo, e não como um skip link tradicional de acessibilidade.

Revisar posteriormente:

- finalidade real do componente;
- `href`;
- `aria-label`;
- nomenclatura CSS;
- necessidade de um skip link verdadeiro para navegação por teclado.

### `assets/css/home.css`

#### Responsabilidades

- Hero principal da Home.
- Vídeo de fundo.
- Conteúdo sobreposto ao vídeo.
- CTAs da hero.
- Elementos auxiliares:
  - `hero-frame`
  - `hero-actions`
- Estilo de `cta-section`.
- Ajustes responsivos para telas pequenas.

#### Pontos positivos

- Separa responsabilidade visual da Home do CSS global.
- Reutiliza tokens globais como:
  - `--accent`
  - `--accent-dark`
  - `--transition`
  - `--shadow-sm`
  - `--shadow-md`
  - `--shadow-lg`
- Possui breakpoint específico para telas pequenas.

#### Pontos para revisão

- Existem estilos de `.btn` dentro de `.cover-ctas`, parcialmente duplicando o componente global `.btn`.
- `.cta-section` parece um componente reutilizável e não necessariamente exclusivo da Home.
- Existem seletores como `.cover-inner`, `.hero-frame` e `.hero-actions` que devem ser validados contra o HTML atual.
- Algumas cores continuam hardcoded (`#fff`, `#000`, `#ffffff`).
- Existem várias animações `fadeInUp` sem tratamento de `prefers-reduced-motion`.
- `height: 100vh` e `min-height: 100vh` merecem revisão em mobile.
- `hero-video` usa `height: 90%`, o que merece validar visualmente se é intencional.
- `padding: 60px 20px !important` em `.cta-section` indica possível conflito de especificidade.

### `assets/css/galeria.css`

#### Responsabilidades

- Hero da página de galeria.
- Estilos do Swiper.
- Altura dos slides.
- Imagens do carrossel.
- Botões de navegação.
- Paginação.
- Ações/CTAs.
- Ajustes responsivos.

#### Pontos positivos

- Customização do Swiper está concentrada no CSS da página.
- Utiliza tokens globais para:
  - radius
  - sombras
  - transições
  - cor principal
- Possui responsividade específica para tablet e mobile.
- Usa `object-fit: cover` para preservar o enquadramento das imagens.

#### Pontos para revisão

- `.gallery`, `.thumb` e regras relacionadas aparentam não existir no HTML atual.
- `figcaption` também não aparece na implementação atual do carrossel.
- Essas regras podem ser resíduos de uma versão anterior da galeria.
- A hero usa cores hardcoded equivalentes a `--accent` e `--accent-dark`.
- Swiper usa alturas fixas:
  - `500px`
  - `400px`
  - `300px`
- Avaliar se alturas fixas são adequadas em diferentes proporções de tela.
- `transition: var(--transition)` herda `transition: all`.
- Animações em `.thumb` precisam ser revisadas caso o componente ainda exista.
- Não há tratamento visível para `prefers-reduced-motion`.

### `assets/css/pacotes.css`

#### Responsabilidades

- Hero da página de pacotes.
- Grid dos pacotes.
- Cards dos pacotes.
- Listas de benefícios.
- Informações de duração/convidados.
- Botões de acesso às páginas detalhadas.

#### Pontos positivos

- Estrutura simples e específica da página.
- Reutiliza componentes globais como `.card` e `.btn`.
- Usa flexbox para equalizar altura dos cards.
- Mantém ações dos pacotes separadas do conteúdo.

#### Pontos para revisão

- `.about-hero` é um nome genérico/inadequado para a página de pacotes.
- As cores `#00bcd4`, `#0097a7`, `#ffffff` e `#1f2937` já possuem equivalentes nos tokens globais.
- Os media queries contêm seletores:
  - `.package-detail-grid`
  - `.package-detail-hero`
  - `.package-detail-lead`
  - `.package-detail-card`
  - `.package-detail-highlight`
  - `.package-detail-optional`
  - `.package-detail-note`
  - `.package-detail-tags`
  - `.package-detail-actions`
- Essas classes não aparecem em `pacotes.html`; pertencem às páginas detalhadas.
- Validar se essas regras são duplicadas em `pacote-detalhado.css`.
- Caso sejam, considerar este trecho CSS deslocado ou obsoleto.

### `assets/css/pacote-detalhado.css`

#### Responsabilidades

- Hero das páginas de pacote.
- Conteúdo principal dos pacotes.
- Cards de estrutura, equipe, gastronomia e decoração.
- Chips informativos.
- Seção de opcionais.
- Informações importantes.
- Ações finais.
- Variações visuais por pacote.
- Galeria exclusiva do Pacote Premium.
- Responsividade das páginas detalhadas.

#### Pontos positivos

- Centraliza os estilos compartilhados das três páginas de pacote.
- Reutiliza tokens globais como:
  - `--accent`
  - `--accent-dark`
  - sombras
  - transições
- Mantém a galeria Premium no mesmo contexto visual da página de detalhe.
- Possui responsividade específica.
- Usa `clamp()` e `aspect-ratio`.
- A estrutura de classes é relativamente consistente.

#### Pontos para revisão

- As regras responsivas também aparecem em `pacotes.css`, indicando duplicação.
- Existem várias cores hardcoded que poderiam utilizar tokens.
- `.package-detail-kicker` não apareceu nas páginas HTML analisadas até agora.
- `.titulo-pincel` também não apareceu nas páginas HTML analisadas.
- Validar se essas classes ainda são utilizadas ou são resíduos de versões anteriores.
- `transition: var(--transition)` herda `transition: all`.
- Não há tratamento para `prefers-reduced-motion`.
- Existem seletores com provável erro de digitação:
  - `.package-datail-hero--escolar`
  - `.package-datail-hero--pocket`
  - `.package-datail-hero--premium`
- Esses seletores provavelmente nunca correspondem aos elementos HTML atuais.
- Há provável ausência de vírgula entre seletores da variação Premium, alterando o significado do seletor CSS.

### Variações de hero inconsistentes

O CSS define três modificadores:

- `.package-detail-hero--escolar`
- `.package-detail-hero--pocket`
- `.package-detail-hero--premium`

Entretanto, as três páginas HTML analisadas utilizam
`.package-detail-hero--escolar`.

Isso indica possível resíduo de copiar/colar ou implementação incompleta das
variações por pacote.

### `assets/css/contato.css`

#### Responsabilidades

- Layout principal da página de contato.
- Cards de contato.
- Informações institucionais.
- Links de telefone/redes.
- Área de status do formulário.
- Nota auxiliar do formulário.
- Responsividade da página.

#### Pontos positivos

- Responsabilidade bem delimitada.
- Arquivo pequeno e fácil de manter.
- Reutiliza tokens globais:
  - `--text`
  - `--accent`
  - `--muted`
  - `--surface-soft`
  - `--radius-md`
  - `--transition`
- Responsividade simples e objetiva.
- Não replica estilos completos de formulário, aproveitando a base de `style.css`.

#### Pontos para revisão

- `border-bottom: 1px solid #e5e7eb` utiliza cor hardcoded já presente em outros pontos do CSS global.
- `transition: var(--transition)` herda `transition: all`.
- Validar se `.contact-socials` ainda é utilizada no HTML atual.
- Revisar se `.contact-status` recebe estados visuais diferenciados para sucesso e erro via JavaScript.

### `assets/css/faq.css`

#### Responsabilidades

- Hero da página FAQ.
- Container das perguntas.
- Estilização de `<details>` e `<summary>`.
- Estados:
  - hover
  - focus
  - aberto
- Corpo das respostas.
- CTAs finais.
- Responsividade mobile.

#### Pontos positivos

- Responsabilidade bem delimitada.
- Trabalha diretamente com os elementos nativos `<details>` e `<summary>`.
- Não depende de JavaScript para abrir e fechar o FAQ.
- Possui estado de foco visível.
- Possui indicação visual clara para item aberto.
- Reutiliza tokens globais:
  - `--radius-md`
  - `--shadow-xs`
  - `--shadow-sm`
  - `--accent`
  - `--muted`
  - `--muted-light`
  - `--muted-lighter`
  - `--transition`
- Responsividade simples e específica.

#### Pontos para revisão

- O gradiente da hero utiliza `#00bcd4` e `#0097a7`, apesar de existirem `--accent` e `--accent-dark`.
- `background: #fff` também poderia utilizar `--surface`.
- `transition: var(--transition)` herda `transition: all`.
- `.faq-body` utiliza `slideDown`, mas não há tratamento de `prefers-reduced-motion`.
- Avaliar comportamento visual da animação aplicada ao conteúdo de `<details>`.
- Validar se a animação `slideDown` realmente produz o efeito esperado, pois utiliza transição de `height: 0` para `height: auto`.

### `assets/css/sobre.css`

#### Responsabilidades

- Hero da página Sobre.
- Bloco de apresentação.
- Bloco "Nossa essência".
- Grid de valores.
- CTA final.
- Ajustes responsivos mobile.

#### Pontos positivos

- Responsabilidade bem delimitada.
- Reaproveita componentes globais:
  - `.section-head`
  - `.grid-3`
  - `.card`
  - `.btn`
- Reutiliza tokens:
  - `--text`
  - `--surface-soft`
  - `--accent`
  - `--radius-md`
  - `--shadow-sm`
  - `--shadow-md`
  - `--transition`
- Arquivo pequeno e fácil de compreender.
- Responsividade específica sem excesso de regras.

#### Pontos para revisão

- O gradiente utiliza `#00bcd4` e `#0097a7`, apesar de existirem `--accent` e `--accent-dark`.
- `color: #fff` / `#ffffff` poderia utilizar um token de texto sobre fundo escuro.
- `.about-mission` utiliza `transition: var(--transition)`, herdando `transition: all`.
- A animação/transformação no hover de `.about-mission` deve ser considerada na futura implementação de `prefers-reduced-motion`.
- Avaliar futuramente um componente/classe global para heroes internos que
  compartilham o mesmo gradiente, alinhamento e tratamento de texto.

### Nomenclatura compartilhada indevidamente

A classe `.about-hero` é utilizada tanto pela página `sobre.html` quanto pela
página `pacotes.html`.

Embora funcionalmente não cause problema imediato, o nome está semanticamente
associado à página Sobre e foi reutilizado em outro contexto.

Revisar posteriormente a nomenclatura dos heroes de página para evitar
acoplamento semântico entre páginas distintas.

### `assets/css/localizacao.css`

#### Responsabilidades

- Hero da página de localização.
- Layout em duas colunas.
- Card de endereço e informações.
- Links de contato.
- Cards informativos.
- Ações finais.
- Container do mapa.
- Responsividade para tablet e mobile.

#### Pontos positivos

- Responsabilidade bem delimitada.
- Arquivo fácil de relacionar com o HTML da página.
- Reutiliza tokens:
  - `--surface`
  - `--radius-md`
  - `--radius-lg`
  - `--shadow-sm`
  - `--shadow-md`
  - `--text`
  - `--accent`
  - `--transition`
- O mapa possui container próprio e responsivo.
- Breakpoints acompanham o comportamento global do projeto.
- Não há regras aparentemente deslocadas para outras páginas.

#### Pontos para revisão

- O gradiente da hero utiliza `#00bcd4` e `#0097a7`, apesar de existirem `--accent` e `--accent-dark`.
- `color: #fff` / `#ffffff` poderia utilizar um token semântico para texto sobre fundos escuros.
- `.map` utiliza `background: #fff`, que poderia usar `--surface`.
- `.location-card` utiliza `transition: var(--transition)`, herdando `transition: all`.
- O efeito de `transform` no hover deve ser considerado na futura implementação de `prefers-reduced-motion`.
- Alturas fixas do mapa (`420px`, `320px`, `260px`) devem ser validadas visualmente em diferentes proporções de tela.

## Diagnóstico parcial da camada CSS

A estrutura CSS atual é modular e está organizada entre uma base global e arquivos
específicos por página.

### Pontos positivos

- Existe uma base global centralizada em `style.css`.
- O projeto já utiliza CSS custom properties.
- Componentes como botões, cards, formulários e grids possuem estilos reutilizáveis.
- As páginas possuem arquivos CSS específicos relativamente pequenos.
- A responsividade está implementada de forma explícita.
- Não foi identificado, até o momento, motivo técnico suficiente para substituir
  essa estrutura por um framework frontend.

### Dívidas e oportunidades identificadas

- Tokens existem, mas não cobrem completamente cores e propriedades visuais.
- Há várias cores hardcoded equivalentes aos tokens existentes.
- `--transition` utiliza `transition: all`.
- Não foi identificado tratamento global de `prefers-reduced-motion`.
- Existem possíveis regras CSS obsoletas.
- `pacotes.css` contém regras pertencentes a páginas detalhadas.
- Existem inconsistências e erros de nomenclatura em `pacote-detalhado.css`.
- Heroes internos repetem padrões visuais semelhantes.
- Algumas classes possuem nomes associados a páginas diferentes do contexto em que são usadas.
- Existem animações e transformações que devem ser revisadas sob a ótica de acessibilidade.

## 3. JavaScript

| Arquivo | Responsabilidade | Usado por | Estado | Observações |
|---|---|---|---|---|
| `assets/js/config.js` | Configuração centralizada de telefone, cores, redes sociais, endereço e horários | Todas as páginas que carregam `main.js` | Ativo / Revisar | Já funciona como fonte central de configuração, mas parte dos mesmos dados continua hardcoded nos HTMLs e CSS. Existem divergências de endereço e redes sociais em relação às páginas analisadas. |
| `assets/js/main.js` | Comportamentos globais do site: menu responsivo, WhatsApp, formulário, pacotes, Swiper, skip-link, ano do footer e lightbox | Todas as páginas | Ativo / Revisar | Arquivo central e relativamente organizado. Possui código aparentemente não utilizado de lightbox, dependência global de `CONFIG`, suporte parcial de acessibilidade e funções expostas globalmente para atender handlers inline. |

### `assets/js/config.js`

#### Responsabilidades

- Centraliza telefone.
- Centraliza cores institucionais.
- Centraliza URLs de redes sociais.
- Centraliza endereço.
- Centraliza horário de atendimento.

#### Pontos positivos

- Já existe uma tentativa explícita de centralização de dados.
- Evita espalhar valores de configuração por toda a lógica JavaScript.
- Estrutura simples e fácil de compreender.
- Pode servir como base para eliminar duplicação de dados no restante do site.

#### Pontos para revisão

- Telefone ainda aparece hardcoded em páginas HTML.
- Endereço ainda aparece hardcoded em páginas HTML.
- Horário ainda aparece hardcoded em `localizacao.html`.
- Cores do `CONFIG.COLORS` também existem como CSS custom properties em `style.css`.
- Redes sociais do `CONFIG` precisam ser comparadas com as URLs usadas no HTML.
- Confirmar quais propriedades do `CONFIG` são realmente consumidas por `main.js`.
- Avaliar se existem propriedades atualmente sem uso.
- Avaliar necessidade de `CONFIG.COLORS`. Caso as cores não sejam utilizadas por
  lógica JavaScript, manter a fonte de verdade apenas nos CSS custom properties.

### Divergência de endereço

O `config.js` identifica o bairro como `Butiatuvinha`, enquanto as páginas HTML
analisadas exibem `Santa Felicidade`.

É necessário confirmar qual informação é a correta antes de qualquer
centralização ou alteração.

### Divergência de redes sociais

As URLs armazenadas em `CONFIG.SOCIAL` não correspondem às URLs encontradas nos
footers das páginas HTML.

Além disso, o `CONFIG` possui TikTok, mas essa rede não apareceu nas páginas
analisadas.

Validar:
- URLs oficiais;
- redes atualmente ativas;
- propriedades não utilizadas.

### `assets/js/main.js`

#### Responsabilidades

- Helpers de seleção DOM:
  - `qs`
  - `qsa`
- Obtém telefone do `CONFIG`.
- Abre conversas no WhatsApp.
- Monta mensagens de orçamento.
- Controla menu mobile.
- Fecha menu ao:
  - clicar em link
  - clicar fora
  - pressionar `Escape`
- Atualiza automaticamente o ano do footer.
- Inicializa o Swiper da galeria.
- Processa o formulário de contato.
- Valida honeypot.
- Executa validação HTML5.
- Processa botões de pacotes.
- Faz gerenciamento de foco do `.skip-link`.
- Possui helpers de lightbox.

#### Pontos positivos

- Código encapsulado em IIFE.
- Evita poluir o escopo global na maior parte do arquivo.
- Possui verificações antes de acessar componentes opcionais.
- Menu atualiza corretamente `aria-expanded`.
- Menu pode ser fechado com `Escape`.
- Formulário utiliza `checkValidity()` e `reportValidity()`.
- Honeypot existe como camada básica contra automação simples.
- Mensagens do formulário utilizam `aria-live` definido no HTML.
- Swiper possui:
  - navegação por teclado
  - suporte de acessibilidade
- Conteúdo da legenda do lightbox passa por `escapeHtml()`.

### Uso parcial de `config.js`

Atualmente `main.js` utiliza apenas `CONFIG.PHONE`.

As propriedades abaixo não foram identificadas como utilizadas pela lógica
JavaScript analisada:

- `PHONE_DISPLAY`
- `COLORS`
- `SOCIAL`
- `ADDRESS`
- `HOURS`

Isso explica por que endereço, horário e redes sociais continuam duplicados
diretamente nos HTMLs.

Revisar posteriormente quais configurações devem realmente ser centralizadas
e quais propriedades podem ser removidas.

### Acoplamento com handlers inline

`openWhatsApp()` é exposta em `window` para atender atributos `onclick`
presentes nos HTMLs.

Isso cria acoplamento entre markup e implementação JavaScript.

Avaliar posteriormente substituir handlers inline por `addEventListener`
e atributos `data-*`.

### Formulário de contato

O formulário não envia dados para backend, banco de dados ou serviço externo.

O envio apenas:

1. valida os campos;
2. monta uma mensagem;
3. abre o WhatsApp através de `wa.me`;
4. limpa o formulário.

Não há persistência dos dados preenchidos.

### Possível funcionalidade legada de lightbox

`main.js` contém:

- `openLightbox`
- `closeLightbox`
- `escapeHtml`

Entretanto, não foi identificada chamada a `openLightbox()` na implementação
JavaScript atual.

Isso coincide com regras aparentemente obsoletas de `.gallery` e `.thumb`
encontradas em `galeria.css`.

Validar como possível código legado da versão anterior da galeria.

### Movimento e acessibilidade

O site possui movimento automático em diferentes camadas:

- animações CSS;
- smooth scrolling;
- autoplay do Swiper.

Não foi identificado tratamento centralizado para
`prefers-reduced-motion`.

Avaliar posteriormente desativar ou reduzir movimentos automáticos para
usuários que expressem essa preferência.

## 4. Workflows

| `.github/workflows/node.js-package.yml` | Executar testes Node.js e publicar pacote no GitHub Packages ao criar uma release | Possivelmente obsoleto | O workflow pressupõe projeto Node com `package.json`, `npm ci`, `npm test` e `npm publish`, o que não corresponde à arquitetura HTML/CSS/JS identificada até agora. Provável workflow criado a partir de template e nunca utilizado. |
| `.gitignore` | Define arquivos e diretórios ignorados pelo Git | Ativo / Revisar | Arquivo majoritariamente baseado em template Python, apesar de o projeto atual ser HTML/CSS/JavaScript estático. Contém dezenas de regras sem relação com a stack identificada. |

### `.gitignore`

#### Comportamento

O arquivo contém regras relacionadas principalmente a ecossistemas Python e ferramentas associadas, incluindo:

- Python bytecode
- virtual environments
- Django
- Flask
- Scrapy
- Jupyter
- PyInstaller
- Poetry
- Pipenv
- PDM
- pytest
- mypy
- Ruff
- Cython
- Celery
- PyCharm

Também possui algumas regras genéricas de ambiente e editores.

#### Pontos para revisão

- Não foi identificado código Python no projeto.
- Não foram identificados Django, Flask, Jupyter ou ferramentas Python relacionadas.
- O arquivo é muito maior do que a necessidade atual do repositório.
- A presença desse template reforça a hipótese de configurações adicionadas sem relação com a arquitetura real.
- Avaliar posteriormente substituir por um `.gitignore` pequeno e específico para o projeto atual.

### `.github/workflows/node.js-package.yml`

#### Comportamento

- Executa apenas quando uma GitHub Release é criada.
- Usa Node.js 20.
- Executa:
  - `npm ci`
  - `npm test`
- Em seguida tenta publicar um pacote com:
  - `npm publish`
  - GitHub Packages
  - `GITHUB_TOKEN`

#### Pontos para revisão

- Não foi identificado projeto Node.js na arquitetura atual.
- Não foi identificado `package.json`.
- Não foi identificado pacote npm a ser publicado.
- Não foi identificada suíte de testes baseada em npm.
- O site é atualmente composto por HTML, CSS e JavaScript estáticos.
- Se não existir `package.json`, esse workflow falhará ao ser executado.
- Mesmo com `package.json`, é necessário confirmar se existe intenção real de publicar um pacote no GitHub Packages.
- Forte candidato a workflow legado ou criado por template.

### `.github/workflows/jekyll.yml`

#### Responsabilidades

- Executa em:
  - `push` para `main`
  - `pull_request` para `main`
- Utiliza:
  - `actions/checkout@v4`
  - runner `ubuntu-latest`
  - container `jekyll/builder:latest`
- Gera o site com:
  - `jekyll build --future`
- Monta o diretório `_site` dentro do workspace.

#### Pontos para revisão

- O projeto analisado é composto por HTML, CSS e JavaScript estáticos.
- Não foram identificados, até o momento, templates ou conteúdo Jekyll que justifiquem obrigatoriamente esse build.
- O uso de `jekyll/builder:latest` reduz previsibilidade, pois a versão pode mudar.
- O comando utiliza `chmod -R 777`, que concede permissões amplas desnecessariamente.
- O workflow apresentado executa build, mas não contém etapa explícita de publicação/deploy.
- Confirmar se o GitHub Pages está configurado para publicar:
  - diretamente da branch;
  - por outro workflow;
  - ou pelo resultado `_site`.
- Avaliar se o workflow ainda é necessário.

### Workflows potencialmente desalinhados com a arquitetura

Os workflows encontrados até o momento sugerem automações adicionadas em momentos
diferentes sem relação direta com a arquitetura atual do projeto.

Foram identificados:

- workflow Jekyll para build;
- workflow Node.js para testes e publicação de pacote.

A aplicação atual, entretanto, foi identificada como um site estático em HTML,
CSS e JavaScript.

Recomenda-se revisar os workflows ativos e manter apenas automações necessárias
ao processo real de desenvolvimento, validação e deploy.

## 5. Infraestrutura e arquivos de repositório

| Arquivo | Responsabilidade | Estado | Observações |
|---|---|---|---|
| `CNAME` | Configura domínio personalizado do GitHub Pages | Ativo | Define `31meu.com.br` como domínio principal. Confirmar posteriormente DNS, HTTPS e configuração do GitHub Pages. |
| `.gitignore` | Define arquivos ignorados pelo Git | Revisar | Baseado majoritariamente em template Python e incompatível com a stack real do projeto. |
| `.github/workflows/jekyll-docker.yml` | Executa build Jekyll em push/PR para `main` | Revisar | O projeto não apresenta estrutura Jekyll evidente. Avaliar necessidade real do build. |
| `.github/workflows/npm-publish-github-packages.yml` | Testa projeto Node e publica pacote npm em releases | Possivelmente obsoleto | Não existe `package.json` na estrutura atual. Workflow incompatível com o projeto HTML/CSS/JS estático. |
| `LICENSE` | Licenciamento do código sob MIT | Ativo | Licença válida e permissiva. Revisar apenas consistência da identificação do autor/proprietário. |
| `SECURITY.md` | Política de segurança do projeto | Possivelmente obsoleto / Template | Conteúdo padrão não adaptado ao projeto, com versões fictícias `5.1.x`, `5.0.x`, `4.0.x` etc. |
| `README.md` | Documentação principal do projeto | Ativo / Desatualizado | Descreve corretamente a ideia geral, mas contém divergências em relação à estrutura e implementação atuais. |

### `CNAME`

- Define o domínio personalizado `31meu.com.br`.
- Indica uso de domínio próprio sobre GitHub Pages.
- Não contém configurações adicionais.

#### Revisar posteriormente

- DNS atual.
- HTTPS.
- domínio canônico (`31meu.com.br` x `www.31meu.com.br`);
- redirects;
- configuração do GitHub Pages.

### `LICENSE`

- Licença MIT válida.
- Permite uso, modificação, distribuição e sublicenciamento.
- Revisar apenas consistência da identificação entre:
  - `Nando-DevOps` no LICENSE;
  - `Luiz Fernando Alves Moreira` no README.

  ### `SECURITY.md`

O arquivo corresponde ao template padrão de Security Policy do GitHub e não
foi adaptado ao projeto.

Problemas identificados:

- versões `5.1.x`, `5.0.x`, `4.0.x` não correspondem ao projeto;
- instruções do próprio template continuam presentes;
- não existe canal real para reporte de vulnerabilidades;
- não define política de resposta;
- não reflete o modelo atual de versionamento.

Classificação: `Possivelmente obsoleto / Template`.

### `README.md`

#### Divergências identificadas

- A árvore de arquivos documentada está desatualizada.
- O README menciona:
  - `pacote-premium.css`
  - `pacote-pocket.css`
  - `pacote-escolar.css`
- A implementação atual utiliza:
  - `pacote-detalhado.css`

#### Documentação possivelmente superestimada ou desatualizada

Algumas funcionalidades descritas devem ser revisadas contra a implementação atual:

- `Lazy loading de imagens`
  - não está aplicado a todas as imagens analisadas.
- `Sanitização de dados`
  - existe `escapeHtml()`, porém ligada ao lightbox aparentemente não utilizado.
- `Skip links`
  - o componente atual possui comportamento e nomenclatura inconsistentes.
- `Código otimizado e limpo`
  - foram encontrados seletores obsoletos, duplicação e workflows legados.
- `Integração com APIs externas`
  - principalmente `wa.me`, Google Maps e Swiper via CDN.
- A classificação `mobile-first` deve ser revisada, pois a maior parte dos estilos
  parte do layout amplo e utiliza media queries `max-width` para adaptação.

## 6. Integrações externas

| Serviço | Onde é usado | Finalidade | Observações |
|---|---|---|---|
| Swiper.js 11 | `galeria.html` | Carrossel da galeria | CSS e JS carregados via jsDelivr CDN. Inicializado em `main.js`. |
| WhatsApp (`wa.me`) | `galeria.html`, páginas de pacotes, `localizacao.html`, `faq.html`, `contato.html` | Conversão, orçamento e contato | Número obtido de `CONFIG.PHONE`; parte dos acionamentos usa `onclick` inline e parte usa `addEventListener`. |
| Google Maps Embed | `localizacao.html` | Exibição do mapa | Carregado em `iframe` com lazy loading. |
| Google Maps Directions | `localizacao.html`, `contato.html` | Abrir rota até o estabelecimento | Links externos com `target="_blank"` e `noopener noreferrer`. |
| Instagram | Todas as páginas analisadas | Rede social | URLs do HTML divergem de `CONFIG.SOCIAL`. |
| Facebook | Todas as páginas analisadas | Rede social | URLs do HTML divergem de `CONFIG.SOCIAL`. |
| TikTok | Apenas `config.js` | Rede social planejada ou legado | Não identificado uso nos HTMLs analisados. |
| Schema.org | `index.html` | Dados estruturados para SEO | Usa `EventVenue`; revisar estrutura e consistência do endereço. |

## 7. Assets

| Diretório / Arquivo | Tipo | Estado | Observações |
|---|---|---|---|
| `assets/img/background/` | Imagens de background | Revisar | Validar uso atual, formato, dimensões e peso. |
| `assets/img/galeria/` | Fotos da galeria | Ativo | 8 imagens JPG identificadas. Avaliar peso, dimensões, formatos modernos e CLS. |
| `assets/img/premium/` | Fotos exclusivas do Pacote Premium | Ativo | 6 imagens JPG identificadas. Avaliar lazy loading, dimensões e compressão. |
| `assets/img/31_meu_logo.png` | Branding | Revisar | Confirmar onde é utilizado. |
| `assets/img/31meu.png` | Branding / imagem institucional | Revisar | Confirmar onde é utilizado. |
| `assets/img/logo_128.png` | Logo | Ativo | Utilizado no header e Open Graph da Home. |
| `assets/img/logo_512.png` | Logo | Revisar | Confirmar uso atual. |
| `assets/video/31meu.mp4` | Vídeo Hero | Ativo | Utilizado na Home. Avaliar peso, codec, poster, preload e impacto no LCP. |

## Diagnóstico da infraestrutura/documentação

A camada de aplicação é relativamente simples e coerente, porém a configuração
do repositório contém artefatos de templates e versões anteriores que não
representam a arquitetura atual.

Principais evidências:

- `.gitignore` voltado para Python;
- workflow de publicação npm sem projeto Node;
- workflow Jekyll sem estrutura Jekyll evidente;
- `SECURITY.md` não personalizado;
- README desatualizado em relação à estrutura real;
- documentação menciona arquivos que não existem mais.

Recomenda-se alinhar documentação e infraestrutura com o projeto real antes de
adicionar novas ferramentas ou migrar a stack.

## 8. Conclusão arquitetural provisória

O 31 Meu utiliza atualmente uma arquitetura multipágina estática baseada em:

- HTML5;
- CSS modular;
- JavaScript Vanilla;
- GitHub Pages;
- integrações externas pontuais.

A aplicação possui baixa complexidade de estado e interação.

Os principais problemas identificados estão relacionados a:

- duplicação de markup;
- conteúdo e dados distribuídos;
- CSS legado ou deslocado;
- configurações de repositório desalinhadas;
- documentação desatualizada;
- acessibilidade de movimento;
- performance de mídia;
- SEO técnico;
- manutenção manual.

Até o momento, não foi identificada necessidade técnica que justifique uma
migração imediata para React/Vite.

A recomendação provisória é manter a stack atual e realizar uma modernização
incremental, priorizando limpeza, consistência, performance, SEO,
acessibilidade e redução de duplicação.

Uma migração de stack só deve ser reconsiderada caso necessidades futuras
introduzam complexidade significativa de estado, componentes dinâmicos,
integrações ou administração de conteúdo.

## 9. Backlog preliminar identificado

- Corrigir HTML inválido e inconsistências semânticas.
- Padronizar `aria-current`.
- Revisar skip-link e botão voltar ao topo.
- Implementar `prefers-reduced-motion`.
- Remover CSS e JavaScript comprovadamente obsoletos.
- Corrigir seletores e typos em `pacote-detalhado.css`.
- Consolidar tokens CSS.
- Centralizar dados institucionais.
- Reduzir handlers `onclick` inline.
- Revisar imagens, vídeo e CLS/LCP.
- Revisar SEO técnico e dados estruturados.
- Revisar workflows e `.gitignore`.
- Atualizar README e SECURITY.md.
- Validar domínio, DNS, HTTPS e canonical.