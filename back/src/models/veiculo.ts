export class Car{
    public id?:Number;
    public placa?:string;
    public modelo?:string;
    public marca?: string;
    public anoFab?: Number;
    public eixos?: Number;
    public cor?: string;
    public numFrota?: Number;

    constructor(id:Number, placa:string, modelo:string, marca: string, anoFab: Number, eixos: Number, cor: string, numFrota: Number){
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.anoFab = anoFab;
        this.eixos = eixos;
        this.cor = cor;
        this.numFrota = numFrota;
    }
}