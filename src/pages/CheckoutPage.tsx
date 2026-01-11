import { Check, FileText, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Order } from '../types';

// Checkout Page
export default function CheckoutPage({ order }: { order: Order }) {
  return (
    <div className="mt-5 bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Заказ оформлен</h2>
          <p className="text-gray-600">Документ успешно сгенерирован</p>
        </div>

        {/* <Check /> */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Номер заказа:</span>
            <span className="font-mono font-semibold text-blue-600">{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Дата:</span>
            <span className="font-semibold">{order.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Позиций:</span>
            <span className="font-semibold">{order.items.length}</span>
          </div>
          <div className="flex justify-between pt-3 border-t">
            <span className="text-lg font-semibold text-gray-900">Итого:</span>
            <span className="text-2xl font-bold text-gray-900">{order.total.toLocaleString('ru-RU')} ₸</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            to="/document-preview"
            className="flex-1 p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold flex items-center justify-center gap-3"
          >
            <FileText size={24} />
            Предпросмотр документа
          </Link>

          <Link
            to="/document-pdf"
            target="_blank"
            className="flex-1 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-3"
          >
            <Printer size={24} />
            Открыть PDF
          </Link>
        </div>
      </div>
    </div>
  );
};