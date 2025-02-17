import { Component, AfterViewInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import {TypedTextComponent} from '../typed-text/typed-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule, TypedTextComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  showTypedText = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.showTypedText = true; // Allow time for DOM to render
    }, 0);
  }
}
