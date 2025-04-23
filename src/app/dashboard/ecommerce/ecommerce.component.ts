import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeaturedSelectionComponent } from './featured-selection/featured-selection.component';

@Component({
    selector: 'app-ecommerce',
    standalone: true,
    imports: [SearchBarComponent, FeaturedSelectionComponent],
    templateUrl: './ecommerce.component.html',
    styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {}