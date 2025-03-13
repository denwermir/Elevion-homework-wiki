import { ApiProperty } from "@nestjs/swagger";
import { DataType, Model, Table, Column, BelongsToMany } from "sequelize-typescript";
import { User } from "src/elevion/user.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreation{
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Roles extends Model<Roles, RoleCreation> {
    @ApiProperty({example: 'Админ', description: 'Название роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Роль для управления сайтом', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;


    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}