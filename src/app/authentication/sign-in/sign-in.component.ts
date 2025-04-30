import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [
        // ... other imports
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule
      ],
    // imports: [RouterLink, MatDivider, MatCard,MatCheckbox, MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  onLogin() {
    // Add your authentication logic here first
    // For example, after successful authentication:
    this.router.navigate(['/dashboard']);
  }
    // Password Hide
    hide = true;

    loginForm: FormGroup;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
          });
    }

    onSubmit() {
        if (this.loginForm.valid) {
          console.log('Login form submitted', this.loginForm.value);
          // Add your login logic here
        }
      }

}