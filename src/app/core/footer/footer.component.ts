import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor:string;
  fecha:string;

  constructor() { }

  ngOnInit() {
    this.autor= 'Eros Pérez Álvarez'
    this.fecha= new Date().toLocaleDateString();
  }

}
