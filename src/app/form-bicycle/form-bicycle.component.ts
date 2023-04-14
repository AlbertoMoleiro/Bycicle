import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/Bicicleta';
@Component({
  selector: 'app-form-bicycle',
  templateUrl: './form-bicycle.component.html',
  styleUrls: ['./form-bicycle.component.css']
})
export class FormBicycleComponent {
  color: string = 'Rojo';
  marca: string = 'Bianchi';
  pinhones: 1|2|3|4|5|6|7 = 1;
  platos: 1|2|3 = 1;
  electrica: boolean = false;
  velocidad: number = 0;
  bicicleta: Bicicleta = new Bicicleta(this.color,this.marca, this.pinhones, this.platos, this.electrica);
  show: boolean = false;
  constructor() { }

  showData() {
    this.bicicleta.color = this.color;
    this.bicicleta.marca = this.marca;
    this.bicicleta.pinhones = this.pinhones;
    this.bicicleta.platos = this.platos;
    this.bicicleta.electrica = this.electrica;
    this.show = true;

  }


}
