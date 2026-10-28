import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/departamentos.service';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  styleUrl: './departamentos-component.css',
  templateUrl: './departamentos-component.html',
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>
  constructor(private _cdr: ChangeDetectorRef, private _ds: ServiceDepartamentos) {

  }
  async ngOnInit(): Promise<void> {
    this.departamentos = await this._ds.getDepartamentos();
    this._cdr.detectChanges()
  }
}
