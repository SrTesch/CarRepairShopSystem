import { Request, Response } from "express";
import { Car } from "../models/veiculo";
import carServices from "../services/carServices";

const carController = {
    showAll : async (_req: Request, res: Response)=>{
        try{
            const Cars = await carServices.showAll();
            if(Cars == "Nada")
                return res.status(400).json({msg:"Não ha nenhum carro cadastrado"});

            return res.status(200).json(Cars);
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:"Erro ao pegar dados dos carros"});
        }
    },
    newCar: async (req: Request, res: Response)=>{
        try{
            const {id, placa, modelo, marca, anoFab, eixos, cor, numFrota} = req.body;
            const carInstance = new Car(id, placa, modelo, marca, anoFab, eixos, cor, numFrota);
            const newCar = await carServices.newCar(carInstance);
            res.status(201).json(newCar);
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:"Erro ao tentar inserir este carro"})
        }
    },
    updateCar: async (req: Request, res: Response)=>{
        try{
            const id = req.params;
            const updates: Partial<Car> = req.body;
            const result = await carServices.updateCar(Number(id), updates);
            if (result.success) {
                return res.status(200).json({ msg: "Veículo atualizado com sucesso", affectedRows: result.affectedRows });
            } else 
                return res.status(400).json({ msg: "Erro ao atualizar dados do Veículo" });
            
        }catch(error){
            console.log(error);
            return res.status(500).json({msg:"Erro ao atualizar veículo"});
        }
    },
    deleteCar : async (req : Request, res: Response) =>{
        try {
            const id = req.params;
            const result = await carServices.deleteCar(Number(id));
            return res.status(200).json({msg: "Carro deletado com sucesso"});
        }catch(error){
            console.log(error)
            return res.status(500).json({msg: "Erro ao deletar veículo"})
        }
    }
}

export default carController;