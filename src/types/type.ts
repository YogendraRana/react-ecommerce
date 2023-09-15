export interface ItemType {
    id: number;
    name: string;
    category: string;
    price: number;
    brand: string;
    description: string;
    image: string;
}

export interface StoreMenuType {
    id: number;
    label: string;
    href: string;
    icon: string;
}