import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { LocalnewsComponent } from './localnews/localnews.component';
import { ForeignewsComponent } from './foreignews/foreignews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'news', component:NewsComponent},
  {path:'localnews', component:LocalnewsComponent},
  {path:'foreignews', component:ForeignewsComponent},
  {path:'sportsnews', component:SportsnewsComponent},
  {path:'weather', component:WeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
