import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/departamentos.service';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  @ViewChild('numero') numero!: number;
  @ViewChild('nombre') nombre!: string;
  @ViewChild('localidad') localidad!: string;
  constructor(private _cdr: ChangeDetectorRef, private _ds: ServiceDepartamentos) {
  }
  async createDepart(): Promise<void> {
    let d = new Departamento(this.numero, this.nombre, this.localidad);
    console.log(d);
  }
}
