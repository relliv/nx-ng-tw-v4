import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TailwindComponentTest, AnotherTailwindComponentComponent } from '@nx-ng-tw-v4/tailwind-component-test';

@Component({
  imports:  [RouterModule, TailwindComponentTest, AnotherTailwindComponentComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-app';
}
