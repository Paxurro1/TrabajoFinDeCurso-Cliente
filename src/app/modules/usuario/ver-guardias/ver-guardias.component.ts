import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Guardia } from 'src/app/models/guardia';
import { FaltaService } from 'src/app/services/falta.service';

@Component({
  selector: 'app-ver-guardias',
  templateUrl: './ver-guardias.component.html',
  styleUrls: ['./ver-guardias.component.scss']
})
export class VerGuardiasComponent implements OnInit {

  guardia!: Guardia;

  constructor(
    private modalActive: NgbActiveModal,
    private faltasService: FaltaService,
  ) {
    this.faltasService.guardiaTrigger.subscribe({
      next: (data: Array<any>) => {
        this.guardia = data[0];
      },
    });
  }

  ngOnInit(): void {
  }

  async closeModal() {
    this.modalActive.close();
  }

}
