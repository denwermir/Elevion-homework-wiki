import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'Denwer', description: 'Уникальное имя пользователя'})
    readonly username:  string;
    @ApiProperty({example: 'Denwer@yandex.ru', description: 'Уникальная почта пользователя'})
    readonly email:  string;
    @ApiProperty({example: '1234', description: 'Пароль пользователя'})
    readonly password: string;
}
