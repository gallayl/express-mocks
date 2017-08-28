import {Table, Column, Model} from 'sequelize-typescript';

@Table
export class User extends Model<User>{
    @Column({
        allowNull: false;
    })
    public Name: string;

    @Column({
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    })
    public Email: string;
    
}
