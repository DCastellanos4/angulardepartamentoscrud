import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/departamentos.service';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  @ViewChild('numero') numero!: ElementRef;
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('localidad') localidad!: ElementRef;
  public mensaje!: string;
  constructor(private _cdr: ChangeDetectorRef, private _ds: ServiceDepartamentos, private _router: Router) {
  }
  async createDepart(): Promise<void> {
    let d: Departamento = new Departamento(parseInt(this.numero.nativeElement.value), this.nombre.nativeElement.value, this.localidad.nativeElement.value);
    console.log(d);
    let response = await this._ds.createDepartamento(d);
    this._router.navigate((['/depart']))
  }
}
