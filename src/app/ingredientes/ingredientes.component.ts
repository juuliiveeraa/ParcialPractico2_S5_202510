import { Component, Input, output, OnInit } from '@angular/core';
import { IngredientesService } from '../servicio/ingredientes.service';
import { Ingrediente } from '../modelo/ingrediente';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css'],
  standalone: false
})
export class IngredientesComponent {

  constructor(private ingredientesService: IngredientesService) {}

  @Input() ingredientes: Ingrediente[] = [];

  readonly ingredienteSeleccionado = output<Ingrediente>();

  agregar(ing: Ingrediente) {
    this.ingredienteSeleccionado.emit(ing);
  }

}
