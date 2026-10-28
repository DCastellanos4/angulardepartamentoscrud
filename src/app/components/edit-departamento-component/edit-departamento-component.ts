import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/departamentos.service';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit-departamento-component',
  standalone: false,
  styleUrl: './edit-departamento-component.css',
  templateUrl: './edit-departamento-component.html',
})
export class EditDepartamentoComponent {
  public departamento!: Departamento
  public id!: string;
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('localidad') localidad!: ElementRef;
  constructor(private _cdr: ChangeDetectorRef, private _ds: ServiceDepartamentos, private _ar: ActivatedRoute, private _router: Router) {
  }
  async ngOnInit(): Promise<void> {
    this._ar.params.subscribe((params: Params) => {
      this.id = params['id']
    })
    this.departamento = await this._ds.getDepartmentByID(parseInt(this.id));
    this._cdr.detectChanges()
  }
  async editarDepartamento(): Promise<any> {
    let d = new Departamento(parseInt(this.id), this.nombre.nativeElement.value, this.localidad.nativeElement.value);
    await this._ds.updateDepartment(d);
    console.log(d);
    this._router.navigate((['/depart']))
  }
}