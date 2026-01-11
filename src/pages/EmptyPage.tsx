import { Link } from "react-router-dom";

export default function EmptyPage() {
    return  (
        <div className="w-screen h-screen flex flex-col justify-center items-center space-y-10">
            <p>Нет данных для отображения</p>
            <Link
                to="/"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
                ← Вернуться в каталог
            </Link>
        </div>
    );
}