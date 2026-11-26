export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface SocialLinks {
  readonly linkedin: string;
  readonly github: string;
  readonly email: string;
  readonly whatsapp: string;
  /** Número formatado para exibição. */
  readonly phone: string;
}

export interface Tech {
  readonly name: string;
  /** Classe do Devicon (https://devicon.dev). */
  readonly icon: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly url: string;
  readonly logo: string;
}

export interface Company {
  /** Nome da marca. */
  readonly name: string;
  /** Nome completo da empresa. */
  readonly fullName: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly logo: string;
}

export interface ExperienceRole {
  readonly title: string;
  /** Início no formato `YYYY-MM`. */
  readonly start: string;
  /** Fim no formato `YYYY-MM`; ausente = cargo atual. */
  readonly end?: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}

export interface Experience {
  readonly company: string;
  readonly companyFullName?: string;
  readonly logo?: string;
  readonly location?: string;
  readonly workMode?: string;
  readonly url?: string;
  /** Cargos do mais recente para o mais antigo. */
  readonly roles: readonly ExperienceRole[];
}

export interface Education {
  readonly school: string;
  readonly course: string;
  readonly period: string;
}
