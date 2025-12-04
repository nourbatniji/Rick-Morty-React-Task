import { Routes, Route } from "react-router-dom"
import CharactersPage from './pages/CharactersPage.tsx';
import CharacterDetailsPage from './pages/CharacterDetailsPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage/>} />
      <Route path="/character/:id" element={<CharacterDetailsPage/>}/>
    </Routes>
  )
}

export default App

