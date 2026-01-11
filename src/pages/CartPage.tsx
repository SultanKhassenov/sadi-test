import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link  } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";
import CartItem from "../components/CartItem";

// Cart Page
const CartPage: React.FC = () => {  
  const { items } = useCart();
  const { createOrder } = useOrder();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-black mb-6">Корзина</h1>

      {items.length === 0 ? (
        // <EmptyCart />
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">Корзина пуста</h3>
          <p className="text-gray-600 mb-6">Добавьте товары из каталога</p>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="space-y-6">

          {/* Список товаров */}
          <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {items.map((item) => (
              <CartItem item={item} />
            ))}
          </div>

          {/* <CartFooter /> */}
          <div className="bg-white rounded-lg shadow p-6">
            
            {/* Сумма всех товаров */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-black">Итого:</span>
              <span className="text-3xl font-bold text-black">{total.toLocaleString("ru-RU")} ₸</span>
            </div>


            <div className="flex justify-between gap-4">
              {/* Назад в каталог */}
              <Link
                to="/"
                className="px-6 py-3 w-1/4 text-center border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                ← Назад в каталог
              </Link>

              {/* Оформить заказ */}
              <Link
                to="/checkout"
                onClick={() => {
                  createOrder(items);
                }}
                className="w-1/4 px-6 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Оформить заказ →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;