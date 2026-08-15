import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface Role {
  period: string;
  company: string;
  role: string;
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly roles: Role[] = [
    {
      period: '2023 — Now',
      company: 'CienTech',
      role: 'Application Designer',
      current: true,
    },
    {
      period: '2020 — 2023',
      company: 'Cytech Solutions',
      role: 'Full-Stack Developer',
    },
    {
      period: '2019 — 2020',
      company: 'MaxTech',
      role: 'Back-End Engineer',
    },
    {
      period: '2018 — 2019',
      company: 'Cien Solutions',
      role: 'Full-Stack Developer',
    },
  ];
}
