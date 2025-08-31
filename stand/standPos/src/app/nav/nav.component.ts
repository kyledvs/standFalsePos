import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GlobalDataService } from '../services/global-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DevelopmentOverlayComponent } from '../development-overlay/development-overlay.component';
import { BasicAuthService } from '../services/basic-auth.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {


  user: any;




  globAgendaData: any[] = [];



  ngOnInit(): void {
    this.globService.getCachedData('agenda').subscribe((res) => {
      this.globAgendaData = res;
      console.log(this.globAgendaData);
    });

    const stored = sessionStorage.getItem('user');
    if (stored) {
      this.user = JSON.parse(stored);
    }
  }

 




  dataF!: any[];

  activeMenu: string = "Dashboard";

  constructor(
    private firestore: AngularFirestore,
    public router: Router,
    private route: ActivatedRoute,
    private firestoreService: AuthServiceService,
    private globService: GlobalDataService,
    private dialog: MatDialog, // <-- Inject MatDialog
    private bAuth: BasicAuthService,
  ) {
    

  }
  private breakpointObserver = inject(BreakpointObserver);



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

  toDash() {
    this.router.navigate(['dashh'], { relativeTo: this.route });;
    this.activeMenu = "Dashboard";

  }

  toDayEnd() {
    this.router.navigate(['dayEnd'], { relativeTo: this.route });;
    this.activeMenu = "Day";

  }

  toAgenda() {
    this.router.navigate(['agenda'], { relativeTo: this.route });;

    this.activeMenu = "Agenda";
  }

  toClients() {
    this.router.navigate(['clientss'], { relativeTo: this.route });;
    this.activeMenu = "Clients";

  }

  toInterna() {
    this.router.navigate(['internCom'], { relativeTo: this.route });;
    this.activeMenu = "Interna";

  }

  toStaff() {
    this.router.navigate(['staff'], { relativeTo: this.route });;
    this.activeMenu = "Staff";

  }

  toInvoicing() {
    this.router.navigate(['invoicing'], { relativeTo: this.route });;
    this.activeMenu = "Invoicing";

  }

  toChecklists() {
    this.router.navigate(['procedList'], { relativeTo: this.route });;
    this.activeMenu = "Checklists";

  }

  toInventory() {

    this.router.navigate(['inventor'], { relativeTo: this.route });;
    this.activeMenu = "Inventory";

  }

  toSuppliers() {

    this.router.navigate(['supplier'], { relativeTo: this.route });;
    this.activeMenu = "Suppliers";

  }

  toReparo() {

    this.router.navigate(['repairs'], { relativeTo: this.route });;
    this.activeMenu = "repairs";

  }

  openDeveloper() {
   console.log('devbutton')
    this.router.navigate(['devOver'], { relativeTo: this.route });;
    this.activeMenu = "devOver";
  }

  logOut() {

    this.bAuth.logout()

  }

}
