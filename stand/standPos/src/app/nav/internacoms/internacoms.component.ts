import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-internacoms',
  templateUrl: './internacoms.component.html',
  styleUrl: './internacoms.component.css'
})
export class InternacomsComponent {
  firestore: Firestore = inject(Firestore);

  messageControl = new FormControl('', Validators.required);

  internacoms$: Observable<any[]>;

  createPriceForm!: FormGroup;


  hrllll: string = "vbncv"

  constructor(private fb: FormBuilder,
    private db: Firestore) {




     const internacomsCollection = collection(this.firestore, 'internacoms');
    this.internacoms$ = collectionData(internacomsCollection, { idField: 'id' });

    this.createPriceForm = this.fb.group({
      priceLabl: new FormControl([]),

    });
  }

  save(createPriceForm: any) {

    const formData = this.createPriceForm.value;

    console.log(createPriceForm)

   




    const docRef = addDoc(collection(this.db, 'internacoms'), {
      priceLabl: formData.priceLabl,

    });
    this.createPriceForm.reset();
  }

  async clearAllInternacoms() {
    const internacomsCollection = collection(this.firestore, 'internacoms');
    const snapshot = await getDocs(internacomsCollection);
    const deletePromises = snapshot.docs.map(d => deleteDoc(doc(this.firestore, 'internacoms', d.id)));
    await Promise.all(deletePromises);
    alert('All internacoms deleted!');
  }
}
