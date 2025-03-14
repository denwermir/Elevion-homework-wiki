/*import { ApiProperty } from "@nestjs/swagger";
import { DataType, Model, Table, Column, BelongsToMany } from "sequelize-typescript";
import { User } from '../users/user.model';
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
}*/


import { ApiProperty } from "@nestjs/swagger";
import { DataType, Model, Table, Column, BelongsToMany } from "sequelize-typescript";
import { User } from '../users/user.model';
import { UserRoles } from "./user-roles.model";

interface RoleCreation {
    value: string;
    description: string;
}

@Table({ tableName: 'roles', timestamps: false }) // Отключаем временные метки
export class Roles extends Model<Roles, RoleCreation> {
    @ApiProperty({ example: 'Админ', description: 'Название роли' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    declare value: string; // Используем declare, чтобы избежать конфликта с геттерами и сеттерами

    @ApiProperty({ example: 'Роль для управления сайтом', description: 'Описание роли' })
    @Column({ type: DataType.STRING, allowNull: false })
    declare description: string; // Используем declare

    @BelongsToMany(() => User, () => UserRoles)
    declare users: User[]; // Используем declare
}