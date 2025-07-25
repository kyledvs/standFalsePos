import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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


@Component({
  selector: 'app-new-checklist-dialog',
  templateUrl: './new-checklist-dialog.component.html',
  standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,
      MatCardModule, MatIconModule, MatInputModule
  
  
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './new-checklist-dialog.component.css'
})
export class NewChecklistDialogComponent {

  createChecklistForm!: FormGroup;

  agendas!: Observable<any[]>;

  constructor(
    public dialog: MatDialog,

    private fb: FormBuilder,
    private db: Firestore
  ) {
    this.createChecklistForm = this.fb.group({
      checklistApllicableBranch: new FormControl([]),
      checklistName: new FormControl([]),
      checklistFrequency: new FormControl([]),
      membersChecklistAssigned: new FormControl([]),
    });
  }
  onSubmit(createChecklistForm: any) {
    const formData = this.createChecklistForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking 12', formData);

    const docRef = addDoc(collection(this.db, 'checklist'), {
      checklistApllicableBranch: formData.checklistApllicableBranch,
      checklistName: formData.checklistName,
      checklistFrequency: formData.checklistFrequency,
      membersChecklistAssigned: formData.membersChecklistAssigned,
    });

    console.log(this.createChecklistForm.value);
    console.log('gytf');
  }

}
