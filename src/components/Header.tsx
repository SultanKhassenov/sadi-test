import { ShoppingBasket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from '../context/CartContext';

export default function Header() {
    const { items } = useCart();
    const pathname = useLocation().pathname;
    const isHidden = pathname === '/document-preview' || pathname === '/document-pdf';

    if (isHidden) return null;

    return (
        <header className="sticky top-0 bg-white shadow-sm border-b-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/">
                    <Logo size="sm" />
                </Link>

                <div className="flex items-center gap-x-5">
                    <Link
                        to="/" 
                        className="py-2 font-bold text-gray-600 hover:text-emerald-300 transition-all duration-500"
                    >
                        Закупки
                    </Link>

                    <Link
                        to="/cart"
                        className="relative py-2 px-1 text-gray-600 hover:text-emerald-300 transition-all duration-500"
                    >
                        <ShoppingBasket size={26} />
                        <span className="absolute text-white text-center bg-emerald-300 rounded-full text-[12px] w-4 h-4 top-0 right-0">
                            {items.length}
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}