import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PanelComponent } from './components/panel/panel.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EcoloComponent } from './components/ecolo/ecolo.component';
import { AuthguardGuard } from './authguard.guard';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  { path: 'about' , component: AboutComponent},
  { path: 'servicio', component: ServicioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'formulario', component: FormularioComponent},  
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegisterComponent},
  { path: 'ecolo', component: EcoloComponent },
  { path: 'panel', component: PanelComponent, canActivate: [AuthguardGuard] },
  { path: 'producto', component: ProductoComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
