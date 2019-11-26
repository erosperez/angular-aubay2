import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aub-saludorx',
  templateUrl: './saludorx.component.html',
  styleUrls: ['./saludorx.component.css']
})
export class SaludorxComponent implements OnInit {
  
  fcNombre:FormControl;

  constructor() { }

  ngOnInit() {
    this.fcNombre= new FormControl();
  
  }

  onClickBorrar(){
    this.fcNombre.reset();
  }
}
