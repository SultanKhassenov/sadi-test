export interface Product {
  code: string;
  name: string;
  unit: string;
  price: number;
  supplier: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
}

export interface QRCodeProps {
  value: string;
  size?: number;
  logoSrc?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  updateQuantity: (code: string, quantity: number) => void;
  removeItem: (code: string) => void;
  clearCart: () => void;
}

export interface HeaderProps {
  label: string;
  style?: string;
}