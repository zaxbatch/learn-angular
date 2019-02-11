import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { TemplatingComponent } from './templating/templating.component';
import { ModulesComponent } from './modules/modules.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { PlaygroundComponent } from './playground/playground.component';

const appRoutes: Routes = [
  {  path: '',      component: HomeComponent },
  {  path: 'components',      component: ComponentsComponent },
  {  path: 'templating',      component: TemplatingComponent },
  {  path: 'modules',      component: ModulesComponent },
  {  path: 'data-binding',      component: DataBindingComponent },
  {  path: 'playground',      component: PlaygroundComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComponentsComponent,
    TemplatingComponent,
    ModulesComponent,
    DataBindingComponent,
    BottomNavComponent,
    PlaygroundComponent
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
