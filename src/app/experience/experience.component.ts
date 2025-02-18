import {Component, OnInit} from '@angular/core';
import experienceData from '../../../public/data/experience.json';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule],
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  education = experienceData.education;
  experience = experienceData.experience;

  ngOnInit() {}
}
