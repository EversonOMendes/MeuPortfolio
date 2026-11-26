import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project } from '../../../../shared/models/portfolio.model';
import { ProjectDetailsModal } from './project-details-modal';

const PROJECT: Project = {
  id: 'smartchat',
  name: 'SmartChat',
  tagline: 'Atendimento via WhatsApp.',
  description: 'Descrição do projeto.',
  features: ['Multiatendentes', 'Filas'],
  url: 'https://www.msulsistemas.com.br/smartchat',
  logo: 'assets/projects/smartchat.webp',
};

describe('ProjectDetailsModal', () => {
  let component: ProjectDetailsModal;
  let fixture: ComponentFixture<ProjectDetailsModal>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsModal);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fica fechado sem projeto', () => {
    expect(el.querySelector('.modal__panel')).toBeNull();
  });

  it('exibe os detalhes do projeto selecionado', async () => {
    fixture.componentRef.setInput('project', PROJECT);
    await fixture.whenStable();

    expect(el.querySelector('.modal__title')?.textContent).toContain('SmartChat');
    expect(el.querySelectorAll('.details__features li').length).toBe(2);
    expect(el.querySelector<HTMLAnchorElement>('[modalFooter]')?.href).toBe(PROJECT.url);
  });

  it('limpa o projeto ao fechar', async () => {
    fixture.componentRef.setInput('project', PROJECT);
    await fixture.whenStable();

    el.querySelector<HTMLButtonElement>('.modal__close')!.click();
    await fixture.whenStable();

    expect(component.project()).toBeNull();
    expect(el.querySelector('.modal__panel')).toBeNull();
  });
});
