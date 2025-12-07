import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PqsqlCustService } from '../../services/pqsql-cust.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, doc, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { BasicAuthService } from '../../services/basic-auth.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {


  showForm = false;
  newListName = '';
  skuInput = '';
userLists: any;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  saveLisst() {
    const csv = this.skuInput
      .split('\n')
      .map(sku => sku.trim() + ',')
      .join('\n');

    this.firestore.collection('labelsPrint').doc(this.newListName).set({ csv });
  }


  stockForm!: FormGroup;

  floorADocs: any[] = [];
  db: any;

  constructor(private insertService: PqsqlCustService, private fb: FormBuilder, private stockDataInsert: PqsqlCustService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    
    this.firestore.collection('stockIndiced/floorA/floorA', ref => ref.limit(10))
      .valueChanges({ idField: 'id' })
      .subscribe(docs => {
        this.floorADocs = docs;
      });
    this.getUserLists()
  }

  async getUserLists(): Promise<any[]> {
    const user = this.auth.getUser();
    if (!user || !user.name) {
      alert('User not logged in');
      return [];
    }

    const querySnapshot = await getDocs(
      query(
        collection(this.firestoreInstance, 'priceLabels'),
        where('username', '==', user.name)
      )
    );

    const userLists = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return userLists;
  }

  get items(): FormArray {
    return this.stockForm.get('items') as FormArray;
  }

  addItem() {
    const itemGroup = this.fb.group({
      sku: [''],
      description: [''],
      price_vat_incl: ['']
    });
    this.items.push(itemGroup);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  stockItems!: []

  sku!: '';
  description!: '';
  price_vat_incl!: '';

  firestoreInstance = inject(Firestore);
  auth = inject(BasicAuthService);

  async saveList(newListName: any) {
    const user = this.auth.getUser();
    if (!user || !user.name) {
      alert('User not logged in');
      return;
    }
    const timestamp = Date.now();
    const docId = `${user.name}_${timestamp}`;

    // Reference to the main doc in priceLabels
    const mainDocRef = doc(collection(this.firestoreInstance, 'priceLabels'), docId);

    // Set the main doc with username and timestamp
    await setDoc(mainDocRef, {
      username: user.name,
      timestamp: timestamp,
      listName: newListName,
    });

    // Reference to the subcollection 'listSKU' under the main doc
    const subCollectionRef = collection(mainDocRef, 'listSKU');

    

    // Add a doc with one field "hello"
    await setDoc(doc(subCollectionRef), { hello: 'world' });

    alert('Label list and SKU doc created!');
    this.newListName = '';
    this.showForm = false;
  }

  submitItems() {
    if (this.sku && this.description && this.price_vat_incl !== null) {
      this.insertService.insertData({ name: this.sku, contact: this.description, email: this.price_vat_incl }).subscribe({
        next: () => alert('Insert successful!'),
        error: err => console.error('Insert failed:', err)
      });
    }
  }


}
