import { first, firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class ServiceDepartamentos {
    url = environment.urlApiDepartamentos
    constructor(private _http: HttpClient) {
    }
    async getDepartamentos(): Promise<Departamento[]> {
        let request = "api/departamentos";
        return firstValueFrom(this._http.get<Departamento[]>(this.url + request));
    }
    async createDepartamento(d: Departamento): Promise<any> {
        let request = "api/departamentos";
        //Convertimos el objeto recibio a JSON
        let json = JSON.stringify(d);
        //Creamos un objeto header para el type
        let header = new HttpHeaders
        header = header.set("content-type", "application/json")
        await firstValueFrom(this._http.post(this.url + request, json, { headers: header }))
    }
    async getDepartmentByID(id: number): Promise<Departamento> {
        let request = "api/departamentos/" + id;
        return firstValueFrom(this._http.get<Departamento>(this.url + request));
    }
    async updateDepartment(d: Departamento): Promise<any> {
        let request = "api/departamentos";
        let header = new HttpHeaders().set("content-type","application/json")
        let json = JSON.stringify(d);
        return firstValueFrom(this._http.put(this.url + request, json, { headers: header }))
    }
}