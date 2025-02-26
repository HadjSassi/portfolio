import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router'; // Import CommonModule
import config from '../../../public/config/navbar.json';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  currentFragment: string | null = null;
  isNavbarVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the initial fragment from the URL (if any)
    this.currentFragment = window.location.hash ? window.location.hash.substring(1) : null;

    // (Optional) If you prefer to capture router events too:
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentFragment = this.router.parseUrl(this.router.url).fragment;
      }
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarVisible = window.scrollY > 200;
  }

  // Listen for the native hashchange event
  @HostListener('window:hashchange', ['$event'])
  onHashChange(event: HashChangeEvent) {
    this.currentFragment = window.location.hash ? window.location.hash.substring(1) : null;
  }

  // Helper method to determine if a fragment is active
  isActive(fragment: string): boolean {
    return this.currentFragment === fragment;
  }
}
