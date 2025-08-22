import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  getEmployee(): Observable<any[]> {
    return this.firestore.collection('employee').valueChanges();
  }
  addEmployee(employee: any) {
    return this.firestore.collection('employee').add(employee);
  }


  constructor(private firestore: AngularFirestore) { }

  getData(collection: "agenda"): Observable<any[]> { return this.firestore.collection(collection).valueChanges(); }

  
  getAgenda(): Observable<any[]> {
    return this.firestore.collection('agenda').valueChanges();
  }
  addAgenda(agenda: any) {
    return this.firestore.collection('agenda').add(agenda);
  }
 
}
