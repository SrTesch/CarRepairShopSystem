import { Request, Response } from "express";
// import { Funcionario } from "../models/funcionario";
import funcServices from "../services/funcServices";
import { Funcionario } from "../models/funcionario";

const funcController = {
    showAll : async (_req: Request, res: Response)=>{
        try{
            const Funcs = await funcServices.showAll();
            if(Funcs == "Nada")
                return res.status(400).json({msg:"Não há nenhum funcionário cadastrado"});

            return res.status(200).json(Funcs);
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:"Erro ao pegar dados dos funcionários"});
        }
    },
    newFunc : async (req: Request, res: Response)=>{
        try{
            const {nome, matricula, funcao } = req.body;
            const funcInstance = new Funcionario( 0, nome, matricula, funcao);
            const Func = await funcServices.newFunc(funcInstance);
            res.status(200).json({msg:`${funcInstance.nome} cadastrado com sucesso!`})
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:"Erro ao inserir novo funcionário"});
        }
    },
    updateFunc: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const updates: Partial<Funcionario> = req.body;

            const result = await funcServices.updateFunc(Number(id), updates);

            if (result.success) {
                return res.status(200).json({ msg: "Funcionário atualizado com sucesso", affectedRows: result.affectedRows });
            } else {
                return res.status(400).json({ msg: "Erro ao atualizar funcionário" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "Erro ao atualizar funcionário" });
        }
    },
    deleteFunc: async(req: Request, res: Response) =>{
        try{
            const { id } = req.params;
            const result = await funcServices.deleteFunc(Number(id));
            if(result.success)
                return res.status(200).json({msg: "Funcionário deletado com sucessso", affectedRows: result.affectedRows});
            else
                return res.status(400).json({msg:"Erro ao deletar funcionário"})
        }catch(error){
            console.log(error);
            return res.status(500).json({msg: "Erro ao deletar funcionário"})
        }
    }
}

export default funcController;