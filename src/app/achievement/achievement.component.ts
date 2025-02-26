import {Component, OnInit} from '@angular/core';
import {Header2Component} from '../header2/header2.component';
import {FooterComponent} from '../footer/footer.component';
import achievementData from '../../../public/data/achievements.json';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from '../article/article.component';
import {ActivatedRoute} from '@angular/router';
import config from '../../../public/config/achievement.json';


@Component({
  selector: 'app-achievement',
  imports: [
    Header2Component,
    FooterComponent,
    CommonModule,
    ArticleComponent
  ],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent implements OnInit {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  profileImage: string = aboutData["achievementImage"];
  titlePage: string = this.config.titlePage;
  titlePage2: string = "";
  titleArticle: string = this.config.titleArticle;
  name: string | undefined;
  achievement: {
    title: string;
    date: string;
    location: string;
    description: string;
    description2: string;
    link: string;
    id: string;
    images: string[];
    videos: string[];
  } | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    const allAchievements = achievementData.achievements.flatMap(category => category.items);
    // @ts-ignore
    this.achievement = allAchievements.find(item => item.id === this.name);
    // @ts-ignore
    this.titlePage2 = this.achievement.title;
  }
}
