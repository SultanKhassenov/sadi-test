import type { Order } from "../types";
import QRCode from "./QRCode";
import Logo from "./Logo";
import { ORDER_TABLE_HEADERS } from "../lib/constants";


export default function OrderDocumentContent({ order }: { order: Order }) {
  return (
    <>
      {/* Header */}
        <div className="flex justify-between items-start mb-6">
            <div className="flex gap-8 items-center">            
                <Logo size="lg" />

                <div className="p-5 bg-gray-300 border-2 border-gray-500 text-lg text-black">BUYER LOGO</div>
            </div>
                
            <QRCode value={order.id} size={112} logoSrc="/assets/images/Sadi-logo.png" />
        </div>

        <div className="text-center text-xl font-bold mt-2.5 mb-2.5">ЗАКАЗ ПОСТАВЩИКУ</div>
        <div className="text-center text-base font-bold mb-5">{order.id}</div>

        <div className="text-sm mb-5">
            <span className="text-gray-600">Дата: </span>
            <span className="font-semibold">{order.date}</span>
        </div>

        <table className="w-full border-collapse mb-2.5 text-xs">
            <thead>
                <tr className="bg-gray-200">
                    {ORDER_TABLE_HEADERS.map((header) => (
                        <th
                            key={header.label}
                            className={`border border-black p-1.5 text-left font-bold ${header.style}`}
                        >
                            {header.label}
                        </th>
                    ))}
            </tr>
        </thead>
        
        <tbody>
          {order.items.map((item) => (
            <tr key={item.code}>
              <td className="border border-black p-1.5 font-bold align-top">{item.code}</td>
              <td className="border border-black p-1.5 align-top">
                <div>{item.name}</div>
                <div className="text-[10px] text-gray-600 mt-1">
                  Кол-во: {item.quantity} {item.unit}
                </div>
              </td>
              <td className="border border-black p-1.5 align-top">
                <div>{item.supplier}</div>
                <div className="text-[10px] text-gray-500">(справочно)</div>
              </td>
              <td className="border border-black p-1.5 text-right align-top">
                <div>{item.price.toLocaleString("ru-RU")} ₸</div>
                <div className="font-bold">{(item.price * item.quantity).toLocaleString("ru-RU")} ₸</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right text-sm font-bold mt-2.5">ИТОГО: {order.total.toLocaleString("ru-RU")} ₸</div>

      <div className="mt-7.5 text-[11px] border-t border-black pt-2">
        Оплата производится только при наличии ссылки на ID Заказа {order.id} в счет-фактуре и накладной.
      </div>

      <div className="mt-10 flex justify-between text-[11px]">
        <div className="w-[40%] border-t border-black pt-1.25 text-center">Заказчик</div>
        <div className="w-[40%] border-t border-black pt-1.25 text-center">Поставщик</div>
      </div>
    </>
  );
};