import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';

interface Achievement {
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
  mediaLink: string;
}

interface AchievementCategory {
  category: string;
  items: Achievement[];
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  imports: [CommonModule]
})
export class AchievementsComponent implements OnInit {
  achievements: AchievementCategory[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAchievements();
  }

  fetchAchievements() {
    //todo fix all the rest of the achivements entries
    this.http.get<{ achievements: AchievementCategory[] }>('data/achievements.json').subscribe(data => {
      this.achievements = data.achievements;
    });
  }
}
