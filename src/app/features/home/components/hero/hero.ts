import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { Skeleton } from '../../../../shared/ui/skeleton/skeleton';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { ScrollTo } from '../../../../shared/directives/scroll-to';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Button, Icon, Skeleton, SectionHeader, ScrollTo],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly photoLoaded = signal(false);
}
