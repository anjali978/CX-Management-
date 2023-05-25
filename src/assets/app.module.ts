import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { ViewRequestComponent } from './admin/view-request/view-request.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderfooterComponent } from './headerfooter/headerfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewRequestComponent,
    SidebarComponent,
    HeaderfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderfooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
