// TODO Reto 1: reglas de validación con class-validator
//   - name: string, mínimo 3 caracteres
//   - code: string de 3 a 6 letras MAYÚSCULAS (ej. "SIS", "MED")

import { IsInt, IsPositive, IsString, Matches, MinLength } from "class-validator";

//   - credits: entero positivo
export class CreateProgramDto {
    @IsString()
    @MinLength(3)
    name: string;

    @Matches(/^[A-Z]{3,6}$/, { message: 'code must be 3 to 6 uppercase letters' })
    code: string;

    @IsInt()
    @IsPositive()
    credits: number;




}


