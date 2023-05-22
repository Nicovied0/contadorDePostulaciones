import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contadorDePostulaciones';
  public postulacionesHoy: number = 0;
  public postulacionLogradas: boolean = false;
  public postulacionesEnLaSemana: number = 0;
  public contadorLocal: number = 0;
  public aux: string | null = localStorage.getItem('postulaciones');
  public aux2: number = 0;

  constructor() {
    if (this.aux) {
      this.contadorLocal = parseInt(this.aux);
    }
    this.postulacionesHoy = 0;
  }

  sumar() {
    this.postulacionesHoy += 1;
    this.aux2 = parseInt(this.aux ?? '0');
    this.contadorLocal = this.aux2 + this.postulacionesHoy;
    localStorage.setItem('postulaciones', this.contadorLocal.toString());
    if (this.postulacionesHoy >= 25) {
      this.postulacionLogradas = true;
    }
  }

  restar() {
    this.postulacionesHoy -= 1;
    this.aux2 = parseInt(this.aux ?? '0');
    this.contadorLocal = this.aux2 + this.postulacionesHoy;
    localStorage.setItem('postulaciones', this.contadorLocal.toString());
    if (this.postulacionesHoy >= 25) {
      this.postulacionLogradas = true;
    }
  }

  clear() {
    localStorage.removeItem('postulaciones');
    location.reload();
  }
}
