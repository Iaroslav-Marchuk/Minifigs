import { Route, Routes } from 'react-router-dom';

import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Layout from '../Layout/Layout.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import MyCollectionPage from '../../pages/MyCollectionPage/MyCollectionPage.jsx';
import WishListPage from '../../pages/WishListPage/WishListPage.jsx';
import FigurePage from '../../pages/FigurePage/FigurePage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/mycollection" element={<MyCollectionPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/figure" element={<FigurePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
