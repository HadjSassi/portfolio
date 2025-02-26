import {Component, OnInit} from '@angular/core';
import experienceData from '../../../public/data/experience.json';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/experience.json';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule],
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  education = experienceData.education;
  experience = experienceData.experience;

  ngOnInit() {}
}
