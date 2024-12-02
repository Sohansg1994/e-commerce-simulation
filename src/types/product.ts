export type Product = {
    id: string;
    categoryId: string;
    code: string;
    description: string;
    summary?: string;
    unit?: string;
    price: number;
    discount?: {
      type: string;
      value: number;
    };
    type: string;
    name: string;
    thumbnail: string;
    stock: number;
    brand:string;
  };

  export type LineItem = {
    product: Product;
    quantity: number;
  };