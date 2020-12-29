import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ServicioformularioService } from './components/formulario/servicioformulario.service';
import { PanelComponent } from './components/panel/panel.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EcoloComponent } from './components/ecolo/ecolo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicioComponent,
    ContactComponent,    
    FormularioComponent,
     PanelComponent,
      LoginComponent,
       RegisterComponent,
        EcoloComponent,
         ProductoComponent,
            InicioComponent,
            DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // UsuariosService,
    ServicioformularioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
