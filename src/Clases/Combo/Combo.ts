import { Producto } from "../Producto/Producto";

export class Combo extends Producto {

    private productos : Array<Producto>;

    constructor (descripcion : string){
        super(descripcion);
        this.productos = [];
    }

    public AgregarProducto(producto: Producto){
        this.productos.push(producto);
    }

    public precio(): number {
        return this.productos.reduce((preciofinal, productos) => preciofinal + productos.precio(), 0);
    }
    public stock(): number {
        const productoConMenorStock = this.productos.reduce((p1, p2) => p1.stock() < p2.stock() ? p1 : p2);
        return productoConMenorStock.stock();
    }
}

