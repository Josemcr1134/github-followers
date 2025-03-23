import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>🔥 Followers App is Running! 🔥</h1>
  <router-outlet></router-outlet>
  `,
  imports:[RouterModule]
})
export class AppComponent {
  title = 'followers';
  constructor() {
    console.log('🔥 AppComponent inicializado correctamente');
  }
}
