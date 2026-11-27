import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { NAV_ITEMS } from '../../core/data/portfolio.data';
import { ScrollSpy } from '../../core/services/scroll-spy';
import { SectionSkeleton } from '../../shared/ui/section-skeleton/section-skeleton';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Highlights } from './components/highlights/highlights';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, Highlights, About, Projects, Experience, Contact, SectionSkeleton],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly scrollSpy = inject(ScrollSpy);

  constructor() {
    afterNextRender(() => this.scrollSpy.observe(NAV_ITEMS.map((item) => item.id)));
  }
}
