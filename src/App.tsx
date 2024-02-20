import { Routes, Route } from 'react-router-dom'
import MainPage from './components/store-page-components/MainPage/MainPage'
import MTGpage from './components/store-page-components/MTGPage/MTGpage'
import SleevesPage from './components/store-page-components/sleevesPage/SleevesPage'
import PlaymatsPage from './components/store-page-components/playmatsPage/PlaymatsPage'
import CardsPage from './components/store-page-components/cardsPage/CardsPage'
import AlbumsPage from './components/store-page-components/albumsPage/AlbumsPage'
import BoxesPage from './components/store-page-components/boxesPage/BoxesPage'
import StoreFrame from './components/storeFrame/StoreFrame'
import AdminFrame from './components/adminFrame/AdminFrame'
import AdminProductsPage from './components/admin-page-components/adminCardsPage/AdminProductsPage'

function App() {
  return (
    <Routes>
      <Route path='admin' element={<AdminFrame/>}>
        <Route path='products' element={<AdminProductsPage/>}/>
      </Route>
      <Route path='store' element={<StoreFrame/>}>
        <Route index element={<MainPage/>}/>
        <Route path='mtg' element={<MTGpage/>}/>
        <Route path='sleeves' element={<SleevesPage/>}/>
        <Route path='playmats' element={<PlaymatsPage/>}/>
        <Route path='cards' element={<CardsPage/>}/>
        <Route path='albums' element={<AlbumsPage/>}/>
        <Route path='card-boxes' element={<BoxesPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
