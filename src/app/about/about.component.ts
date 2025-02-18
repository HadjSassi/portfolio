import { Component } from '@angular/core';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  //todo fix all the public Data
  about = aboutData;
}
