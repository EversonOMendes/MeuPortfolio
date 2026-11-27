export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface Resume {
  readonly pdf: string;
}

export interface SocialLinks {
  readonly linkedin: string;
  readonly github: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly phone: string;
}

export interface Tech {
  readonly name: string;
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
  readonly name: string;
  readonly fullName: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly logo: string;
}

export interface ExperienceRole {
  readonly title: string;
  readonly start: string;
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
  readonly roles: readonly ExperienceRole[];
}

export interface Certification {
  readonly name: string;
  readonly issuer?: string;
  readonly date?: string;
  readonly url?: string;
  readonly inProgress?: boolean;
}

export interface Education {
  readonly school: string;
  readonly course: string;
  readonly period: string;
}
