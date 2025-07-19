import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrl: './repairs.component.css'
})
export class RepairsComponent {

  repairForm!: FormGroup;

  //stockItems: any[] = [];

  //technicians: any[] = [];

  stockItems = [
    { sku: 'CMP-X220', description: 'Compressor 220V' },
    { sku: 'FAN-120MM', description: '120mm Cooling Fan' }
  ];

  clients = [
    { id: 101, name: 'Andile M.' },
    { id: 102, name: 'Lerato K.' }
  ];



  technicians = [
    { id: 1, name: 'Stephen' },
    { id: 2, name: 'Naledi' }
  ];

  constructor(private fb: FormBuilder) {
    this.repairForm = this.fb.group({
      client_id: [null, Validators.required],
      technician_id: [null, Validators.required],
      stock_item_sku: [null, Validators.required],
      serial_number: ['', Validators.required],
      issue_description: ['', [Validators.required, Validators.maxLength(500)]],
    
    
      repair_notes: ['']
    });
  }

  submitRepair() {
    if (this.repairForm.valid) {
      const payload = this.repairForm.value;
      console.log("Submitting repair:", payload);
      // Call service to store in Firestore or PostgreSQL via API
    } else {
      console.warn("Form invalid, cannot submit.");
    }
  }


}
