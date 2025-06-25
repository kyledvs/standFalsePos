import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GlobalDataService } from '../services/global-data.service';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {



  globAgendaData: any[] = [];



  ngOnInit(): void {
    this.globService.getCachedData('agenda').subscribe((res) => {
      this.globAgendaData = res;
      console.log(this.globAgendaData);
    });
  }

 




  dataF!: any[];

  activeMenu: string = "Dashboard";

  constructor(private firestore: AngularFirestore, public router: Router, private route: ActivatedRoute, private firestoreService: AuthServiceService, private globService: GlobalDataService ) {
    

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

  toChecklists() {
    this.router.navigate(['procedList'], { relativeTo: this.route });;
    this.activeMenu = "Checklists";

  }

  toInventory() {

    this.router.navigate(['inventor'], { relativeTo: this.route });;
    this.activeMenu = "Inventory";

  }

  toReparo() {

    this.router.navigate(['repairs'], { relativeTo: this.route });;
    this.activeMenu = "repairs";

  }

}
