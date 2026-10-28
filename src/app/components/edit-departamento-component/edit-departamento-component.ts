import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceDepartamentos } from '../../services/departamentos.service';
import { Departamento } from '../../models/departamento';
@Component({
  selector: 'app-edit-departamento-component',
  standalone: false,
  styleUrl: './edit-departamento-component.css',
  templateUrl: './edit-departamento-component.html',
})
export class EditDepartamentoComponent {
  public departamentos!: Array<Departamento>
  constructor(private _cdr: ChangeDetectorRef, private _ds: ServiceDepartamentos) {
  }
  async ngOnInit(): Promise<void> {
    this.departamentos = await this._ds.getDepartamentos();
    this._cdr.detectChanges();
  }
}