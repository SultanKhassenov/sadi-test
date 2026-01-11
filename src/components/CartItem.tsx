import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { CartItem } from "../types";

export default function CartItem({ item }: { item: CartItem}) {
    const { updateQuantity, removeItem } = useCart();
    return (
        <div key={item.code} className="p-6 flex items-center gap-6">
            <div className="flex-1 text-sm text-gray-500">
                <p className="font-semibold text-black mb-1">{item.name}</p>
                <p>Код: {item.code}</p>
                <p>Поставщик: {item.supplier}</p>
            </div>

            <div className="flex items-center gap-3">
                {/* Уменьшить */}
                <button
                    onClick={() => updateQuantity(item.code, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                >
                    <Minus size={16} />
                </button>

                {/* Количество */}
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.code, Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center bg-gray-200 hover:bg-gray-100 rounded px-2 py-1"
                />

                {/* Увеличить */}
                <button
                    onClick={() => updateQuantity(item.code, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                >
                    <Plus size={16} />
                </button>

                {/* Единица измерения */}
                <span className="text-sm text-gray-600 w-12">{item.unit}</span>
            </div>
                
                {/* Сумма */}
            <div className="w-40 text-right">
                <div className="font-bold text-black text-lg">
                    {(item.price * item.quantity).toLocaleString("ru-RU")} ₸
                </div>
                <div className="text-sm text-gray-500">
                    {item.price.toLocaleString("ru-RU")} ₸ / {item.unit}
                </div>
            </div>

            {/* Удалить товар */}
            <button
                onClick={() => removeItem(item.code)}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
}