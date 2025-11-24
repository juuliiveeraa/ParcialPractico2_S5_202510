import { IngredienteReceta } from './IngredienteReceta';
import { Ingrediente } from './ingrediente';

export class Receta {
  receta: IngredienteReceta[]=[];
  totalCalorias: number = 0;

    constructor() { 
        this.receta = [];
        this.totalCalorias = 0;
    }

    agregarIngrediente(ing: Ingrediente) {
        
        let ingredienteReceta: IngredienteReceta= new IngredienteReceta(1,ing.id, ing.nombre,  ing.descripcion, ing.calorias, ing.imagen);
        const existe = this.receta.find(ir => ir.id === ing.id);
        if (existe) {

          this.duplicarIngrediente(ingredienteReceta);
          
        }
        else{
        this.receta.push(ingredienteReceta);
        this.totalCalorias += ing.calorias;}
      }

      duplicarIngrediente(ing: IngredienteReceta) {
        ing.mas();
        this.totalCalorias += ing.calorias;
      }

      eliminarIngrediente(ing: IngredienteReceta) {
        const index = this.receta.findIndex(ir => ir.id === ing.id);
        if (index !== -1) {
          const ingredienteReceta = this.receta[index];
          this.totalCalorias -= ingredienteReceta.calorias * ingredienteReceta.getCantidad();
          this.receta.splice(index, 1);
        }}
}