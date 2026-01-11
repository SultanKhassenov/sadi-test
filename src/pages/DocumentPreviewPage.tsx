import { Download, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Order } from '../types';
import OrderDocumentContent from '../components/OrderDocumentContent';

// Document Preview Page (with buttons)
export default function DocumentPreviewPage({ order }: { order: Order }) {
  return (
    <div className="print-main-hide max-w-5xl mx-auto p-8">
      <div className="print-btns-hide mb-6 flex gap-4">
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
          <span className="flex flex-col items-center">
              <p>Открыть PDF версию</p>
              <p className="text-[8px] opacity-70">Не работает на Vercel</p>
            </span>
        </Link>
        
        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center"
        >
          <Download size={16} className="inline mr-2" />
          Печать
        </button>
      </div>

      <div className="print-layout-hide bg-white p-0 m-0 shadow-lg">
        <div className="max-w-[210mm] mx-auto p-[15mm] font-sans text-black">
          <OrderDocumentContent order={order} />
        </div>
      </div>
    </div>
  );
};
