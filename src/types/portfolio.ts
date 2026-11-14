export type ProjectVisualKind =
  | 'norte-erp'
  | 'authentication'
  | 'scheduler'
  | 'fullstack'

export interface PortfolioProject {
  id: string
  title: string
  category: string
  description: string
  stack: string[]
  visual: ProjectVisualKind
  githubUrl: string | null
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
  emphasis?: boolean
}

export type TimelineKind = 'experience' | 'education'

export interface TimelineEntry {
  id: string
  kind: TimelineKind
  organization: string
  role: string
  period: string
  description: string
  highlights: string[]
}
