import { Component, signal } from '@angular/core';
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
  protected isDarkMode = signal<boolean>(false);

  constructor() {
    // Check if dark mode is already enabled on init
    this.isDarkMode.set(document.documentElement.classList.contains('dark'));
  }

  toggleDarkMode() {
    this.isDarkMode.update(value => !value);
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
