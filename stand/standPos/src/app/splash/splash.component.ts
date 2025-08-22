import { Component } from '@angular/core';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog, MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { Observable } from 'rxjs';
import { CreateUserDialogComponent } from '../globaldialogs/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  
  styleUrl: './splash.component.css'
})
export class SplashComponent {
 

  loginForm: FormGroup;

  
  




  constructor(public router: Router, private fb: FormBuilder
    

        
    
  ) {
  
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Handle login logic here
      console.log('Login:', username, password);
    }
  }

  toAdmin() {
    this.router.navigate(['/hub']);

  }

  readonly dialog = inject(MatDialog);


  openCreateEmployee(): void {
    this.dialog.open(CreateUserDialogComponent);
    }

 

}
