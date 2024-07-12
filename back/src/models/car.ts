export class Car{
    public id?:number;
    public placa?:string;
    public modelo?:string;
    public marca?: string;

    constructor(id:number, placa:string, modelo:string, marca: string){
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }
}