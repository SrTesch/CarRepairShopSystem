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
    }
}

export default carController;