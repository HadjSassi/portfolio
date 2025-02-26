import {Component, OnInit} from '@angular/core';
import {Header2Component} from '../header2/header2.component';
import {FooterComponent} from '../footer/footer.component';
import {ArticleComponent} from '../article/article.component';
import trainerData from '../../../public/data/trainer.json';
import {CommonModule} from '@angular/common';
import data from "../../../public/data/about.json"
import config from '../../../public/config/itTrainer.json';


@Component({
  selector: 'app-it-trainer',
  imports: [
    Header2Component,
    FooterComponent,
    ArticleComponent,
    CommonModule
  ],
  templateUrl: './it-trainer.component.html',
  styleUrl: './it-trainer.component.css'
})
export class ItTrainerComponent implements OnInit{
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  // @ts-ignore
  profileImage: string = data[this.language]["itTrainerImage"];
  titlePage: string = this.config.titlePage;
  titleArticle: string = this.config.titleArticle;
  // @ts-ignore
  trainings = trainerData[this.language].trainings;

  ngOnInit() {}

}
