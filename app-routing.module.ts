import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trade1Component } from './trade1/trade1.component';
import { ParamsComponent } from './params/params.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { LogComponent } from './log/log.component';
import { LgtComponent } from './lgt/lgt.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'trade', component:Trade1Component},
  {path:'param',component:ParamsComponent},
  {path:'header',component:HeaderComponent},
  {path:'client',component:ClientComponent},
  {path:'log',component:LogComponent},
  {path:'lgt',component:LgtComponent},
  {path:'add',component:AddComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
