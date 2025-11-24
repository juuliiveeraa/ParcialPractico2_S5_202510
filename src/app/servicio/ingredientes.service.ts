import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingrediente } from '../modelo/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private url = 'http://localhost:8080/ingredientes';

  constructor(private http: HttpClient) { }

  obtenerIngredientes(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(this.url);
  }
}
