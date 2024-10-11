import { CommonModule } from '@angular/common';
import { Component, inject, Input, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrentRouteService } from '../../services/current-route.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  routeService: CurrentRouteService = inject(CurrentRouteService);
  url: WritableSignal<string> = this.routeService.currentUrl;
  
  @Input() sectionTitle!: string;
}
