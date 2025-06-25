import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private cachedData: any[] = [];
  private dataSubject = new BehaviorSubject<any[]>([]);

  constructor(private firestore: AngularFirestore) { }

  // Fetch data from Firestore with caching
  getCachedData(collectionName: string): Observable<any[]> {
    if (this.cachedData.length === 0) {
      this.firestore.collection(collectionName).valueChanges().subscribe((res) => {
        this.cachedData = res;
        this.dataSubject.next(this.cachedData);
      });
    }
    return this.dataSubject.asObservable();
  }


}
