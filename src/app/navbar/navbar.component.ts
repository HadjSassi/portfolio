import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router'; // Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarVisible = window.scrollY > 200;
  }
}
