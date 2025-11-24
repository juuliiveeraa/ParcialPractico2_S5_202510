import { Component, EventEmitter, Input, Output, output} from '@angular/core';
import { IngredienteReceta } from '../modelo/ingredienteReceta';
import { Ingrediente } from '../modelo/ingrediente';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
  standalone: false
})

export class RecetaComponent {
  @Input() seleccion: {ingrediente: Ingrediente, cantidad: number} []=[];
  @Output() eliminar = new EventEmitter<Ingrediente>();

  getCaloriasIngrediente(item: {ingrediente: Ingrediente, cantidad: number}){
    return item.ingrediente.calorias * item.cantidad;
  }
  getCaloriasTotales(){
    return this.seleccion.reduce((s,i) => s + this.getCaloriasIngrediente(i), 0);
  }
  agregarOtro(item: { ingrediente: Ingrediente, cantidad: number }) {
    item.cantidad++;
  }


}
