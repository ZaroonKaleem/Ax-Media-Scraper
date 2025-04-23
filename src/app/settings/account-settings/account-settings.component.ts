import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-account-settings',
    standalone: true,
    imports: [MatDivider,MatFormFieldModule,MatCardModule,MatInputModule,MatSlideToggleModule,MatButtonModule,MatIcon],
    templateUrl: './account-settings.component.html',
    styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent {

    // Select Value
    countrySelected = 'option1';
    skillsSelected = 'option2';
    professionSelected = 'option3';
    genderSelected = 'option1';

    // File Uploader
    public multiple: boolean = false;

}