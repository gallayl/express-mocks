import {Sequelize} from 'sequelize'
import * as sequelizeStatic from 'sequelize';

export class SequelizeService{
    private static _instance: Sequelize;
    
    private static Create(): Sequelize{
        return new sequelizeStatic('express-mocks', 'username', 'password', {
            host: 'localhost',
            dialect: 'postgres',
            pool: {
              max: 5,
              min: 0,
              idle: 10000
            },
          });
    }
    
    public static GetCurrent(): Sequelize{
        if (!this._instance){
            this._instance = this.Create();
        }
        return this._instance;
    }
}