import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      text: "Tunis Sports University innove et grâce au travail de notre étudiant Mehdi Haj Sassi...",
      image: "/img/benabdallahmehdi.jpg",
      name: "BEN ABDALLAH Mehdi",
      position: "Tunis Sports University Owner"
    },
    {
      text: "Good job done by Mahdi",
      image: "https://cdn5.f-cdn.com/ppic/229851141/logo/19416088/Jmk41/CROPPED_profile_logo_UXUJC_16ada05214aa9a815c6159c4ab557994.jpeg?image-optimizer=force&format=webply&width=336",
      name: "Naif A",
      position: "Professional Engineer"
    }
  ];


}
