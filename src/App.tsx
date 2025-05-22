
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { PokeDetails } from './Pages/PokeDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/poke/:id' element={<PokeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
