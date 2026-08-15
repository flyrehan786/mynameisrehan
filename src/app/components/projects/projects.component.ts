import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly recent: Project[] = [
    {
      name: 'Mediq',
      description:
        'Description coming soon — a short overview of the product, my role, and the technologies used.',
    },
    {
      name: 'Ignite',
      description:
        'Description coming soon — a short overview of the product, my role, and the technologies used.',
    },
    {
      name: 'Omnify',
      description:
        'Description coming soon — a short overview of the product, my role, and the technologies used.',
    },
    {
      name: 'RescueFurWorld',
      description:
        'Description coming soon — a short overview of the product, my role, and the technologies used.',
    },
  ];
}
