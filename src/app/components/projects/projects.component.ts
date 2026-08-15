import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface Project {
  name: string;
  description: string;
  video?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly recent: Project[] = [
    {
      name: 'Mediq',
      description:
        'Smart, cloud-based medical laboratory management — a modern SaaS platform that streamlines lab operations from patient registration to final report delivery. Labs can register and manage patients, create and manage tests, track requests and results, and generate reports from one intuitive place. As a cloud-based solution, it removes the need for complex on-premise infrastructure, scales with the lab, and can be securely accessed from anywhere. Manage Patients. Simplify Tests. Deliver Reports.',
      video: 'assets/mediq.mp4',
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
