import { Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Order } from '../types';
import OrderDocumentContent from '../components/OrderDocumentContent';

// Document Preview Page (with buttons)
export default function DocumentPreviewPage({ order }: { order: Order }) {
  return (
    <div className="min-h-screen max-w-5xl mx-auto p-8">
      <div className="mb-6 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ← Новый заказ
        </Link>
        <Link
          to="/document-pdf"
          target="_blank"
          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <Printer size={20} />
          Открыть PDF версию
        </Link>
      </div>

      <div className="bg-white shadow-lg">
        <div className="max-w-[210mm] mx-auto p-[20mm] font-sans text-black">
          <OrderDocumentContent order={order} />
        </div>
      </div>
    </div>
  );
};