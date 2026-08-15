import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-spice',
  standalone: true,
  imports: [NgClass, NgIf, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spice.component.html',
  styleUrls: ['./spice.component.scss'],
})
export class SpiceComponent {
  @Input() variant: 'primary' | 'secondary' | 'dark' = 'primary';
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() big = false;
}
