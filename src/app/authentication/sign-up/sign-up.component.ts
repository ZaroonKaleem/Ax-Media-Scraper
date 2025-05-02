import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    // imports: [RouterLink, MatButtonModule, MatFormFieldModule, MatInputModule],
    imports: [
        // Material Modules
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatListModule,
        CommonModule,
        
        // Angular Forms
        ReactiveFormsModule,
      ],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
    signupForm: FormGroup;
    isAdmin: boolean = true; // Set dynamically based on logged-in user role
  
    constructor(private fb: FormBuilder, public themeService: CustomizerSettingsService,private router: Router) {
      this.signupForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        allowExport: [false],
        allowFetch: [false],
        socialPlatforms: [[]] // Multi-selection list
      });

      this.themeService.isToggled$.subscribe(isToggled => {
        this.isToggled = isToggled;
    });
    }
  
    onSignup() {
        console.log('User Data:', this.signupForm.value);
        this.router.navigate(['/dashboard'])
        // Call your signup API here
    }
  



    // Password Hide
    hide = true;

    // isToggled
    isToggled = false;

    // constructor(
    //     public themeService: CustomizerSettingsService
    // ) {
    //     this.themeService.isToggled$.subscribe(isToggled => {
    //         this.isToggled = isToggled;
    //     });
    // }

}