import {
  Component,
  Input
} from '@angular/core';

/**
  * @PriceDisplay: A component to show the price of a
  * Product
  */
@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html'
})
export class PriceDisplayComponent {
  @Input() price: number;
}