import {Component, OnInit} from '@angular/core';
import {ArticleComponent} from '../article/article.component';
import {FooterComponent} from '../footer/footer.component';
import {Header2Component} from '../header2/header2.component';
import {ActivatedRoute} from '@angular/router';
import socialLife from '../../../public/data/social.json';
import {CommonModule} from '@angular/common';
import data from '../../../public/data/about.json';


@Component({
  selector: 'app-soclife',
  imports: [
    ArticleComponent,
    FooterComponent,
    Header2Component,
    CommonModule,
  ],
  templateUrl: './soclife.component.html',
  styleUrl: './soclife.component.css'
})
export class SoclifeComponent implements OnInit {
  // @ts-ignore
  profileImage: string = data["socialLifeImage"];
  titlePage: string = "";
  titlePage2: string = "";
  titleArticle: string = "";
  name: string | undefined;
  article: {
    title: string;
    title2: string;
    articleTitle: string;
    image: string;
    id: string;
    description: string;
    images: string[];
    videos: string[];
  } | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    const allArticles = socialLife.socialActivities;
    // @ts-ignore
    this.article = allArticles.find(item => item.id === this.name);
    // @ts-ignore
    this.titlePage2 = this.article.title;
    // @ts-ignore
    this.titlePage = this.article.title2;
    // @ts-ignore
    this.titleArticle = this.article?.articleTitle;
  }
}
