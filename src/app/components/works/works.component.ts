import { Component, inject, Input, WritableSignal } from '@angular/core';
import { CommonModule, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { SlideOutAnimationDirective } from '../../directives/slide-out-animation.directive';

interface Project {
  class: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    CommonModule, 
    SlideOutAnimationDirective, 
    NgTemplateOutlet,
    NgOptimizedImage,
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  protected srcImgs: string[] = [
    "assets/hero/animation-imgs/house2/house2-image1-640.jpg", 
    "assets/hero/animation-imgs/house2/house2-image1-640.jpg", 
    "assets/hero/animation-imgs/house2/house2-image1-640.jpg", 
    "assets/hero/animation-imgs/house2/house2-image1-640.jpg", 
    "assets/hero/animation-imgs/house2/house2-image1-640.jpg", 
    "assets/hero/animation-imgs/house2/house2-image1-640.jpg" ];

  altTextImgs: string[] = [
    "Lorem, ipsum.", 
    "Lorem, ipsum.", 
    "Lorem, ipsum.", 
    "Lorem, ipsum.", 
    "Lorem, ipsum.", 
    "Lorem, ipsum."];

  classCount: string[] = ["one", "two", "three", "four", "five", "six"];

  protected projects: Project[] = this.classCount.map((count, index) => ({
    class: `${count}`,
    src: `${this.srcImgs[index]}`,
    alt: this.altTextImgs[index],
  }));

  constructor() {}
}
