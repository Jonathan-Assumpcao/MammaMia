import { Router, Request, Response, NextFunction } from 'express';
import { AdministradorController } from '../controller/AdministradorController';
export class Administrador {
    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }
    public get(req: Request, res: Response, next: NextFunction) {
        return new AdministradorController(req,res,next).listarAdministrador();
    }


    init() {
        this.router.get('/', this.get);
    }
}
const routers = new Administrador();
routers.init;
export default routers.router;