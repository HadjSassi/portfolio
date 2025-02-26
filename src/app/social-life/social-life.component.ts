import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/social.json';

interface SocialActivity {
  title: string;
  imageAbout: string;
  id: string;
}

@Component({
  selector: 'app-social-life',
  templateUrl: './social-life.component.html',
  styleUrls: ['./social-life.component.css'],
  imports: [CommonModule]
})
export class SocialLifeComponent implements OnInit {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  socialActivities: SocialActivity[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSocialActivities();
  }

  fetchSocialActivities() {
    this.http.get<{ socialActivities: SocialActivity[] }>('data/social.json').subscribe(data => {
      this.socialActivities = data.socialActivities;
    });
  }

  openLink(link: string) {
    window.open("SocialLife/"+link, '_blank');
  }
}
