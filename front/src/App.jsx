import { Routes, Route } from 'react-router-dom'
import { Inicio } from './components/Inicio'
import { Login } from './components/Login'
import { Registro } from './components/Registro'

function App() {

  return (
    <>
      <Routes>
        {/* Define tus rutas aquí */}
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

      </Routes>
    </>
  )
}

export default App
