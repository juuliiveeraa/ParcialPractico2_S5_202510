import { Ingrediente } from './ingrediente';

export class IngredienteReceta extends Ingrediente {
  cantidad: number;

  constructor(cantidad: number, id: number,
        nombre: string,
        descripcion: string, calorias: number,
        img: string) {
            super(id, nombre, descripcion, calorias, img);
        this.cantidad = cantidad;
    }  

    mas():void{
        this.cantidad++;
    }

    getCantidad():number{
        return this.cantidad;
    }
}
