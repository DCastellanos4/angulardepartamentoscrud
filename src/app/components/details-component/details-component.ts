import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: false,
  styleUrl: './details-component.css',
  templateUrl: './details-component.html',
})

export class DetailsComponent implements OnInit {
  public departamento!: Departamento;
  constructor(private _cdr: ChangeDetectorRef, private _activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.departamento = new Departamento(parseInt(params['id']), params['nombre'], params['localidad']);
      this._cdr.detectChanges()
    })
  }
}
