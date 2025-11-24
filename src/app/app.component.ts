import { Component } from '@angular/core';
import { IngredientesService } from './servicio/ingredientes.service';
import { Ingrediente } from './modelo/ingrediente';
import { Receta } from './modelo/receta';
import { IngredienteReceta } from './modelo/ingredienteReceta';

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
  seleccion: { ingrediente: Ingrediente, cantidad: number }[] = [];

  constructor(private service: IngredientesService) {}

  ngOnInit() {
    this.service.obtenerIngredientes().subscribe({
      next: data => this.ingredientes = data
    });
  }
  

  agregarIngrediente(ing: Ingrediente) {
    const e = this.seleccion.find(x => x.ingrediente.id === ing.id);
    if (e) {
      e.cantidad++;
    } else {
      this.seleccion.push({ ingrediente: ing, cantidad: 1 });
    }
  }
  

  eliminarIngrediente(ing: Ingrediente) {
  const idx = this.seleccion.findIndex(x => x.ingrediente.id === ing.id);
    if (idx >= 0) {
      this.seleccion[idx].cantidad--;
      if (this.seleccion[idx].cantidad <= 0) this.seleccion.splice(idx, 1);
    }
  }

  duplicarIngrediente(ing: IngredienteReceta) {
    this.receta.duplicarIngrediente(ing);
  }

}
