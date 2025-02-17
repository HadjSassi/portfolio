import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

declare var bootstrap: any;

interface Review {
  text: string;
  image: string;
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
  reviews: Review[] = [];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.fetchReviews().subscribe(data => {
      this.reviews = data.reviews;

      const carouselElement = document.getElementById('carouselExampleIndicators');
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,  // 3 seconds automatic transition
        wrap: true,      // Wrap around when reaching the end
        ride: 'carousel' // Ensures the carousel auto-cycles when the page is ready
      });
    });
  }

  fetchReviews(): Observable<{ reviews: Review[] }> {
    return this.http.get<{ reviews: Review[] }>('data/reviews.json');
  }
}
