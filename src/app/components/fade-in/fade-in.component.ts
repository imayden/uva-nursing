// import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { isPlatformBrowser } from '@angular/common';  // 导入判断方法

// @Component({
//   selector: 'app-fade-in',
//   template: `
//     <div [@fadeInAnimation]="state" class="fade-in-container">
//       <ng-content></ng-content>
//     </div>
//   `,
//   styles: [`
//     .fade-in-container {
//       display: inline-block;
//       width: 100%;
//     }
//   `],
//   animations: [
//     trigger('fadeInAnimation', [
//       state('in', style({ opacity: 1 })),
//       state('out', style({ opacity: 0 })),
//       transition('out => in', [
//         style({ opacity: 0 }),
//         animate('0.5s ease-in')
//       ])
//     ])
//   ]
// })
// export class FadeInComponent implements OnInit {
//   state = 'out';  // 初始状态设为 'out'，即透明

//   constructor(
//     private el: ElementRef,
//     @Inject(PLATFORM_ID) private platformId: Object  // 注入平台 ID
//   ) {}

//   ngOnInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       // 只在浏览器中调用 IntersectionObserver
//       this.observeElement();
//     }
//   }

//   observeElement(): void {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // 当元素进入视口时，更新状态，触发动画
//           this.state = 'in';
//           observer.unobserve(this.el.nativeElement); // 完成后停止观察
//         }
//       });
//     }, {
//       threshold: 0.1 // 当 10% 元素进入视口时触发
//     });

//     observer.observe(this.el.nativeElement); // 监听当前元素
//   }
// }

import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';  // 导入判断方法

@Component({
  selector: 'app-fade-in',
  template: `
    <div [@fadeInAnimation]="state" class="fade-in-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .fade-in-container {
      display: inline-block;
      width: 100%;
    }
  `],
  animations: [
    trigger('fadeInAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })), // 目标状态: 完全显示并且没有位移
      state('out', style({ opacity: 0, transform: 'translateY(20px)' })), // 初始状态: 向下偏移并且透明
      transition('out => in', [
        animate('0.5s ease-in')  // 动画: 0.5秒，透明度从0到1，位移从20px到0
      ])
    ])
  ]
})
export class FadeInComponent implements OnInit {
  state = 'out';  // 初始状态为 'out'

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object  // 注入平台 ID
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // 只在浏览器环境中执行 IntersectionObserver
      this.observeElement();
    }
  }

  observeElement(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 当元素进入视口时，更新状态，触发动画
          this.state = 'in';
          observer.unobserve(this.el.nativeElement); // 完成后停止观察
        }
      });
    }, {
      threshold: 0.1 // 10% 的元素进入视口时触发动画
    });

    observer.observe(this.el.nativeElement); // 监听当前元素
  }
}
