import { Component } from '@angular/core';
import servicesData from '../../../public/data/services.json';
import {CommonModule} from '@angular/common';
import config from '../../../public/config/services.json';

interface Service {
  icon: string;
  title: string;
  description: string;
  link?: string;      // Optional properties
  linkText?: string;  // Optional properties
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [CommonModule],
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  services: Service[] = servicesData.services; // Specify the type
}
