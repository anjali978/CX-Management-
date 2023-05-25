import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { SidebarrComponent } from './sidebarr/sidebarr.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  {path:'',redirectTo:'', pathMatch:'full'},
  {path:'sidebar',component:SidebarrComponent},
  {path:'view-request',component:ViewRequestComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {
    path:'myprofile',component:MyprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
