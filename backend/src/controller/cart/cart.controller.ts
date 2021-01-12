import { Controller, Get, Param, Post, Session} from "@nestjs/common";
import {CartObject} from "../../domain/usecase/cart/cart.object";
import {ProductObject} from "../../domain/usecase/product/product.object";
import {ProductDto} from "../dto/product.dto";
import {CartItemDto} from "../dto/cart-item.dto";
import {CartDto} from "../dto/cart.dto";

@Controller('api/cart')
export class CartController {


    constructor(private cartObject: CartObject, private productObject: ProductObject) {
    }


    @Get('/getProducts')
    public getProducts(@Session() session: Record<string, any>): CartItemDto[] {
        let cart = this.cartObject.cart;
            if(cart.sessionId == session.id) {

                if (!cart) {
                    cart = {
                        sessionId: session.id,
                        items: []
                    }
                    this.cartObject.cart = cart;
                }
            }
        return cart.items;

    }

    @Post('/addProduct/:id')
    public async addProduct(@Param('id') id: string, @Session() session: Record<string, any>): Promise<void> {
        let product: ProductDto;
        for( const item of this.productObject.products) {
            if(item.id == id){
                product = item;
            }
        }


        let cart: CartDto;
        if(this.cartObject.cart.sessionId == session.id){
            cart = this.cartObject.cart;
        }

        if (!cart) {

            cart = {
                items: [],
                sessionId: session.id
            }
            this.cartObject.cart = cart;
            cart.items.push({
                product: product,
                count: 1
            })
        } else {
            let cartItem: CartItemDto;
            for(const item of cart.items){
                if(item.product.id == id) {
                    cartItem = item;
                }
            }

            if (cartItem) {
                cartItem.count++;
            }

            if (!cartItem) {
                cart.items.push({
                    product: product,
                    count: 1
                })
            }
        }
    }

}