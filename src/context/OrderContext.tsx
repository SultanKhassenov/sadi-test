import React, { createContext, useContext, useState } from 'react';
import type { Order } from '../types';

// OrderContext
// - Примитивный контекст для управления стэйтом заказа в этом мини приложении,
// вместо Redux или другого глобального стейта
// - Предоставляет текущее сформированное `order` и методы для его установки/создания
// - Используется компонентами, которые должны читать или создавать заказ
//   (например, компоненты чекаута и генерации документов)

interface OrderContextType {
  // Текущий сформированный заказ или null, если заказа нет
  order: Order | null;
  // Установить заказ вручную (используется редко, полезно для тестов)
  setOrder: (order: Order | null) => void;
  // Создать новый заказ по массиву позиций корзины
  createOrder: (items: any[]) => void;
}

// Контекст создаётся с типом, который может быть неопределён (проверяем в hook)
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Хук-обёртка, обеспечивающая удобный доступ к контексту
// и бросающий понятную ошибку, если провайдер не обёрнут вокруг компонента
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    // Явная ошибка помогает быстро найти проблему: забыли обернуть в OrderProvider
    throw new Error('useOrder must be used within OrderProvider');
  }
  return context;
};

// Провайдер состояния заказа. Пока реализация простая и хранит только последний
// созданный заказ в локальном состоянии. В будущем можно вынести сюда
// асинхронные вызовы к АПИ, кеширование и тд
export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(() => {
    const saved = localStorage.getItem('lastOrder');
    return saved ? JSON.parse(saved) : null;
  });


  // createOrder формирует объект заказа по позициям корзины и сохраняет в state
  // ID генерируется локально для отображения/экспорта; при интеграции с бэком
  // ID, дата и логика суммы могут быть заменены ответом сервера
  const createOrder = (items: any[]) => {
    const newOrder: Order = {
      id: `SADI-2026-${String(Math.floor(Math.random() * 100000)).padStart(5, '0')}`,
      date: new Date().toLocaleDateString('ru-RU'),
      items,
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };
    setOrder(newOrder);
    localStorage.setItem('lastOrder', JSON.stringify(newOrder));
  };

  return (
    <OrderContext.Provider value={{ order, setOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};