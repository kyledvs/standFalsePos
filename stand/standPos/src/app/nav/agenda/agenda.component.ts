import { ChangeDetectionStrategy, Component } from '@angular/core';

import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

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
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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



  

  agenda$!: Observable<AgendaInterface[]>;
  firestore: Firestore = inject(Firestore);

 

  constructor() {
    const itemsCollection = collection(this.firestore, 'agenda');
    this.agenda$ = collectionData(itemsCollection).pipe(
      map(data => data as AgendaInterface[])
    );
  }

  /*getItems(): Observable<Item[]> {
    return this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }*/


  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(NewAgendaDialogComponent);
  }

}



