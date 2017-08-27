import { Application } from 'express';
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";


import {ServiceRoutes} from './routes';

import {Authentication} from './authentication';

export class Server {
    
    private readonly app: Application;

    public Configure(){

        this.app.use(express.static(path.join(__dirname, "..", "static")));
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        
        this.app.use(cookieParser("alma"));

        Authentication.Configure(this.app);

        return this;
    }

    public RegisterServices(){
        ServiceRoutes.Register(this.app, '/services');
        return this;
    }

    public Start(){
        this.app.listen(80);
    }

    constructor() {
        this.app = express();
        
    }
}

new Server()
        .Configure()
        .RegisterServices()
        .Start()