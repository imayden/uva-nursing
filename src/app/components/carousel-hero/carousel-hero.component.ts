import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel-hero',
  templateUrl: './carousel-hero.component.html',
  styleUrl: './carousel-hero.component.scss'
})
export class CarouselHeroComponent implements OnInit {

  @Input() carouselItems: any[] = []; // reveice data from parent component
  currentSlideIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  navigateToLink(link: string): void {
    this.router.navigate([link]);
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselItems.length;
    }
  
    prevSlide() {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    }
  
    isActiveSlide(index: number): boolean {
      return this.currentSlideIndex === index;
    }

}
