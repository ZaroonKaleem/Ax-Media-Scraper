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
  isOpen = false;
  options = [
    { label: 'Instagram', image: 'images/ax/instagram.png' },
    { label: 'Tiktok', image: 'images/ax/tiktok.png' },
    { label: 'YouTube', image: 'images/ax/youtube.png' },
  ];

  selectedOption = this.options[0]; // Instagram by default

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any, event: MouseEvent) {
    event.stopPropagation(); // prevent toggleDropdown from firing
    this.selectedOption = option;
    this.isOpen = false;
  }
}
//   selectedPlatform: string = 'instagram';
//   isOpen = false;
//   selectedOption: any = null;

//   options  = [
//     { label: 'Instagram', image: 'images/ax/instagram.png' },
//     { label: 'Tiktok', image: 'images/ax/tiktok.png' },
//     { label: 'YouTube', image: 'images/ax/youtube.png' },
//   ];

//   toggleDropdown() {
//     this.isOpen = !this.isOpen;
//   }

//   selectOption(option: any) {
//     this.selectedOption = option;
//     this.isOpen = false;
//   }
// }
