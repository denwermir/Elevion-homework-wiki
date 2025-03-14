import { ApiProperty } from "@nestjs/swagger";
import { DataType, Model, Table, Column, BelongsToMany } from "sequelize-typescript";
import { Roles } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: 'Denwer', description: 'Уникальное имя пользователя' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    declare username: string; // Используем declare, чтобы избежать конфликта с геттерами и сеттерами

    @ApiProperty({ example: '1234', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    declare password: string; // Используем declare

    @ApiProperty({ example: 'Denwer@yandex.ru', description: 'Уникальная почта пользователя' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    declare email: string; // Используем declare

    @BelongsToMany(() => Roles, () => UserRoles)
    declare roles: Roles[]; // Используем declare
}