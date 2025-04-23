import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FpFaqComponent } from '../fp-faq/fp-faq.component';

@Component({
  selector: 'app-fp-for-creaters',
  standalone: true,
  imports: [CommonModule,MatButton,FpFaqComponent],
  templateUrl: './fp-for-creaters.component.html',
  styleUrl: './fp-for-creaters.component.scss'
})
export class FpForCreatersComponent {
  sections = [
    {
      title: 'Your new favorite creator ecosystem',
      description: 'Send and receive collaboration proposals from the brands you are interested in. Get on the radar of thousands of brands looking for talent.',
      button: 'Browse campaigns',
      image: 'assets/images/creator-ecosystem.png'
    },
    {
      title: 'Browse Diverse Campaigns',
      description: 'Explore a wide selection of campaigns from various sectors. Find the perfect match for your style and audience.',
      button: 'Start for free',
      image: 'assets/images/browse-campaigns.png'
    },
    {
      title: 'Swift Application Process',
      description: 'Apply in just a few clicks and start collaborating with brands you love. Simplify your journey to success.',
      button: 'Start for free',
      image: 'assets/images/application-process.png'
    },
    {
      title: 'Flexible Collaboration Management',
      description: 'Organize everything in one place. Manage communication, content, and delivery smoothly.',
      button: 'Manage your work',
      image: 'assets/images/collaboration-management.png'
    },
    {
      title: 'Effortless Payment and Invoicing',
      description: 'Our platform ensures fast payouts and automatically generated invoices for all your deals.',
      button: 'See how it works',
      image: 'assets/images/payment-invoicing.png'
    },
    {
      title: 'Stay Updated with Campaign Alerts',
      description: 'Be the first to know when new opportunities arrive. Enable alerts and never miss out.',
      button: 'Turn on alerts',
      image: 'assets/images/campaign-alerts.png'
    },
    {
      title: 'Export Your Analytics and Share with Brands',
      description: 'Easily export performance metrics to prove your value to potential partners.',
      button: 'Export now',
      image: 'assets/images/export-analytics.png'
    }
  ];
}
