import { ChangeDetectionStrategy, Component } from '@angular/core';

import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NewAgendaDialogComponent } from './new-agenda-dialog/new-agenda-dialog.component';

interface AgendaInterface {
  headClient: string,
  longDesc: string,
  shortDesc: string,
  subjectItems: string,

};

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  agenda$: Observable<AgendaInterface[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'agenda');
    this.agenda$ = collectionData<AgendaInterface>(itemCollection);
  }


  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(NewAgendaDialogComponent);
  }

}



