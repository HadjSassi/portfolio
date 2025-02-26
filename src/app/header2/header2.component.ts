import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import aboutData from '../../../public/data/about.json';
import config from '../../../public/config/header.json';

@Component({
  selector: 'app-header2',
    imports: [
        CommonModule
    ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component  {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  @Input() profileImage: string = '';
  @Input() titlePage: string = '';
  @Input() titlePage2: string = '';
  about = aboutData;

}
