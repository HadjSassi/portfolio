import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {AboutComponent} from '../about/about.component';
import {FooterComponent} from '../footer/footer.component';
import {SkillsComponent} from '../skills/skills.component';
import {ExperienceComponent} from '../experience/experience.component';
import {ServicesComponent} from '../services/services.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {AchievementsComponent} from '../achievements/achievements.component';
import {SocialLifeComponent} from '../social-life/social-life.component';
import {ReviewsComponent} from '../reviews/reviews.component';
import {ContactComponent} from '../contact/contact.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    ServicesComponent,
    PortfolioComponent,
    AchievementsComponent,
    SocialLifeComponent,
    ReviewsComponent,
    ContactComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showBackToTopButton = false;  // Track whether the back-to-top button should be shown
  scrollThreshold = 50;  // The threshold for scrolling

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Show back-to-top button if scroll position is greater than threshold
    this.showBackToTopButton = currentScrollPosition > this.scrollThreshold;
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
