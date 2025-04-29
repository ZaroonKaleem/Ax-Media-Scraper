import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
    hashtags: string[] = [
        '#technology',
        '#gaming',
        '#fashion',
        '#travel',
        '#food',
        '#fitness',
        '#beauty',
        '#lifestyle',
        '#music',
        '#sports',
        '#health',
        '#photography',
        '#education',
        '#business',
        '#finance',
    ];

    countries = [
      { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago', 'Miami'] },
      { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'] },
      { name: 'UK', cities: ['London', 'Manchester', 'Birmingham', 'Liverpool'] },
      { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'] }
    ];
  
    selectedCountry: string = '';
    selectedCity: string = '';
    citiesForSelectedCountry: string[] = [];
  
    showCityDropdown = false;
  
    // This function is triggered when the country is selected
    onCountrySelected() {
      const selected = this.countries.find(c => c.name === this.selectedCountry);
      if (selected) {
        this.citiesForSelectedCountry = selected.cities;
        this.showCityDropdown = true; // Enable city dropdown
      }
    }
  
    // Remove selected country and city
    removeSelectedCountry() {
      this.selectedCountry = '';
      this.selectedCity = '';
      this.showCityDropdown = false;
      this.citiesForSelectedCountry = [];
    }
    // countries = [
    //   { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago', 'Miami'] },
    //   { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'] },
    //   { name: 'UK', cities: ['London', 'Manchester', 'Birmingham', 'Liverpool'] },
    //   { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'] }
    // ];
  
    // selectedCountry: string = '';
    // selectedCity: string = '';
    // citiesForSelectedCountry: string[] = [];
  
    // onCountryChange() {
    //   const country = this.countries.find(c => c.name === this.selectedCountry);
    //   this.citiesForSelectedCountry = country ? country.cities : [];
    //   this.selectedCity = ''; // Reset city on country change
    // }

    searchText = '';
    selectedHashtags: string[] = [];
    showSuggestions = false;
    filteredHashtags: string[] = [...this.hashtags];

    focusInput() {
        this.showSuggestions = true;
        this.filterHashtags();
    }

    blurInput() {
        setTimeout(() => {
            this.showSuggestions = false;
        }, 200);
    }

    isOpen = false;
    options = [
        { label: 'Facebook', image: 'images/ax/facebook.png' },
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

    addHashtag(tag: string) {
        if (!this.selectedHashtags.includes(tag)) {
            this.selectedHashtags.push(tag);
        }
        this.searchText = '';
        this.showSuggestions = false;
        this.filterHashtags();
    }

    removeHashtag(tag: string) {
        this.selectedHashtags = this.selectedHashtags.filter((t) => t !== tag);
    }

    onInputChange() {
        this.filterHashtags();
    }

    handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && this.searchText.trim() !== '') {
            const newTag = this.searchText.startsWith('#')
                ? this.searchText
                : `#${this.searchText}`;
            this.addHashtag(newTag);
        }
    }

    filterHashtags() {
        const input = this.searchText.toLowerCase();
        this.filteredHashtags = this.hashtags.filter(
            (tag) =>
                tag.toLowerCase().includes(input) &&
                !this.selectedHashtags.includes(tag)
        );
    }
}
