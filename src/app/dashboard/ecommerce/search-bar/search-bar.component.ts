import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit, OnDestroy {
    private isBrowser: boolean;
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
    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
      }
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
    isMobileView = false;
    searchText = '';
    selectedHashtags: string[] = [];
    showSuggestions = false;
    filteredHashtags: string[] = [...this.hashtags];

    ngOnInit() {
        if (this.isBrowser) {
          this.checkMobileView();
          window.addEventListener('resize', this.checkMobileView.bind(this));
        }
      }
    
      ngOnDestroy() {
        if (this.isBrowser) {
          window.removeEventListener('resize', this.checkMobileView.bind(this));
        }
      }

      checkMobileView() {
        if (typeof window !== 'undefined') {
          this.isMobileView = window.innerWidth <= 768;
        }
    }

    maxVisibleChips = 1; // Show 1 chip by default
isExpanded = false;

toggleExpanded() {
  this.isExpanded = !this.isExpanded;
  this.maxVisibleChips = this.isExpanded ? this.selectedHashtags.length : 1;
}

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
