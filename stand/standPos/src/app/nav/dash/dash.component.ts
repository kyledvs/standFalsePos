import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {

  constructor(private firestore: AngularFirestore, ) {
    this.getDocumentCount();


  }
 

  documentCount: number = 0;



  getDocumentCount(): void {
    this.firestore.collection('agenda').get().subscribe(snapshot => {
      this.documentCount = snapshot.size; // This gives the number of documents
    });
  }


  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
     

      return [
        { title: 'At a Glance', cols: 2, rows: 1, },
        { title: 'Agenda', cols: 1, rows: 1 },
        { title: 'Checklists', cols: 1, rows: 2 },
        { title: 'Messages', cols: 1, rows: 1 }
      ];
    })
  );
}
