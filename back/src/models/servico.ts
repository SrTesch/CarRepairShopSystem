export class Serviço{
    public id? : Number;
    public idVeiculo?: Number;
    public idFunc?: Number;
    public dataInicio?: Date;
    public previsao?: Date;
    public dataFim?: Date;
    public pecas?: string;
    public desc?: string;
    public valorTotal?: Number;
    public tipo?: string;
    public status?: string;
    
    constructor(id: Number, idVeiculo: Number, idFunc: Number, dataInicio: Date, previsao: Date, dataFim: Date, pecas: string, desc: string, valorTotal: Number,tipo: string, status: string ){
        this.id = id;
        this.idVeiculo = idVeiculo;
        this.idFunc = idFunc;
        this.dataInicio = dataInicio;
        this.previsao = previsao;
        this.dataFim = dataFim;
        this.pecas = pecas;
        this.desc = desc;
        this.valorTotal = valorTotal;
        this.tipo = tipo;
        this.status = status;
    }
}