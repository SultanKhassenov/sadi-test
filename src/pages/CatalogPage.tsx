import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, CATALOG_TABLE_HEADERS } from "../lib/constants";
import { toast } from "react-hot-toast";

// Catalog Page
const CatalogPage: React.FC = () => {
  const { addItem } = useCart();

  return (      
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Каталог строительных материалов</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr className="text-sm text-left font-semibold text-black">
              {CATALOG_TABLE_HEADERS.map((header) => (
                <th key={header} className="px-6 py-4">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {PRODUCTS.map((product) => (
              <tr key={product.code} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-semibold text-blue-600">{product.code}</span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500 mt-1">Поставщик: {product.supplier}</div>
                    {product.description && (
                      <div className="text-xs text-gray-400 mt-1">{product.description}</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{product.unit}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.price.toLocaleString("ru-RU")}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      addItem(product);
                      toast.success(`"${product.name}" добавлен в корзину`)
                    }}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    В корзину
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CatalogPage;
