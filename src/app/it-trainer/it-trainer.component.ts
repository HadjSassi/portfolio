import { Component } from '@angular/core';
import {Header2Component} from '../header2/header2.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-it-trainer',
  imports: [
    Header2Component,
    FooterComponent
  ],
  templateUrl: './it-trainer.component.html',
  styleUrl: './it-trainer.component.css'
})
export class ItTrainerComponent {
  profileImage: string = "HadjSassisamll.png";
  titlePage: string = "An It Trainer";

}
