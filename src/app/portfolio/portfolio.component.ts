import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface PortfolioItem {
  name: string;
  image: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports: [CommonModule],
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioItem[] = [];
  filteredItems: PortfolioItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPortfolioData();
  }

  fetchPortfolioData() {
    this.http.get<PortfolioItem[]>('data/portfolio.json').subscribe(data => {
      this.portfolioItems = data;
      this.filteredItems = data;
    });
  }

  filterPortfolio(category: string) {
    this.filteredItems = [];
    setTimeout(() => {
      this.filteredItems = category === '*' ? this.portfolioItems : this.portfolioItems.filter(item => item.category === category);
    }, 200); // Small delay for animation effect
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
