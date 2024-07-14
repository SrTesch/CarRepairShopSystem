import { OkPacket, OkPacketParams } from "mysql2";
import { pool } from "../config/database";
import { Car } from "../models/veiculo";

function isOkPacket(obj: any): obj is OkPacket{
    return obj && obj.constructor && obj.constructor.name === 'OkPacket';
}

const carServices ={
    showAll: async() =>{
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query("select * from cars;");
            conn.release();

            if(Array.isArray(result) && result.length != 0){
                const total = result.length;
                return {result, total}
            }else
                return ("Nada")
        }catch(error){
            console.log(error);
            throw new Error("Erro ao pegar dado dos carros")
        }
    },
    newCar: async (car : Car) =>{
        console.log("inserindo novo carro ao banco de dados...")
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query('insert into cars values (?,?,?,?,?,?,?,?);', [car.id, car.placa, car.modelo, car.marca, car.anoFab,car.eixos, car.cor, car.numFrota]);
            conn.release();

            const insertedData: Car = {...car}
            console.log(`${car.modelo} inserido com sucesso!`, insertedData);
            return {result, insertedData}
        }catch(error){
            console.log(error);
            throw new Error("Erro ao cadastrar carro");
        }
    },
    updateCar : async (car: Car)=>{

    },
    deleteCar: async (id : Number)=>{
        console.log(`Deletando veículo de id: ${id} do banco de dados`);
        try{
            const conn = await pool.getConnection();
            const result = await conn.query(`delete from cars where id = ${id}`)
            conn.release();
        }catch(error){
            console.log(error)
            throw new Error(`Erro ao deletar veículo de id: ${id}`)
        }
    }
}

export  default carServices