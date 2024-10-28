import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Autor from './Autor.tsx'
import NotFound from './NotFound.tsx'

import { ThemeProvider } from "@material-tailwind/react";


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/RIIBA/' element={<App/> }/>
      <Route path='RIIBA/Autor' element={<Autor/> }/>
      <Route path='/RIIBA/*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

