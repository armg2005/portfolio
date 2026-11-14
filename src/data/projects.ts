import type { PortfolioProject } from '../types/portfolio'

export const projects: PortfolioProject[] = [
  {
    id: 'norte-erp',
    title: 'Norte ERP',
    category: 'Arquitetura corporativa & banco de dados',
    description:
      'Sistema empresarial em monolito modular com isolamento multitenant em PostgreSQL. Atuação na modelagem relacional, no versionamento de releases da API e na implementação de módulos CRUD.',
    stack: [
      'C#',
      '.NET',
      'PostgreSQL',
      'Multitenant',
      'Monolito Modular',
      'Git',
    ],
    visual: 'norte-erp',
    githubUrl: null,
  },
  {
    id: 'user-auth-api',
    title: 'API de Cadastro e Autenticação',
    category: 'Segurança & backend Java',
    description:
      'API REST stateless com Spring Boot e Spring Security. Valida tokens JWT em filtro customizado, protege rotas, usa BCrypt para senhas e versiona o schema com Flyway.',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Flyway',
    ],
    visual: 'authentication',
    githubUrl: 'https://github.com/armg2005/Sprin_security',
  },
  {
    id: 'appointment-api',
    title: 'API de Agendamento de Horários',
    category: 'Regras de negócio & arquitetura em camadas',
    description:
      'API REST para gestão de horários entre clientes e profissionais. Valida conflitos de disponibilidade e organiza o código em camadas com entidades, DTOs, serviços e repositórios.',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Data JPA',
      'H2',
      'Lombok',
    ],
    visual: 'scheduler',
    githubUrl: 'https://github.com/armg2005/agendador-horarios',
  },
  {
    id: 'web-systems',
    title: 'Sistemas e APIs Web Full Stack',
    category: 'Desenvolvimento web & integrações',
    description:
      'Conjunto de APIs RESTful e aplicações web acadêmicas e pessoais, aplicando tipagem estática, ORMs modernos e automação.',
    stack: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'Prisma',
      'PHP',
      'Python',
      'MySQL',
    ],
    visual: 'fullstack',
    githubUrl: 'https://github.com/armg2005',
  },
]
