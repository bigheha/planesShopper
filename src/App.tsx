import './App.css'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import FeedPage from './components/page-components/feedPage/FeedPage'
import MTGpage from './components/page-components/MTGPage/MTGpage'
import SleevesPage from './components/page-components/sleevesPage/SleevesPage'
import PlaymatsPage from './components/page-components/playmatsPage/PlaymatsPage'
import CardsPage from './components/page-components/cardsPage/CardsPage'
import AlbumsPage from './components/page-components/albumsPage/AlbumsPage'
import BoxesPage from './components/page-components/boxesPage/BoxesPage'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<FeedPage/>}/>
      <Route path='mtg' element={<MTGpage/>}/>
      <Route path='sleeves' element={<SleevesPage/>}/>
      <Route path='playmats' element={<PlaymatsPage/>}/>
      <Route path='cards' element={<CardsPage/>}/>
      <Route path='albums' element={<AlbumsPage/>}/>
      <Route path='card-boxes' element={<BoxesPage/>}/>
    </Routes>
    </>
  )
}

export default App
