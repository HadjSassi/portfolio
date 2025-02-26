import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { TypedTextComponent } from '../typed-text/typed-text.component';
import aboutData from '../../../public/data/about.json';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule, TypedTextComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Add a template reference variable for the modal element.
  @ViewChild('videoModal', { static: false }) videoModal!: ElementRef;
  about = aboutData;
  sanitizedVideoIframe: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.sanitizedVideoIframe = this.sanitizer.bypassSecurityTrustHtml(this.about.videoIframe);
  }

  openModal() {
    const modalElement = this.videoModal.nativeElement;
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }
}
