import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewChecklistDialogComponent } from './new-checklist-dialog/new-checklist-dialog.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrl: './checklists.component.css'
})
export class ChecklistsComponent {

    readonly dialog = inject(MatDialog);

    
      private collectionName = 'checklist'; // Replace with your collection name
      items!: Observable<any[]>;
      constructor(private firestore: AngularFirestore) {
        this.items = this.firestore.collection('checklist').valueChanges();
     }
    
      ngOnInit() {
        // Fetch the collection and assign it to the observable
        this.items = this.firestore.collection('checklist').valueChanges();
      }
    
    
      getItems(): Observable<any[]> {
        return this.firestore.collection(this.collectionName).valueChanges();
      }
    
      getItemById(id: string): Observable<any> {
        return this.firestore.collection(this.collectionName).doc(id).valueChanges();
      }
    

      

  

    openDialog(): void {
      this.dialog.open(NewChecklistDialogComponent);
      }

}
