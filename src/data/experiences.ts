import type { TimelineEntry } from '../types/portfolio'

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'sifsoft-assessor',
    kind: 'experience',
    organization: 'SIFSOFT Junior · IFNMG',
    role: 'Assessor de Projetos',
    period: 'Dez. 2025 — Atual',
    description:
      'Atuação em projetos e sistemas internos da Empresa Júnior do curso de Sistemas de Informação.',
    highlights: [
      'Versionamento de APIs, com histórico de releases e compatibilidade entre versões.',
      'Participação na modelagem relacional do Norte ERP em PostgreSQL com arquitetura multitenant.',
      'Desenvolvimento e manutenção de CRUDs e regras de negócio em C#/.NET, em monolito modular.',
      'Colaboração em equipe ágil com Git, GitHub, Scrum e Kanban.',
    ],
  },
  {
    id: 'sifsoft-trainee',
    kind: 'experience',
    organization: 'SIFSOFT Junior · IFNMG',
    role: 'Trainee — Rotação por Setores',
    period: 'Out. 2025 — Dez. 2025',
    description:
      'Experiência no setor financeiro, estruturando informações e apoiando a análise de dados.',
    highlights: [
      'Extração e estruturação de dados de documentos PDF em planilhas.',
      'Automação de rotinas de atualização e criação de dashboards analíticos no Power BI.',
    ],
  },
  {
    id: 'ifnmg-degree',
    kind: 'education',
    organization: 'Instituto Federal do Norte de Minas Gerais',
    role: 'Bacharelado em Sistemas de Informação',
    period: 'Mar. 2024 — Dez. 2027',
    description: 'IFNMG — Campus Salinas · 5º período',
    highlights: [],
  },
]
