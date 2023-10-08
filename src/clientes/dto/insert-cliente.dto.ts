import { IsString, IsNumber, MinLength, IsPositive } from 'class-validator';

export class InsertClienteDto {
    @IsString()
    @MinLength(1)
    readonly nombre: string;

    @IsString()
    @MinLength(1)
    readonly apellido: string;
    
    @IsString()
    @MinLength(1)
    readonly nif: string;
    
    @IsString()
    @MinLength(1)
    readonly direccion: string;

    @IsNumber()
    @IsPositive()
    readonly evento: number;


}
