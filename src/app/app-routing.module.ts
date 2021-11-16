import { UserDetailsComponent } from './user-details/user-details.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component:  HomeComponent},
  { path: 'product', component:  ProductComponent},
  { path: 'marketplace', component:  MarketplaceComponent},
  { path: 'userdetails', component:  UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
