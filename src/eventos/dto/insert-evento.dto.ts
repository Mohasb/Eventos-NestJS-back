import { IsString, IsDateString, IsNumber, MinLength, IsPositive, Matches } from 'class-validator';

export class InsertEventoDto {
    @IsString()
    @MinLength(1)
    readonly title: string;

    @IsString()
    @MinLength(1)
    readonly description: string;

    @IsNumber()
    @IsPositive()
    readonly price: number;

    @Matches(/\d{4}-\d{2}-\d{2}/)
    readonly date: string;

    @IsString()
    @MinLength(1)
    image: string;
}
