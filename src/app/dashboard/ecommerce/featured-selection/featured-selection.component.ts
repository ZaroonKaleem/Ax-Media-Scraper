import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-featured-selection',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatTableModule,MatPaginator, MatCard,MatCardContent],
  templateUrl: './featured-selection.component.html',
  styleUrl: './featured-selection.component.scss'
})
export class FeaturedSelectionComponent {
  
  displayedColumns: string[] = ['image', 'name', 'followers', 'description', 'link'];
  dataSource = new MatTableDataSource([
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/50',
      followers: 12000,
      hashtags: '#tech #coding #developer',
      link: '#'
    },
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/50',
      followers: 8500,
      hashtags: '#webdesign #uxui #frontend',
      link: '#'
    },
    {
      name: 'Alex Johnson',
      image: 'https://via.placeholder.com/50',
      followers: 15000,
      hashtags: '#fitness #wellness #healthyliving',
      link: '#'
    },
    {
      name: 'Emily Rose',
      image: 'https://via.placeholder.com/50',
      followers: 9800,
      hashtags: '#fashion #lifestyle #beauty',
      link: '#'
    }
  ]);

  // displayedColumns: string[] = ['image', 'name', 'description', 'link'];
  // dataSource = [
  //   {
  //     name: 'John Doe',
  //     image: 'path-to-image.jpg',
  //     description: 'Social media influencer in the tech field.',
  //     link: '#'
  //   },
  //   {
  //     name: 'Jane Smith',
  //     image: 'path-to-image.jpg',
  //     description: 'Expert in web development and design.',
  //     link: '#'
  //   },
  //   {
  //     name: 'Alex Johnson',
  //     image: 'path-to-image.jpg',
  //     description: 'Fitness guru and lifestyle coach.',
  //     link: '#'
  //   }
  // ];

  applyFilter(event: Event): void {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
