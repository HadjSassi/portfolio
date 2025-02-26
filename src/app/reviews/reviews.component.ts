import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import config from '../../../public/config/reviews.json';

declare var bootstrap: any;

interface Review {
  text: string;
  imageAbout: string;
  name: string;
  position: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements AfterViewInit {
  language: string = 'en';
  // @ts-ignore
  config = config[this.language];
  reviews: Review[] = [];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.fetchReviews().subscribe(data => {
      this.reviews = data.reviews;
    });
  }

  fetchReviews(): Observable<{ reviews: Review[] }> {
    return this.http.get<{ reviews: Review[] }>('data/reviews.json');
  }
}
