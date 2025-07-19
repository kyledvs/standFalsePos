import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PqsqlCustService } from '../../services/pqsql-cust.service';




@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  stockForm!: FormGroup;

 /* constructor(private fb: FormBuilder, private stockDataInsert: PqsqlCustService) { }

  ngOnInit() {
    this.stockForm = this.fb.group({
      items: this.fb.array([])
    });
   
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
  }*/

    stockItems!: []

  sku!: '';
  description!: '';
  price_vat_incl!: '';

  constructor(private insertService: PqsqlCustService) { }

  submitItems() {
    if (this.sku && this.description && this.price_vat_incl !== null) {
      this.insertService.insertData({ name: this.sku, contact: this.description, email: this.price_vat_incl }).subscribe({
        next: () => alert('Insert successful!'),
        error: err => console.error('Insert failed:', err)
      });
    }
  }


}
