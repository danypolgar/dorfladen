import {Body, Controller, Get, Param, Post, Put, Session} from "@nestjs/common";
import {CartObject} from "../../domain/usecase/cart/cart.object";
import {ProductObject} from "../../domain/usecase/product/product.object";
import {ProductDto} from "../dto/product.dto";
import {CartItemDto} from "../dto/cart-item.dto";
import {CartDto} from "../dto/cart.dto";
import {ProductAmountDto} from "../dto/product-amount.dto";

@Controller('api/cart')
export class CartController {


    constructor(private cartObject: CartObject, private productObject: ProductObject) {
    }


    @Get('/getProducts')
    public async getProducts(@Session() session: Record<string, any>): Promise<CartItemDto[]> {
        session.visits ? session.visits++ : session.visits = 1;
        let cart: CartDto;
        for (const tempCart of this.cartObject.carts) {
            if (tempCart.sessionId == session.id) {
                cart = tempCart;

            }
        }
        if (!cart) {
            cart = {
                sessionId: session.id,
                items: []
            }
            this.cartObject.carts.push(cart);
        }
        return cart.items;
    }

    @Post('/addProduct/:id')
    public async addProduct(@Session() session: Record<string, any>, @Param('id') id: string,): Promise<void> {
        let product: ProductDto;
        let cart: CartDto;
        for (const item of this.productObject.products) {
            if (item.id == id) {
                product = item;
            }
        }
        for (const tempCart of this.cartObject.carts) {

            if (tempCart.sessionId == session.id) {
                cart = tempCart;
            }
        }
        if (!cart) {

            cart = {
                items: [],
                sessionId: session.id
            }
            this.cartObject.carts.push(cart);
            cart.items.push({
                product: product,
                count: 1
            })
        } else {
            let cartItem: CartItemDto;
            for (const item of cart.items) {
                if (item.product.id == id) {
                    cartItem = item;
                }
            }
            cartItem ? cartItem.count++ : cart.items.push({
                product: product,
                count: 1
            });


        }


    }

    @Put('/updateProduct')
    public async changeProductCount(@Body() body: ProductAmountDto, @Session() session: Record<string, any>): Promise<void> {
        let cart: CartDto;
        let cartItem: CartItemDto;
        for (const tempCart of this.cartObject.carts) {
            if (tempCart.sessionId == session.id) {
                cart = tempCart;
            }
        }

        if(cart) {
            for (const item of cart.items) {
                if (item.product.id == body.id) {
                    cartItem = item;
                }
            }

            if (cartItem) {
                body.direction == "+" ? cartItem.count++ : cartItem.count--;
                if(cartItem.count == 0) {
                    cart.items.splice(cart.items.indexOf(cartItem), 1);
                }
            }
        }




    }

}