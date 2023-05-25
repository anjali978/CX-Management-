import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarrComponent } from './sidebarr/sidebarr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyreqestComponent } from './myreqest/myreqest.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
// import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SidebarrComponent,
    ViewRequestComponent,
    AdminDashboardComponent,
    MyprofileComponent,
    LoginPageComponent,
    MyreqestComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    HttpClientModule,

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
