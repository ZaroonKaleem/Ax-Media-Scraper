import { Component, signal } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { ToggleService } from '../header/toggle.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { SearchAnyInfluencerComponent } from '../../dashboard/ecommerce/search-any-influencer/search-any-influencer.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [NgScrollbarModule, NgIf,MatExpansionModule, RouterLinkActive, RouterLink, NgClass],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    openInfluencerSearch() {
        this.dialog.open(SearchAnyInfluencerComponent, {
          width: '600px',
          panelClass: 'influencer-search-dialog'
        });
    }

    isLanguageMenuOpen: boolean = false;

  openLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  changeLanguage(language: string) {
    // Change the language logic here, such as using a service to set the language
    console.log('Language changed to:', language);
    this.isLanguageMenuOpen = false; // Close the language menu after selection
  }

    // Mat Expansion
    readonly panelOpenState = signal(false);

    // isSidebarToggled
    isSidebarToggled = false;

    // isToggled
    isToggled = false;

    constructor(
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService,
        private dialog: MatDialog
    ) {
        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Burger Menu Toggle
    toggle() {
        this.toggleService.toggle();
    }

}