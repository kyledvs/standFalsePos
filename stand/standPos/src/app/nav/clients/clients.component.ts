import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

import {  ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




import { Observable } from 'rxjs';
import { firebaseConfig } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Customer, PqsqlCustService } from '../../services/pqsql-cust.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
 /* customerForm: FormGroup;

  agendaForm: FormGroup;
  agendas: any;
  constructor(private AuthServiceService: AuthServiceService, private fb: FormBuilder, private http: HttpClient) {
    this.agendaForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }
  ngOnInit() {
    this.agendas = this.AuthServiceService.getAgenda();
  }
  addPost() {
    if (this.agendaForm.valid) {
      this.AuthServiceService.addAgenda(this.agendaForm.value);
      this.agendaForm.reset();
    }
  }





  selectedFile: File | null = null;



  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      console.log("file selected")

      this.selectedFile = input.files[0];
      this.uploadFile();
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.selectedFile = event.dataTransfer.files[0];
      this.uploadFile();
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }

  uploadFile(): void {
    if (!this.selectedFile) return;

    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      const payload = {
        fileName: this.selectedFile?.name,
        fileContent: fileContent,
       
      };
 console.log("sfg", reader.result)
      this.http.post('/api/gemini-process', payload).subscribe({
        next: (res) => console.log('Upload successful:', res),
        error: (err) => console.error('Upload failed:', err)
      });
    };

    reader.readAsText(this.selectedFile); // You can swap to readAsDataURL or readAsBinaryString depending on backend needs
  }
  customers: Customer[] = [];
  name = '';
  email = '';

  constructor(private customerService: PqsqlCustService, private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  addCustomer() {
    console.log('addcomp customers...')

    {
      console.log(this.customerForm);
      this.customerService
        .addCustomer(this.customerForm.value)
        /*.subscribe((newCustomer) => {
          this.customers.push(newCustomer);
          this.name = 'll';
          this.email = 'll';
        })
    }
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter((c) => c.id !== id);
    });
  }
  */

  name = '';
  contact!: '';
  email = '';

  constructor(private insertService: PqsqlCustService) { }

  onInsert() {
    if (this.name && this.contact && this.email !== null) {
      this.insertService.insertData({ name: this.name, contact: this.contact, email: this.email }).subscribe({
        next: () => alert('Insert successful!'),
        error: err => console.error('Insert failed:', err)
      });
    }
  }


}
