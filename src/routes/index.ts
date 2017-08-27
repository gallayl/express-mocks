import { RouteAbstract } from "./route-abstract";
import { SessionRoutes} from './session-routes';

export class ServiceRoutes extends RouteAbstract{
    constructor() {
        super();
        SessionRoutes.Register(this._router, '/session');
        
    }
}



