import { Component } from '@angular/core';
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
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
