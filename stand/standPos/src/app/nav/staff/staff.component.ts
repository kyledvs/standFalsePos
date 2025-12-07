import { Component, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CreateUserDialogComponent } from '../../globaldialogs/create-user-dialog/create-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {

  employeePendingList: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore.collection('employeePending').valueChanges({ idField: 'id' })
      .subscribe(data => {
        this.employeePendingList = data;
      });
  }

  promoteToSuperUser(employee: any) {
    this.firestore.collection('employeePending').doc(employee.id).delete().then(() => {
      this.firestore.collection('superUsers').doc(employee.name).set(employee);
    });
  }

  promoteToAdminUser(employee: any) {
    this.firestore.collection('employeePending').doc(employee.id).delete().then(() => {
      this.firestore.collection('adminUsers').doc(employee.name).set(employee);
    });
  }

  promoteToAssistantUser(employee: any) {
    this.firestore.collection('employeePending').doc(employee.id).delete().then(() => {
      this.firestore.collection('assistantUsers').doc(employee.name).set(employee);
    });
  }

  discardEmployee(employee: any) {
    this.firestore.collection('employeePending').doc(employee.id).delete();
  }


    readonly dialog = inject(MatDialog);
  
    openCreateEmployee(): void {
      this.dialog.open(CreateUserDialogComponent);
      }

}
