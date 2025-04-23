import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-search-any-influencer',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    NgFor
  ],  
  templateUrl: './search-any-influencer.component.html',
  styleUrl: './search-any-influencer.component.scss'
})
export class SearchAnyInfluencerComponent {
  searchTerm = '';
  platformFilter: string = 'all';
  influencers = [
    { name: 'Jane Doe', platform: 'instagram' },
    { name: 'John Smith', platform: 'tiktok' },
    { name: 'Alice Chen', platform: 'youtube' },
    // Add your influencer data here
  ];
  filteredInfluencers = [...this.influencers];

  filterInfluencers() {
    this.filteredInfluencers = this.influencers.filter(influencer => {
      const matchesName = influencer.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesPlatform = this.platformFilter === 'all' || influencer.platform === this.platformFilter;
      return matchesName && matchesPlatform;
    });
  }
}