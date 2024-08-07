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
    updateCar: async (id: number, updates: Partial<Car>) => {
        try {
            const conn = await pool.getConnection();

            const fields = Object.keys(updates);
            const values = Object.values(updates);

            if (fields.length === 0) {
                throw new Error("Nenhum campo para atualizar");
            }

            const setClause = fields.map((field) => `${field} = ?`).join(", ");
            console.log(`trying to use the clause: ${setClause}`)
            
            const query = `UPDATE Veiculo SET ${setClause} WHERE id = ?`;
            console.log("Query:", query); // Log da query
            console.log("Values:", [...values, id]); // Log dos valores

            const [result] = await conn.execute<OkPacket>(query, [...values, id]);

            conn.release();
            console.log("Tipo de resultado: ", typeof result);

            if (result.affectedRows > 0) {
                return { success: true, message: "Veículo atualizado com sucesso", affectedRows: result.affectedRows };
            } else {
                throw new Error("Erro ao atualizar Veículo");
            }
        } catch (error) {
            console.log("Erro dentro do serviço updateFunc:", error); // Log do erro
            throw new Error(`Erro ao atualizar Veículo de id: ${id}`);
        }
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