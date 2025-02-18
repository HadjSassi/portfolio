import { Component } from '@angular/core';
import aboutData from '../../../public/data/about.json';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  about = aboutData;
}
