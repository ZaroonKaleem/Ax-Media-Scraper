import { Component } from '@angular/core';
import { ProposalsComponent } from './proposals/proposals.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [ProposalsComponent, RouterOutlet],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {

}
