import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface Degree {
  year: string;
  title: string;
  school: string;
  location: string;
  current?: boolean;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgIf, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  readonly degrees: Degree[] = [
    {
      year: '2018',
      title: 'Bachelor of Science in Computer Science',
      school: 'University of Malakand',
      location: 'Malakand, KPK',
    },
    {
      year: '2014',
      title: 'Faculty of Science in Intermediate Education',
      school: 'F.G Inter College',
      location: 'Malakand, KPK',
    },
  ];
}
