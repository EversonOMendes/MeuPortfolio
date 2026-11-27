# Everson Mendes | Portfólio

Portfólio pessoal de desenvolvedor Full Stack, com meus projetos na Msul Sistemas (SmartChat, SmartERP e SmartShop), minha experiência profissional e meu currículo.

**Acesse:** https://eversonomendes.github.io/MeuPortfolio/

## Design com IA: Figma + Claude Opus 5.5

O UI/UX deste portfólio foi gerado no **Figma com o Claude Opus 5.5**, da Anthropic. A IA acelerou a exploração visual, mas a direção e as decisões foram minhas:

- **Direção criativa:** defini a identidade (tema escuro com laranja, faixas diagonais, tipografia Outfit + Figtree), a hierarquia das seções e a mensagem principal: _"Transformando ideias em soluções reais."_
- **Prompts com contexto:** em vez de pedir "um portfólio bonito", entreguei ao modelo o público (recrutadores e clientes), o conteúdo real (produtos, cargos e stack) e as restrições (leitura rápida, foco em conversão para contato).
- **Curadoria e iteração:** avaliei as variações geradas, descartei o que era genérico e refinei espaçamentos, contraste e chamadas para ação até o layout final.
- **Do design ao código:** transformei o resultado em um design system próprio no Angular: tokens de cor, espaçamento e tipografia em CSS (`src/styles.css`) e componentes reutilizáveis em `shared/ui` (botão, ícones, skeletons, cabeçalho de seção, modal).
- **Validação humana:** revisei acessibilidade (navegação por teclado, foco, `prefers-reduced-motion`, contraste), responsividade e performance antes de publicar.

Minha visão: modelos de IA são uma ferramenta de produtividade poderosa quando quem conduz sabe o que pedir, como avaliar o resultado e onde aplicar engenharia. É assim que uso IA também nos produtos da Msul Sistemas, onde o SmartChat responde clientes no WhatsApp com apoio do Claude.

## Stack

- **Angular 21**: componentes standalone, signals (`signal`, `computed`, `input`, `model`), zoneless e `ChangeDetectionStrategy.OnPush`
- **Control flow** moderno (`@if`, `@for`, `@switch`, `@defer`)
- **TypeScript 5.9**
- **Vitest** + jsdom para testes unitários
- **Prettier** para formatação
- **GitHub Pages** para hospedagem

## Arquitetura

Estrutura no padrão da comunidade, separando o que é global, o que é de cada funcionalidade e o que é reutilizável:

```
src/app/
├── core/          # dados, serviços e layout global (header, footer)
├── features/
│   └── home/      # página principal: seções e modais da feature
└── shared/        # UI reutilizável: componentes, modais, diretivas, pipes, modelos e utils
```

## Performance e acessibilidade

- Seções abaixo da dobra carregadas sob demanda com `@defer`, cada uma em um chunk próprio
- Skeletons no lugar do conteúdo enquanto carrega, sem saltos de layout
- Imagem principal otimizada com `NgOptimizedImage` e logos com `loading="lazy"`
- Modal com `<dialog>` nativo: foco, Esc e clique fora funcionando sem bibliotecas
- Link "pular para o conteúdo", navegação por teclado e respeito a `prefers-reduced-motion`

## Currículo

O currículo em PDF fica em `public/assets/curriculo/` e pode ser baixado nas seções **Sobre** e **Contato** do site. As fontes HTML usadas para gerar o PDF ficam em `design/curriculo/`.

## Rodando localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm start          # http://localhost:4200
npm test           # testes unitários
npm run build:pages  # build de produção na pasta docs/ (GitHub Pages)
```

## Contato

- LinkedIn: https://www.linkedin.com/in/eversonmendes301
- GitHub: https://github.com/eversonomendes
- E-mail: eversonmendes301@gmail.com
