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
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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



  

  agenda$!: Observable<any[]>;

 

  constructor(private firestore: AngularFirestore) {
    this.agenda$ = this.firestore.collection('agenda').valueChanges();;
    
  }

  getItems(): Observable<AgendaInterface[]> {
    return this.firestore.collection<AgendaInterface>('agenda').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as AgendaInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(NewAgendaDialogComponent);
  }

}



