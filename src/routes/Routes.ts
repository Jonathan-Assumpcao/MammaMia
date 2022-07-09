import { Router, Request, Response, NextFunction, request, response } from 'express';
import  Administrador  from './Administrador';

export class Routers {
    router: Router

    adminstrador:Router = Administrador;


    constructor() {
        this.router = Router();
        this.init();
    }
    init() {
        this.router.use('/admin', this.adminstrador);
        this.router.use('/cliente', this.adminstrador);
    }
}
const routers = new Routers();
routers.init();
export default routers.router;