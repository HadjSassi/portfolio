import {Component, OnInit} from '@angular/core';
import {Header2Component} from '../header2/header2.component';
import {FooterComponent} from '../footer/footer.component';
import {ArticleComponent} from '../article/article.component';
import trainerData from '../../../public/data/trainer.json';
import {CommonModule} from '@angular/common';


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
  profileImage: string = "HadjSassisamll.png";
  titlePage: string = "An It Trainer";
  titleArticle: string = "Training";
  trainings = trainerData.trainings;

  ngOnInit() {
    console.log(this.trainings);
  }

}
