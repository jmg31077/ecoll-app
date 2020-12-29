import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ServicioformularioService } from './servicioformulario.service';


declare var funcion1:any;
declare var funcion2:any;
declare var funcion3:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title="Hola Angular";
  formulario: FormGroup;
  submitted = false;
  titulo = 'crear formulario';
  Autor = 'Autor: Ingeniero Jesus Machicado';
  formulario1=null;
  
  constructor(private servicioformularioService:ServicioformularioService, private formBuilder: FormBuilder, private http:HttpClient) { }
  
  onClick1(){
    funcion1();
  }
  onClick2(){
    funcion2();
  }
  onClick3(){
    funcion3();
  }
  

  ngOnInit() {
    
    
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      postre: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
      
    });
    
    this.listarUsuarios();
  }
  
  listarUsuarios() {
    this.servicioformularioService.listarUsuarios().subscribe(
      datos => this.formulario1 = datos
    );
  }
  hayRegistros() {
    if(this.formulario1 == null){
      return false;
    } else {
      return true;
    }
  }
  
  get f() { return this.formulario.controls; }
  
  onSubmit() { //funcion de formulario
              
    this.submitted = true;
    
    if(this.formulario.invalid){
      return;
    }
    //  alert('Mensaje enviado !'+JSON.stringify(this.formulario.value))
      
      this.InsercionDatos();
  }
  
  InsercionDatos(){
    this.servicioformularioService.InsercionDatos(this.formulario.value).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          
        }
      }
    );
  }

}
