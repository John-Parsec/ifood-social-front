export interface Pedido{
    id: number;
    storeId: number;
    products: {
        productId: number;
        quantity: number;
        observation: string;
    }[];
    deliveryFee: number;
    total: number;
    clientId: number;
}