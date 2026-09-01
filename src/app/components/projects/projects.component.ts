import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';
import { PlayInViewDirective } from '../../play-in-view.directive';

interface Project {
  name: string;
  description: string;
  video?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective, PlayInViewDirective],
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
      name: 'Skolify ',
      description:
        'A unified school management SaaS that transforms complex campus workflows into an effortless, single-screen experience. It merges human resources, financial tracking, and academics — from automated visual timetable scheduling with conflict detection to robust employee records and secure payroll processing. It centralizes student life through dynamic student profiles, rigorous exam grading with instant report card generation, and an efficient library management system for book tracking. Admins can seamlessly issue official certifications, process fee billing and installment tracking, and operate with confidence knowing data privacy is guaranteed through state-of-the-art, multi-tenant security.',
      video: 'assets/skolify.mp4',
    },
    {
      name: 'Omnify',
      description:
        'Description coming soon — a short overview of the product, my role, and the technologies used.',
    },
    {
      name: 'RescueFurWorld',
      description:
        'Every rescue has a story. RescueFurWorld gives rescued cats a second chance at life — one journey at a time. The platform documents the complete arc of each cat, from the moment they are found, through medical care and recovery, to the day they find a safe and loving forever home. Built around compassion and care, it shares real stories of struggle, survival, and hope, and supports the people who dedicate their time to helping them. Small acts of kindness. Big second chances.',
      video: 'assets/rescuefurworld.mp4',
    },
  ];
}
