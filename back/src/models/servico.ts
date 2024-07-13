export class Serviço{
    public id? : Number;
    public valor?: Number;
    public dataHora?: Date;
    public idMecanico?: Number;
    public idCar?: Number;
    public tipo?: String;
    
    constructor(id: Number, valor: Number, dataHora: Date, idMecanico: Number, idCar: Number, tipo: String){
        this.id = id;
        this.valor = valor;
        this.dataHora = dataHora;
        this.idMecanico = idMecanico;
        this.idCar = idCar;
        this.tipo = tipo;
    }
}