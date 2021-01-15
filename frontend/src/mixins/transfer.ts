import axios from "axios";

export default {
    methods: {
        async getProducts() {
            const response = await axios.get('http://localhost:3000/api/product/getProducts',{ withCredentials: true } );
             return response.data;
        },
        async getProductById(id: string) {
            const response = await axios.get('http://localhost:3000/api/product/getProduct/' + id,{ withCredentials: true } );
                return response.data
        },
        async getCartProducts() {
            const response = await axios.get('http://localhost:3000/api/cart/getProducts',{ withCredentials: true } );
            return response.data;
        },
        async addToCart(id: string) {
            await axios.post('http://localhost:3000/api/cart/addProduct/' + id, null, { withCredentials: true })
            await this.getCartProducts();
        },
        async changeProductCount(id: string, direction: string) {
            await axios.put('http://localhost:3000/api/cart/updateProduct', {id: id, direction: direction}, { withCredentials: true })
        },
        async deleteCart() {
          await axios.delete('http://localhost:3000/api/cart/deleteCart', { withCredentials: true });
        },
        async sumCartItems(total: number) {

            let items = await this.getCartProducts();
            if(items){
                for(let item of items) {
                    total += item.count;
                }
            }
            return total;

        }
    }
}