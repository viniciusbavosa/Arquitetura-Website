import { Component, inject, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { fader } from './route-animations';
import { CurrentRouteService } from './services/current-route.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    fader
  ],
})
export class AppComponent {
  private routeService = inject(CurrentRouteService);
  protected currentUrl: WritableSignal<string> = this.routeService.currentUrl; 

  constructor() {};

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}