import type { ProductType } from "./product"

export type TOrder= {
    id:number,
    userId:number,
    items:ProductType[],
    subTotal:number
}