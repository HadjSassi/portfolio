import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {SocialLifeComponent} from './social-life/social-life.component';
import {ReviewsComponent} from './reviews/reviews.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'qualification', component: ExperienceComponent },
  { path: 'skill', component: SkillsComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'social', component: SocialLifeComponent },
  { path: 'testimonial', component:  ReviewsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
