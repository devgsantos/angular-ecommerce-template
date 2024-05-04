import { iProduct, iProductColor } from "src/app/shared/interfaces/product.interface";

export interface iCartItem extends iProduct{
    cart_quantity: number
    partial_value: number
    selected_color?: iProductColor | null
}