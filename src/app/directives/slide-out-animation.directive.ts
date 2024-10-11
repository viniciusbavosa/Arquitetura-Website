import { Directive, ElementRef, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { intersectionObserverOptions, slideOutKeyframe, slideOutTiming } from './@types/slide-out-animation';


@Directive({
  selector: '[appSlideOutAnimation]',
  standalone: true
})
export class SlideOutAnimationDirective {

private hasBeenAnimated: boolean = false; // This state ensures that an element is only animated once

  slideOutKeys: slideOutKeyframe = [
    { transform: "translateX(0)" },
    { transform: "translateX(-100%)" }
  ];

  slideOutTiming: slideOutTiming = {
    duration: 900,
    fill: 'forwards',
    easing: 'ease-out'
  };

  private elRef: ElementRef = inject(ElementRef);

  private platformId = inject(PLATFORM_ID);
  
  private callbackObserver: IntersectionObserverCallback = (entries) => {
    entries.forEach( async (entry) => {
      if (this.hasBeenAnimated) return;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {

        const animation: Animation = this.elRef.nativeElement.animate(this.slideOutKeys, this.slideOutTiming);

       await animation.finished
       .then(() => {
         this.hasBeenAnimated = true;
         animation.commitStyles()
         animation.cancel();
       })
      }
    });
  };

  private options: intersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9
  }

  private observer!: IntersectionObserver;

  constructor() { };

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { // Verifies if it's running on client
      this.observer = new IntersectionObserver(this.callbackObserver, this.options);
      this.observer.observe(this.elRef.nativeElement);
    }
  };
}
