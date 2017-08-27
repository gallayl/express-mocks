import {SequelizeService} from '../services/SequelizeService';

const seq = SequelizeService.GetCurrent();

export class User{
    public Id: number;
}

/** todo :( */
seq.define<User, {}>('User', {
    Id: {

    }
})