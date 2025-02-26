import { Component } from '@angular/core';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/about.json';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  // @ts-ignore
  about = aboutData[this.language];
}
