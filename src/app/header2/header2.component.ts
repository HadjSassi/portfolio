import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import aboutData from '../../../public/data/about.json';

@Component({
  selector: 'app-header2',
    imports: [
        CommonModule
    ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component  {
  @Input() profileImage: string = '';
  @Input() titlePage: string = '';
  about = aboutData;

}
