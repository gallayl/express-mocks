import { RouteAbstract } from "./route-abstract";

export class SessionRoutes extends RouteAbstract {

    /**
     *
     */
    constructor() {
        super();
        this._router.use('/currentUser', (req, resp, next)=>{
            resp.send(req.user);
            next();
        })
    }
}