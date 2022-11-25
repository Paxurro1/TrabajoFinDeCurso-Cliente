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
  page = 1;
  count = 0;
  pageSize = 1;
  pageSizes = [1, 2, 3, 4, 5, 6];

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

  handlePageChange(event: number): void {
    this.page = event;
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

}
