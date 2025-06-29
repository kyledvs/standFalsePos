import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  agendaForm: FormGroup;
  agendas: any;
  constructor(private AuthServiceService: AuthServiceService, private fb: FormBuilder) {
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

}
