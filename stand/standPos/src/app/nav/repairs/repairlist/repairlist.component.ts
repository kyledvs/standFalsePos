import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repairlist',
  templateUrl: './repairlist.component.html',
  styleUrl: './repairlist.component.css'
})
export class RepairlistComponent implements OnInit {

  reparos$!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.reparos$ = this.firestore.collection('reparo').valueChanges();
  }


  reparos: any[] = [];
  displayedColumns: string[] = ['jobId', 'status', 'technician', 'date'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit() {
    this.firestore.collection('reparo').valueChanges().subscribe(data => {
      if (data.length > 0) {
        this.reparos = data;
        this.displayedColumns = Object.keys(data[0] as object); // 💡 Get keys from first doc
        this.dataSource = new MatTableDataSource(this.reparos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
