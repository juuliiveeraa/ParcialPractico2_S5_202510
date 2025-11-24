import { Component } from '@angular/core';
import { IngredientesService } from './servicio/ingredientes.service';
import { Ingrediente } from './modelo/ingrediente';
import { Receta } from './modelo/receta';
import { IngredienteReceta } from './modelo/IngredienteReceta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false

})
export class AppComponent {
  title = 'frontend_examen2';

  ingredientes: Ingrediente[] = [];
  receta: Receta = new Receta();

  constructor(private service: IngredientesService) {}

  ngOnInit() {
    this.service.obtenerIngredientes().subscribe({
      next: data => this.ingredientes = data
    });
  }
  

  agregarIngrediente(ing: Ingrediente) {
    this.receta.agregarIngrediente(ing);
  }
  

  eliminarIngrediente(ing: IngredienteReceta) {
  this.receta.eliminarIngrediente(ing);
  }

  duplicarIngrediente(ing: IngredienteReceta) {
    this.receta.duplicarIngrediente(ing);
  }

}
