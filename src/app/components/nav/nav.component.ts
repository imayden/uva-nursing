import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  isSticky: boolean = false; // For background transparency
  isHidden: boolean = false; // For hiding nav bar or not
  isTop: boolean = true; // Check if page is at top
  isMobileMenuOpen: boolean = false; // Check if mobile menu opened
  isSearchOpen: boolean = false; // Check if search opened
  lastScrollTop: number = 0; // Save last scrolling location
  screenWidth: number = 0; // Save current screen width
  openDropdown: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  // Listen to scrolling event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      this.isTop = scrollTop === 0;
      this.isSticky = scrollTop > 0;

      if (scrollTop > this.lastScrollTop && scrollTop > 100) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }

      this.lastScrollTop = scrollTop;
    }
  }
  
  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(menu: string) {
    if (this.openDropdown === menu) {
      this.openDropdown = null;
    } else {
      this.openDropdown = menu;
    }
  }

}
