import { Component, Inject, HostListener, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  carouselItems = [
    // 1
    {
      title: 'Top-ranked programs that suit nurses at every professional stage',
      buttonText: 'Admissions Zoom',
      buttonLink: 'https://nursing.virginia.edu/admissions/tour_infosessions/',
      backgroundImage: 'https://nursing.virginia.edu/media/Shaolin_2200x1238px.jpg',
      textPosition: { top: '45%', left: '45%' },
      textPositionMedium: { top: '27%', left: '40%' },
      textPositionSmall: { top: '20%', left: '35%' },
      textPositionExSmall: { top: '10%', left: '25%', right: '0%', bottom: '10%' }
    },
    // 2
    {
      title: 'Novel post-doc fellowships for emerging nurse scientists',
      buttonText: 'Work With Us',
      buttonLink: 'https://nursing.virginia.edu/employment/',
      backgroundImage: 'https://nursing.virginia.edu/media/Maria-McDonald_2_2200x1238.jpg',
      textPosition: { top: '45%', left: '50%' },
      textPositionMedium: { top: '27%', left: '40%' },
      textPositionSmall: { top: '20%', left: '35%' },
      textPositionExSmall: { top: '13%', left: '20%', right: '0%', bottom: '10%' }
    },
    // 3
    {
      title: 'A new, more efficient pathway to the highest clinical degree',
      buttonText: 'BSN to DNP',
      buttonLink: 'https://nursing.virginia.edu/academics/dnp/',
      backgroundImage: 'https://nursing.virginia.edu/media/EJ-Rauch-Homepage-Photo_2200x1650.jpg',
      textPosition: { top: '45%', left: '5%' },
      textPositionMedium: { top: '27%', left: '0%', width: '40rem' },
      textPositionSmall: { top: '25%', left: '-5%', width: '30rem' },
      textPositionExSmall: { top: '10%', left: '-15%', right: '0%', bottom: '0%', width: '30rem' }
    },
    // 4
    {
      title: 'An affordable, part-time, mostly online program',
      buttonText: 'RN to BSN',
      buttonLink: 'https://nursing.virginia.edu/academics/bsn/rn-to-bsn-online-in-person/',
      backgroundImage: 'https://nursing.virginia.edu/media/Melissa-Neck-Homepage-Photo_2200x1238.jpg',
      textPosition: { top: '45%', left: '50%' },
      textPositionMedium: { top: '27%', left: '40%' },
      textPositionSmall: { top: '20%', left: '35%' },
      textPositionExSmall: { top: '15%', left: '20%', right: '0%', bottom: '10%' }
    }
  ];

  constPrograms = [
    {
      img: 'https://nursing.virginia.edu/media/CNL-header-desktop.jpg',
      link: 'https://nursing.virginia.edu/academics/msn/cnl/',
      title: 'Doctor of Philosophy in Nursing',
      text: 'Direct-entry CNL or RN to CNL'
    },
    {
      img: 'https://nursing.virginia.edu/media/DNP-header_desktop.jpg',
      link: 'https://nursing.virginia.edu/academics/dnp/',
      title: 'Doctor of Nursing Practice',
      text: 'BSN to DNP or MSN to DNP'
    },
    {
      img: 'https://nursing.virginia.edu/media/phd-header-yeonsu-desktop.jpg',
      link: 'https://nursing.virginia.edu/academics/phd-in-nursing/',
      title: 'Doctor of Philosophy in Nursing',
      text: 'PhD'
    },

  ]

  constAdmissionRooms = [
    {
      img: 'https://nursing.virginia.edu/media/APRN-Info-Session-Graphics-09-18-24.png',
      link: 'https://applycentral.virginia.edu/register/?id=e6914c55-8a59-46b9-a970-6145da46b918',
    },
    {
      img: 'https://nursing.virginia.edu/media/PhD-Info-Session-Graphics_Rectangle_Sept-18.png',
      link: 'https://applycentral.virginia.edu/register/?id=3cc7b5af-a0db-4813-9630-5f592bc43004',
    },
    {
      img: 'https://nursing.virginia.edu/media/What-Nursing-Program-is-Right-for-Me_Info-Session-09-25-24.png',
      link: 'https://applycentral.virginia.edu/register/?id=28a908a5-280e-4b3e-af82-e8bbf8cff0f9',
    },
  ]

  scholars = [
    {
      img: 'https://nursing.virginia.edu/media/Ishan-Williams_700x400.jpg',
      link: 'https://nursing.virginia.edu/news/williams-shannon-fellow/',
      name: 'Ishan Williams',
      title: 'PhD, FGSA',
      disc: 'Social and behavioral scientist Ishan Williams, PhD, FGSA, part of a $25M "Bridge to AI" grant that aims to ensure AI data is equitable and trustworthy, studies aging, dementia, and support systems for family caregivers. '
    },
    {
      img: 'https://nursing.virginia.edu/media/Kathryn-Laughon_700x400.jpg',
      link: 'https://nursing.virginia.edu/news/kathryn-laughon-emergency-forensic-center/',
      name: 'Kathryn Laughon',
      title: 'PhD, RN, FAAN, SANE',
      disc: "PhD program director Kathryn Laughon, PhD, RN, FAAN, SANE, is a forensic nurse and violence scholar who directs UVA Health's newest emergency arm: an emergency forensic center for victims of violence across the lifespan."

    },
    {
      img: 'https://nursing.virginia.edu/media/Crystal-Chu_700x400.jpg',
      link: 'https://nursing.virginia.edu/news/crystal-chu-post-doctoral-fellow/',
      name: 'Crystal Chu',
      title: 'PhD, RN',
      disc: 'American Cancer Society grantee and post-doctoral fellow Crystal Chu, PhD, RN, is expanding the decision-tool she developed for patients with breast cancer in a single breast to other healthcare decision points as well. '
    },
  ]

  screenWidth: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      this.updateTextPositions();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.updateTextPositions(); // Change position while screen resized
  }

  updateTextPositions() {
    // Change textPosition by screen width
    this.carouselItems.forEach(item => {
      if (this.screenWidth <= 600) {
        item.textPosition = item.textPositionExSmall; // Small
      } else if (this.screenWidth <= 768) {
        item.textPosition = item.textPositionSmall; // Medium
      } else if (this.screenWidth <= 991) {
        item.textPosition = item.textPositionMedium; // Medium
      } else {
        item.textPosition = item.textPosition; // Default 
      }
    });
  }
}
