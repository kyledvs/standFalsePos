import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  dataF!: any[];

  activeMenu: string = "Dashboard";

  constructor(public router: Router, private route: ActivatedRoute, private firestoreService: AuthServiceService) {

  }
  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.firestoreService.getData('agenda').subscribe(data => {
      this.dataF = data; });
    console.log("nav componentfgyj", this.dataF)}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

  toDash() {
    this.router.navigate(['hub'], { relativeTo: this.route });;
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

  toChecklists() {
    this.router.navigate(['checklists'], { relativeTo: this.route });;
    this.activeMenu = "Checklists";

  }

}
