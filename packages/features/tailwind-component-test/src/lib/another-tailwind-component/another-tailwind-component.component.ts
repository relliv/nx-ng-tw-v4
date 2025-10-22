import { Component } from '@angular/core';
import { TailwindComponentTest } from '../tailwind-component-test/tailwind-component-test';

@Component({
  selector: 'lib-another-tailwind-component',
  templateUrl: './another-tailwind-component.component.html',
  styleUrls: ['./another-tailwind-component.component.css'],
  imports: [TailwindComponentTest]
})
export class AnotherTailwindComponentComponent {
}
