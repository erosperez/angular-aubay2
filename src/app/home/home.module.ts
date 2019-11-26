import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludorxComponent } from './saludorx/saludorx.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';



@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludorxComponent, SaludoRefComponent],
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
