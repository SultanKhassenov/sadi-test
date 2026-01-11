import { useEffect } from 'react';
import type { Order } from '../types';
import OrderDocumentContent from '../components/OrderDocumentContent';
import EmptyPage from './EmptyPage';

// Pure PDF Document (no buttons)
export default function PureDocumentPage({ order }: { order: Order }) {

  // Автоматически вызывает окно печати при загрузке страницы
  useEffect(() => {
    const timeoutId = setTimeout(() => {
    window.print();
  }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Если по какой-то причине заказ отсутствует, показываем пустую страницу
  if (!order) {
    return <EmptyPage />;
  }

  // Основное содержимое документа для печати/экспорта в PDF
  return (
    <div className="print-layout-hide bg-white p-0 m-0">
      <div className="max-w-[210mm] mx-auto p-[15mm] font-sans text-black">        
        <OrderDocumentContent order={order} />
      </div>
    </div>
  );
};
