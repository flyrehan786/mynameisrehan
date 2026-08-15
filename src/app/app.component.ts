import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpiceComponent } from './components/spice/spice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    QuoteComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    SpiceComponent,
  ],
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-about />
      <app-spice
        variant="secondary"
        title="I enjoy turning concepts into reality."
        subtitle="I can help in all stages of this journey, including but not limited to concept development, usability engineering, software design and implementation."
      />
      <app-skills />
      <app-quote />
      <app-experience />
      <app-education />
      <app-projects />
      <app-spice
        variant="primary"
        title="I love to offer something cool and new to the world."
        subtitle="I am passionate and get satisfaction from working with small, creative, smart teams who aim to offer something new to people and see them smile."
      />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}

