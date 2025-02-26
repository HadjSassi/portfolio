import {Component, AfterViewInit, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { TypedTextComponent } from '../typed-text/typed-text.component';
import aboutData from '../../../public/data/about.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule, TypedTextComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  about = aboutData;
  showTypedText = false;
  sanitizedVideoIframe: any;

  constructor(private sanitizer: DomSanitizer) {  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showTypedText = true; // Allow time for DOM to render
    }, 0);
  }

  ngOnInit() {
    this.sanitizedVideoIframe = this.sanitizer.bypassSecurityTrustHtml(this.about.videoIframe);
  }
}
