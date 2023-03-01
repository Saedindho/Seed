import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { ContenttableComponent } from './contenttable/contenttable.component';
import { HomeComponent } from './home/home.component';
import { MyguardGuard } from './interceptor/myguard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   {path:'',redirectTo:'/login',pathMatch:'full'},
  { path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin',component:AdminComponent,canActivate:[ MyguardGuard]},
  {path:'home',component:HomeComponent},
  {path:'content',component:ContentComponent},
  {path:'table',component:ContenttableComponent,canActivate:[ MyguardGuard]},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
