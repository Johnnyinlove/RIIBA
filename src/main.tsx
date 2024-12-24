import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import NotFound from './NotFound.tsx'
import Miembros from "./Miembros.tsx"
import Red from './Red.tsx'
import PerfilYo from './PerfilYo.tsx'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/RIIBA/' element={<App/> }/>
      <Route path='/RIIBA/Autor' element={<PerfilYo/> }/>
      <Route path='/RIIBA/Miembros' element={<Miembros/> }/>
      <Route path='/RIIBA/**' element={<NotFound/> }/>
      <Route path='/RIIBA/Red' element={<Red/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

