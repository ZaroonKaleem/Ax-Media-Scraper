import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
    selector: 'app-ecommerce',
    standalone: true,
    imports: [SearchBarComponent],
    templateUrl: './ecommerce.component.html',
    styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {}