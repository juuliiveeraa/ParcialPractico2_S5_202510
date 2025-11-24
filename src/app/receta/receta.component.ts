import { Component, Input, output} from '@angular/core';
import { Receta } from '../modelo/Receta';
import { IngredienteReceta } from '../modelo/IngredienteReceta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
  standalone: false
})

export class RecetaComponent {

  @Input() receta: Receta= new Receta();

  readonly agregarIngrediente = output<IngredienteReceta>();
  readonly ingredienteEliminado = output<IngredienteReceta>();

  eliminar(ing: IngredienteReceta) {
    this.ingredienteEliminado.emit(ing);
  } 

  agregarOtro(ing: IngredienteReceta) {
    this.agregarIngrediente.emit(ing);
  }


}
