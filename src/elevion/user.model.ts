import { ApiProperty } from "@nestjs/swagger";
import { DataType, Model, Table, Column, BelongsToMany } from "sequelize-typescript";
import { Roles } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreatonAttrs{
    username: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreatonAttrs> {
    //@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    //id: number;
    @ApiProperty({example: 'Denwer', description: 'Уникальное имя пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @ApiProperty({example: '1234', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Denwer@yandex.ru', description: 'Уникальная почта пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @BelongsToMany(() => Roles, () => UserRoles)
    roles: Roles[];
}