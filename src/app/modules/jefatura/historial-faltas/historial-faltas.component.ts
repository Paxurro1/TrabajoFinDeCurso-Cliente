import { Component, OnInit } from '@angular/core';
import { faltaResponse } from 'src/app/models/faltaRespose';
import { FaltaService } from 'src/app/services/falta.service';

@Component({
  selector: 'app-historial-faltas',
  templateUrl: './historial-faltas.component.html',
  styleUrls: ['./historial-faltas.component.scss']
})
export class HistorialFaltasComponent implements OnInit {

  faltas: faltaResponse[] = [];

  constructor(
    private faltasService: FaltaService,
  ) { }

  ngOnInit(): void {
    this.getHistorialTareas();
  }

  getHistorialTareas() {
    this.faltasService.getHistorialTareas().subscribe((response) => {
      this.faltas = response;
      console.log(this.faltas);
    });
  }

}
