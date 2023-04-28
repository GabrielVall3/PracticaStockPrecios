import { Producto } from "./Producto";

export class ProductoSimple extends Producto {
    protected precio_ : number;
    protected stock_ : number;

    constructor (precio : number, stock: number, descripcion : string) {
        super(descripcion);
        this.precio_ = precio;
        this.stock_ = stock;
}

    public precio() : number{
        return this.precio_;
    }
    public stock(): number {
        return this.stock_;
    }

} 