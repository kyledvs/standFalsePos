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
  selector: 'app-new-agenda-dialog',
  templateUrl: './new-agenda-dialog.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,
    MatCardModule, MatIconModule, MatInputModule


  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './new-agenda-dialog.component.css'
})
export class NewAgendaDialogComponent {


  createAgendaForm!: FormGroup;

  agendas!: Observable<any[]>;
  dialogRef: any;

  constructor(
    public dialog: MatDialog,

    private fb: FormBuilder,
    private db: Firestore
  ) {
    this.createAgendaForm = this.fb.group({
      headClient: new FormControl([]),
      longDesc: new FormControl([]),
      shortDesc: new FormControl([]),
      subjectItems: new FormControl([]),
    });
  }
  onSubmit(createAgendaForm: any) {
    const formData = this.createAgendaForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking 12', formData);

    const docRef = addDoc(collection(this.db, 'agenda'), {
      headClient: formData.headClient,
      longDesc: formData.longDesc,
      shortDesc: formData.shortDesc,
      subjectItems: formData.subjectItems,
    });

    console.log(this.createAgendaForm.value);
    console.log('gytf');
    this.dialogRef.close(formData);

  }

}
