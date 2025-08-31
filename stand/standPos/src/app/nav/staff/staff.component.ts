import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
    // Remove from pendingEmployees
    this.firestore.collection('pendingEmployees').doc(employee.id).delete().then(() => {
      // Add to superUsers
      this.firestore.collection('superUsers').doc(employee.id).set(employee).then(() => {
        // Optionally, remove from local list to update UI
        this.employeePendingList = this.employeePendingList.filter(e => e.id !== employee.id);
      });
    });
  }

  promoteToAdminUser(employee: any) {
    this.firestore.collection('pendingEmployees').doc(employee.id).delete().then(() => {
      this.firestore.collection('adminUsers').doc(employee.id).set(employee).then(() => {
        this.employeePendingList = this.employeePendingList.filter(e => e.id !== employee.id);
      });
    });
  }

  promoteToAssistantUser(employee: any) {
    this.firestore.collection('pendingEmployees').doc(employee.id).delete().then(() => {
      this.firestore.collection('assistantUsers').doc(employee.id).set(employee).then(() => {
        this.employeePendingList = this.employeePendingList.filter(e => e.id !== employee.id);
      });
    });
  }

  discardEmployee(employee: any) {
    this.firestore.collection('pendingEmployees').doc(employee.id).delete().then(() => {
      this.employeePendingList = this.employeePendingList.filter(e => e.id !== employee.id);
    });
  }

}
