import { Routes, Route } from "react-router-dom";
import MainPage from "./components/store/store-page-components/MainPage/MainPage";
import MTGpage from "./components/store/store-page-components/MTGPage/MTGpage";
import SleevesPage from "./components/store/store-page-components/sleevesPage/SleevesPage";
import PlaymatsPage from "./components/store/store-page-components/playmatsPage/PlaymatsPage";
import CardsPage from "./components/store/store-page-components/cardsPage/CardsPage";
import AlbumsPage from "./components/store/store-page-components/albumsPage/AlbumsPage";
import BoxesPage from "./components/store/store-page-components/boxesPage/BoxesPage";
import StoreFrame from "./components/store/storeFrame/StoreFrame";
import AdminProductsPage from "./components/admin/admin-page-components/adminCardsPage/AdminProductsPage";
import PrivateRoutes from "./auth/PrivateRoutes";
import DashboardFrame from "./components/admin/adminFrame/DashboardFrame";
import LoginPage from "./components/admin/admin-page-components/loginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="admin">
        <Route path="login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<DashboardFrame />}>
            <Route path="products" element={<AdminProductsPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="store" element={<StoreFrame />}>
        <Route index element={<MainPage />} />
        <Route path="mtg" element={<MTGpage />} />
        <Route path="sleeves" element={<SleevesPage />} />
        <Route path="playmats" element={<PlaymatsPage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="albums" element={<AlbumsPage />} />
        <Route path="card-boxes" element={<BoxesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
