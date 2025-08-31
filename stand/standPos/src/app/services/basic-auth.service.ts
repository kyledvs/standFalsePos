import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore'; // Import Firestore
import { doc, getDoc } from 'firebase/firestore';

export interface User {
  name?: string;
  email?: string;
  password?: string;
  role?: 'admin' | 'assistant' | 'super';
  [key: string]: any; // optional catch-all for Firestore extras
}



@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  currentUser: any = null;
  db: any;
 

  constructor(private firestore: Firestore) {
    this.db = firestore; // Assign Firestore instance
  }

  async login(name: string, password: string): Promise<boolean> {
    const collections = ['adminUsers', 'assistantUsers', 'superUsers'];

    for (const col of collections) {
      console.log(`Checking collection: ${col}, doc ID: ${name}`);
      const ref = doc(this.db, col, name); // assuming email is used as ID
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        if (data['password'] === password) {
          this.currentUser = { ...data, role: col.replace('Users', '') };
          sessionStorage.setItem('user', JSON.stringify(this.currentUser));
          console.log('hello there');
          return true;
        }
      }
    }
    return false;
  }

  getUser(): User | null {
    if (this.currentUser) {
      return this.currentUser;
    }
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const userJson = sessionStorage.getItem('user');
      this.currentUser = userJson ? JSON.parse(userJson) : null;
      return this.currentUser;
    }
    return null;
  } 

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('user');
  }
}
