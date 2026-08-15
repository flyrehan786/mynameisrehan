import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      title: 'Languages',
      items: ['JavaScript', 'C#'],
    },
    {
      title: 'Front-end',
      items: ['Angular', 'React', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS'],
    },
    {
      title: 'Back-end',
      items: ['Node.js', 'NestJS', 'ASP.NET MVC'],
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'LowDB'],
    },
    {
      title: 'Platform',
      items: ['Linux'],
    },
    {
      title: 'Software Practices',
      items: ['TDD', 'DDD', 'Clean Coding'],
    },
    {
      title: 'SCM',
      items: ['Git'],
    },
    {
      title: 'UX / UI Design',
      items: ['Flat Design', 'Usability Principles', 'Colors'],
    },
    {
      title: 'Other',
      items: ['Pragmatic', 'Independent', 'Fluent in English'],
    },
  ];
}
