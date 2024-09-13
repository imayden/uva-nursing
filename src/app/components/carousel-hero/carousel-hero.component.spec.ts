import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHeroComponent } from './carousel-hero.component';

describe('CarouselHeroComponent', () => {
  let component: CarouselHeroComponent;
  let fixture: ComponentFixture<CarouselHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
