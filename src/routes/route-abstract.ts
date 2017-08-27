import { Router, Application } from "express";

export class RouteAbstract {
    protected readonly _router: Router = Router();

    public static Register(root: Router | Application, route: string = "/services"){
        const newRoute = new this();
        console.log(`Registering route '${route}'...`);
        root.use(route, newRoute['_router']);
    }
}