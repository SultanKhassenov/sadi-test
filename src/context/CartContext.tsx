import React, { createContext, useContext, useState } from 'react';
import type { CartContextType, CartItem, Product } from '../types';

// CartProvider
// - Управляет состоянием корзины (items, addItem, updateQuantity, removeItem, clearCart).
// - Оборачивает компоненты, которым нужен доступ к корзине (например, App и его дочерние).
// - Использует локальный state; в будущем можно добавить персистентность (localStorage).

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.code === product.code);
      if (existing) {
        return prev.map(item =>
          item.code === product.code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (code: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.code === code ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (code: string) => {
    setCartItems(prev => prev.filter(item => item.code !== code));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ items: cartItems, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};