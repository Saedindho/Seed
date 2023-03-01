import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'


//mat table
import { MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatExpansionModule} from '@angular/material/expansion'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
//import { SigninComponent } from './signin/signin.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import  { MatInputModule}   from '@angular/material/input'
import  { MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { ContenttableComponent } from './contenttable/contenttable.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import { AboutComponent } from './about/about.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RegisterComponent,
    //SigninComponent,
    LoginComponent,
    ContentComponent,
    ContenttableComponent,
    AboutComponent,
   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
   ReactiveFormsModule,
   MatButtonModule,
   MatSelectModule,
   MatCardModule,
   MatToolbarModule,
   MatSortModule,
   MatTableModule,
   MatPaginatorModule,
   MatIconModule,
   MatExpansionModule,
   MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
