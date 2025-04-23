import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-capaign',
  standalone: true,
  imports: [
    // ... other imports
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './my-capaign.component.html',
  styleUrl: './my-capaign.component.scss'
})
export class MyCapaignComponent {

}
