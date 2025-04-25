import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-featured-selection',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatTableModule,MatPaginator],
  templateUrl: './featured-selection.component.html',
  styleUrl: './featured-selection.component.scss'
})
export class FeaturedSelectionComponent {
  displayedColumns: string[] = ['image', 'name', 'description', 'link'];
  dataSource = [
    {
      name: 'John Doe',
      image: 'path-to-image.jpg',
      description: 'Social media influencer in the tech field.',
      link: '#'
    },
    {
      name: 'Jane Smith',
      image: 'path-to-image.jpg',
      description: 'Expert in web development and design.',
      link: '#'
    },
    {
      name: 'Alex Johnson',
      image: 'path-to-image.jpg',
      description: 'Fitness guru and lifestyle coach.',
      link: '#'
    }
  ];

}
