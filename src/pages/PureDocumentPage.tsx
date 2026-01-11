import { useEffect } from 'react';
import type { Order } from '../types';
import OrderDocumentContent from '../components/OrderDocumentContent';
import EmptyPage from './EmptyPage';

// Pure PDF Document (no buttons)
export default function PureDocumentPage({ order }: { order: Order }) {

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    window.print();
  }, 1000);

  return () => clearTimeout(timeoutId);
}, []);



  if (!order) {
    return <EmptyPage />;
  }

  return (
    <div className="min-h-screen bg-white p-0 m-0">
      <div className="max-w-[210mm] mx-auto p-[15mm] font-sans text-black">        
        <OrderDocumentContent order={order} />
      </div>
    </div>
  );
};
