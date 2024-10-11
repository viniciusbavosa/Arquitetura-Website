import { Injectable, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentRouteService {
  currentUrl: WritableSignal<string> = signal('');

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.currentUrl.set(event.urlAfterRedirects)
    });
  };
}
