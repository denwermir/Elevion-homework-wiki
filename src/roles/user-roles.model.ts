import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany } from "sequelize";
import { DataType, Model, Table, Column, ForeignKey,  } from "sequelize-typescript";
import { Roles } from "./roles.model";
import { User } from "src/users/user.model";


@Table({tableName: 'user_roles'})
export class UserRoles extends Model<UserRoles> {
    @ForeignKey( ()=> Roles)
    @Column({type: DataType.INTEGER})
    declare roleId: number;

    @ForeignKey( ()=> User)
    @Column({type: DataType.INTEGER})
    declare userId: number;

}