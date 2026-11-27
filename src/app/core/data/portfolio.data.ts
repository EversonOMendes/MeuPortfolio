import {
  Certification,
  Company,
  Education,
  Experience,
  NavItem,
  Project,
  Resume,
  SocialLinks,
  Tech,
} from '../../shared/models/portfolio.model';

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
];

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/eversonmendes301',
  github: 'https://github.com/eversonomendes',
  email: 'mailto:eversonmendes301@gmail.com',
  whatsapp:
    'https://wa.me/5543984458966?text=' +
    encodeURIComponent('Olá, Everson! Vi seu portfólio e gostaria de conversar.'),
  phone: '+55 (43) 9 8445-8966',
};

export const RESUME: Resume = {
  pdf: 'assets/curriculo/everson-mendes-curriculo.pdf',
};

export const TECHS: readonly Tech[] = [
  { name: 'C#', icon: 'devicon-csharp-plain colored' },
  { name: '.NET', icon: 'devicon-dotnetcore-plain colored' },
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-original colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
];

export const COMPANY: Company = {
  name: 'Msul Sistemas',
  fullName: 'Mendes Sul Sistemas',
  tagline: 'Minha empresa',
  description:
    'Soluções inteligentes para atendimento via WhatsApp e gestão empresarial: multiatendimento e automação no WhatsApp, gestão, PDV, loja online e emissão de notas fiscais, tudo em um só lugar.',
  url: 'https://www.msulsistemas.com.br/',
  logo: 'assets/projects/msul.webp',
};

export const PROJECTS: readonly Project[] = [
  {
    id: 'smartchat',
    name: 'SmartChat',
    tagline: 'Atendimento inteligente via WhatsApp com IA.',
    description:
      'Sistema de atendimento via WhatsApp com multiatendentes, automação, filas e integração com a API Oficial da Meta. Centralize todas as conversas em um único lugar.',
    features: ['Multiatendentes', 'Automação e IA', 'Filas de atendimento', 'API Oficial da Meta'],
    url: 'https://www.msulsistemas.com.br/smartchat',
    logo: 'assets/projects/smartchat.webp',
  },
  {
    id: 'smarterp',
    name: 'SmartERP',
    tagline: 'Gestão completa com emissão de notas fiscais.',
    description:
      'Sistema ERP completo com PDV, controle de estoque, gestão de vendas e emissão de notas fiscais eletrônicas (NF-e). Ideal para pequenas e médias empresas.',
    features: ['PDV', 'Controle de estoque', 'Gestão de vendas', 'Emissão de NF-e'],
    url: 'https://www.msulsistemas.com.br/smarterp',
    logo: 'assets/projects/smarterp.webp',
  },
  {
    id: 'smartshop',
    name: 'SmartShop',
    tagline: 'Loja e catálogo online com link próprio.',
    description:
      'Loja e catálogo online com link próprio, carrinho, pagamento por Pix, cartão e boleto, etapas de pedido e aviso pelo WhatsApp integrado ao SmartChat.',
    features: [
      'Link próprio',
      'Carrinho de compras',
      'Pix, cartão e boleto',
      'Etapas de pedido',
      'Aviso pelo WhatsApp',
    ],
    url: 'https://www.msulsistemas.com.br/smartshop',
    logo: 'assets/projects/smartshop.webp',
  },
];

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Msul Sistemas',
    companyFullName: 'Mendes Sul Sistemas',
    logo: 'assets/projects/msul.webp',
    url: 'https://www.msulsistemas.com.br/',
    roles: [
      {
        title: 'Fundador · Full Stack Developer',
        start: '2025-06',
        summary:
          'Concepção, desenvolvimento e operação de uma plataforma SaaS com três produtos (SmartChat, SmartERP e SmartShop), do produto à infraestrutura.',
        highlights: [
          'API em ASP.NET Core 9 com Clean Architecture (Domain, Application, Infrastructure e Api) e EF Core 9 sobre MySQL.',
          'Arquitetura multi-tenant com estratégias por produto (SmartChat e SmartShop).',
          'Atendimento via API Oficial do WhatsApp (Meta) com automações e respostas assistidas por IA (Claude, da Anthropic).',
          'Pagamentos via Pix com notificação em tempo real (SignalR) e jobs agendados para cobranças, renovação de planos e backups.',
          'Segurança com autenticação JWT assinada por chaves RSA, verificação em duas etapas (2FA) e rate limiting.',
          'Testes automatizados com xUnit e Moq, CI no GitHub Actions e deploy em servidor Linux, com mais de 760 commits desde o início.',
        ],
        stack: [
          'C#',
          '.NET 9',
          'ASP.NET Core',
          'EF Core',
          'MySQL',
          'Angular',
          'SignalR',
          'IA (Claude)',
          'GitHub Actions',
          'Linux',
        ],
      },
    ],
  },
  {
    company: 'InterOp',
    url: 'https://interop.com.br/',
    location: 'Porto Alegre, RS',
    workMode: 'Híbrido',
    roles: [
      {
        title: 'Full Stack Developer · Sênior',
        start: '2023-12',
        summary:
          'Liderança técnica de projetos desafiadores, orientando o time e contribuindo para a evolução dos sistemas da empresa.',
        highlights: [
          'Liderança técnica de projetos e orientação de desenvolvedores da equipe.',
          'Desenvolvimento full stack com C# e ASP.NET MVC no back-end e Angular/AngularJS com Angular Material no front-end.',
          'Modelagem de dados, consultas e manutenção em Microsoft SQL Server.',
          'Pipelines de integração e entrega contínuas (CI/CD) no GitLab.',
        ],
        stack: [
          'C#',
          'ASP.NET MVC',
          'Angular',
          'AngularJS',
          'Angular Material',
          'SQL Server',
          'GitLab CI/CD',
        ],
      },
      {
        title: 'Full Stack Developer · Pleno',
        start: '2023-01',
        end: '2023-12',
        summary:
          'Desenvolvimento de funcionalidades web de ponta a ponta, do banco de dados à interface.',
        highlights: [
          'Implementação de novas funcionalidades em C# com front-end em JavaScript, HTML5 e CSS.',
          'Construção de interfaces com AngularJS e Angular Material.',
          'Consultas e manutenção de dados em SQL.',
          'Promovido a sênior ao fim do período.',
        ],
        stack: ['C#', 'JavaScript', 'HTML5', 'CSS', 'AngularJS', 'Angular Material', 'SQL'],
      },
      {
        title: 'Analista de Suporte',
        start: '2022-11',
        end: '2023-01',
        summary:
          'Porta de entrada na InterOp: suporte aos sistemas dos clientes e criação de ferramentas internas.',
        highlights: [
          'Desenvolvimento de uma ferramenta para suporte e atendimento ao cliente.',
          'Monitoramento de servidores e cadastro de usuários no Active Directory.',
          'Suporte aos sistemas dos clientes.',
          'Promovido a desenvolvedor pleno.',
        ],
        stack: ['Active Directory', 'Monitoramento', 'Suporte'],
      },
    ],
  },
];

export const EDUCATION: readonly Education[] = [
  {
    school: 'Universidade Estácio',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: '2023 - 2025',
  },
  { school: 'Senac - RS', course: 'Técnico em Informática', period: '2014 - 2016' },
];

export const CERTIFICATIONS: readonly Certification[] = [
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp e Microsoft',
    date: 'Set 2026',
    url: 'https://www.freecodecamp.org/certification/fcc956638ed-74a0-422d-b89d-98482bd9ad2a/foundational-c-sharp-with-microsoft',
  },
  { name: 'Junior Angular Developer', issuer: 'Certificates.dev', inProgress: true },
];
