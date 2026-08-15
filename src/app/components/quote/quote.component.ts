import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {}
