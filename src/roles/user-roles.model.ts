import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany } from "sequelize";
import { DataType, Model, Table, Column, ForeignKey,  } from "sequelize-typescript";
import { User } from "src/elevion/user.model";
import { Roles } from "./roles.model";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ForeignKey( ()=> Roles)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey( ()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;

}