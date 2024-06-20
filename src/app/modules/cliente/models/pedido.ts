export interface Pedido{
    id: number;
    storeId: number;
    products: {
        productId: number;
        quantity: number;
    }[];
    deliveryFee: number;
    total: number;
    clientId: number;
}