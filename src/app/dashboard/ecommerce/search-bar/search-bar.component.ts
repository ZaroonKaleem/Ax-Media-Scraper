import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatCard, MatFormFieldModule, MatOption, MatSelect, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  selectedPlatform: string = 'instagram';

  platforms = [
    { value: 'instagram', label: 'Instagram', icon: 'images/ax/instagram.png' },
    { value: 'tiktok', label: 'Tiktok', icon: 'images/ax/tiktok.png' },
    { value: 'youtube', label: 'YouTube', icon: 'images/ax/youtube.png' },
  ];
}
