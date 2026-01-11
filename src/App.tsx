import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useOrder } from './context/OrderContext';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DocumentPreviewPage from './pages/DocumentPreviewPage';
import PureDocumentPage from './pages/PureDocumentPage';
import Header from './components/Header';
import EmptyPage from './pages/EmptyPage';

export default function App() {
  const { order } = useOrder();

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{ duration: 2000 }}
      />

      <Header />

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={order ? <CheckoutPage order={order} /> : <EmptyPage />}
        />
        <Route
          path="/document-preview"
          element={order ? <DocumentPreviewPage order={order} /> : <EmptyPage />}
        />
        <Route
          path="/document-pdf"
          element={order ? <PureDocumentPage order={order} /> : <EmptyPage />}
        />
      </Routes>
    </>
  );
}
