import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioformularioService {
  
  URL = 'http://localhost/API/';

  constructor(private http: HttpClient) { }
  
  listarUsuarios() {
    return this.http.get(`${this.URL}listarusuarios.php`);
  }
  
  InsercionDatos(formulario){
    return this.http.post(`${this.URL}InsertarDatos.php`, JSON.stringify(formulario))
  }
  
  
}
