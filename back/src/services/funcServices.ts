import { OkPacket } from "mysql2";
import { pool } from "../config/database";
import { Funcionario } from "../models/funcionario";

// function isOkPacket(obj: any): obj is OkPacket{
//     return obj && obj.constructor && obj.constructor.name === 'OkPacket';
// }

const funcServices ={
    showAll: async() =>{
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query("select * from Funcionario;");
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
    newFunc: async (func : Funcionario) =>{
        console.log("inserindo novo Funcionário ao banco de dados...")
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.query('insert into Funcionario values (null,?,?,?);', [ func.nome, func.matricula, func.funcao]);
            conn.release();

            const insertedData: Funcionario = {...func};

            console.log(`${func.nome} inserido com sucesso!`, insertedData);
            return {result, insertedData}

        }catch(error){
            console.log(error);
            throw new Error("Erro ao cadastrar carro");
        }
    },
    updateFunc: async (id: number, updates: Partial<Funcionario>) => {
        try {
            const conn = await pool.getConnection();

            const fields = Object.keys(updates);
            const values = Object.values(updates);

            if (fields.length === 0) {
                throw new Error("Nenhum campo para atualizar");
            }

            const setClause = fields.map((field) => `${field} = ?`).join(", ");
            console.log(`trying to use the clause: ${setClause}`)
            
            const query = `UPDATE Funcionario SET ${setClause} WHERE id = ?`;
            console.log("Query:", query); // Log da query
            console.log("Values:", [...values, id]); // Log dos valores

            const [result] = await conn.execute<OkPacket>(query, [...values, id]);

            conn.release();
            console.log("Tipo de resultado: ", typeof result);

            if (result.affectedRows > 0) {
                return { success: true, message: "Funcionário atualizado com sucesso", affectedRows: result.affectedRows };
            } else {
                throw new Error("Erro ao atualizar funcionário");
            }
        } catch (error) {
            console.log("Erro dentro do serviço updateFunc:", error); // Log do erro
            throw new Error(`Erro ao atualizar funcionário de id: ${id}`);
        }
    }
    ,
    deleteFunc: async (id : Number)=>{
        console.log(`Deletando veículo de id: ${id} do banco de dados`);
        try{
            const conn = await pool.getConnection();
            const [result] = await conn.execute<OkPacket>(`delete from Funcionario where id = ?;`, [id])
            conn.release();
            if(result.affectedRows > 0)
                return {success:true, message: "Funcionário deletado com sucesso", affectedRows: result.affectedRows};
            else
                throw new Error("Erro ao deletar funcionário");
        }catch(error){
            console.log(error)
            throw new Error(`Erro ao deletar funcionario de id: ${id}`)
        }
    }
}

export  default funcServices