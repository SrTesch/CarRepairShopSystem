export class Funcionario{
    public id?:Number;
    public nome?: string;
    public matricula?: string;
    public funcao?: string;

    constructor(id:Number, nome: string, matricula: string, funcao: string){
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.funcao = funcao;
    }
}