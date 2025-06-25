import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from '../environment';


import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashComponent } from './nav/dash/dash.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { AgendaComponent, } from './nav/agenda/agenda.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import { getFirestore, provideFirestore,  } from '@angular/fire/firestore';
import { NewAgendaDialogComponent } from './nav/agenda/new-agenda-dialog/new-agenda-dialog.component';
import { ChecklistsComponent } from './nav/checklists/checklists.component';
import { NewChecklistDialogComponent } from './nav/checklists/new-checklist-dialog/new-checklist-dialog.component';
import { SplashComponent } from './splash/splash.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InternacomsComponent } from './nav/internacoms/internacoms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadrepairxlsComponent } from './nav/repairs/uploadrepairxls/uploadrepairxls.component';
import { RepairsComponent } from './nav/repairs/repairs.component';
import { RepairlistComponent } from './nav/repairs/repairlist/repairlist.component';



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    AgendaComponent,
    ChecklistsComponent,
    SplashComponent,
    InternacomsComponent,
    RepairsComponent,
    UploadrepairxlsComponent,
    RepairlistComponent,
    
    

    
  ],
  imports: [

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    MatButton, 
    MatTooltip,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,


    
    
  ],
  providers: [
    
    
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }



