import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthServiceService } from '../../services/auth-service.service';
interface AgendaInterface {
  name: string,
  password: string,
  branch: number,
  confirmedAs: string,
 

};


@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.css'
})
export class CreateUserDialogComponent  {
  userForm: FormGroup;
  branches: number[] = Array.from({ length: 91 }, (_, i) => i + 1);
  createAgendaForm!: FormGroup;

 

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private AuthServiceService: AuthServiceService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      branch: [null, Validators.required], confirmedAs: ['pending'],

    });

  }

  onSubmit(userForm: any): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log('User created:', userData);
      this.AuthServiceService.addEmployee(userData); // <-- Pass the value, not the FormGroup
      this.dialogRef.close(userData);
    }
  }

  // ...existing code...
  cancel(): void {
    this.dialogRef.close();
  }
  // ...existing code...

}
