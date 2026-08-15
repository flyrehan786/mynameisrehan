import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'video[appPlayInView]',
  standalone: true,
})
export class PlayInViewDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLVideoElement>,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const video = this.el.nativeElement;
    // Ensure paused initially; browsers may otherwise autoplay eagerly.
    try { video.pause(); } catch {}

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const v = entry.target as HTMLVideoElement;
            if (entry.isIntersecting) {
              const p = v.play();
              if (p && typeof p.catch === 'function') p.catch(() => {});
            } else {
              v.pause();
            }
          }
        },
        { threshold: 0.5 },
      );
      this.observer.observe(video);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
