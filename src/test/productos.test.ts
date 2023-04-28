import { before } from "node:test";
import { Combo } from "../Clases/Combo/Combo";
import { Producto } from "../Clases/Producto/Producto";
import { ProductoSimple } from "../Clases/Producto/Producto Simple";

var unaMoto;
var unGuante;
var unPioloto;
var unCoscu;
var ComboCompleto : Combo;

beforeEach(() => {
    unaMoto = new ProductoSimple(400, 2, "Moto");
    unGuante = new ProductoSimple(25, 20, "Guante");
    unPioloto = new ProductoSimple(30, 10, "Piloto");
    unCoscu = new ProductoSimple(75, 15, "Casco");
    ComboCompleto = new Combo("Guantes + Casco + Guante");

    ComboCompleto.AgregarProducto(unaMoto);
    ComboCompleto.AgregarProducto(unCoscu);
    ComboCompleto.AgregarProducto(unGuante);
})

test("PrecioComboes500", () => {
    expect(ComboCompleto.precio()).toBe(500);  
})

test("StockComboes500", () => {
    expect(ComboCompleto.stock()).toBe(2);  
});