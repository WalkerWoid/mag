export interface ItemInterface {
    title: string
    description: string
    article: string
    price: number
    pic: string
}
export interface CartItemInterface extends ItemInterface {
    count: number
}