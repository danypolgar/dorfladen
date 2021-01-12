import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class ProductDto {

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsNotEmpty()
    @IsNumber()
    specialOffer: number;

    @IsNotEmpty()
    @IsNumber()
    normalPrice: number;

    @IsNotEmpty()
    @IsString()
    imageName: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}