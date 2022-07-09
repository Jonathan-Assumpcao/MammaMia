import { Request, Response, NextFunction } from 'express';

export class AdministradorController{
    req:Request
    res:Response

    constructor (req:Request,res:Response,next:NextFunction){
        this.req = req;
        this.res = res;
    }

    listarAdministrador(){
        let usuario:Usuario = new Usuario();
        usuario.id = 10;
        usuario.nome = "Jhow bonito";
        return this.res.status(200).json(usuario);
    }


}

export class Usuario {
    id?:number
    nome?:string                    

}