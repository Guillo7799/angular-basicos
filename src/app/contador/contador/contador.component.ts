import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ newBase }}</strong>
    </h3>
    <button (click)="acumular(base)">+ {{ base }}</button>

    <!-- <span>{{ base }}</span> -->

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class contadorComponent {
  titulo: string = 'Contador App';
  // numero: number = 10;
  base: number = 5;
  newBase: number = 5;

  acumular(base: number) {
    this.newBase += base;
  }
}
