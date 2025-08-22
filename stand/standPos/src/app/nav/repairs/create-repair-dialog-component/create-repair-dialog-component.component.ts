import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-repair-dialog-component',
  templateUrl: './create-repair-dialog-component.component.html',
  styleUrl: './create-repair-dialog-component.component.css'
})
export class CreateRepairDialogComponentComponent {
  repairForm!: FormGroup;
clients: any;
stockItems: any;

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
