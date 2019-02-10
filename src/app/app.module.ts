import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';

const appRoutes: Routes = [
  {  path: '',      component: HomeComponent },
  {  path: 'components',      component: ComponentsComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComponentsComponent
  ],
  imports: [
    RouterModule.forRoot(
       appRoutes,
       { enableTracing: true } 
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
