export abstract class Producto {
    private descripcion : String;

    constructor(descripcion : string) {
        this.descripcion = descripcion;
    }

    public abstract precio(): number;

    public abstract stock(): number;
}