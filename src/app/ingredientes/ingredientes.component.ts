import { Component, Input, output, OnInit, EventEmitter, Output} from '@angular/core';
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
  @Output() agregarIngrediente = new EventEmitter<Ingrediente>();

  readonly ingredienteSeleccionado = output<Ingrediente>();

  ngOnInit(): void {
    this.ingredientesService.obtenerIngredientes().subscribe(list => this.ingredientes = list);
  }
  agregar(ing: Ingrediente){
    this.agregarIngrediente.emit(ing);


  }

}
