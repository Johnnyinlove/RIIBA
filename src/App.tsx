import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./NavInicio";
import CarouselDefault from "./CarouselSlider";
import Card from './Card';
import Footer from "./Footer";
function App() {

  return (
    <>
 
  <Navbar/>
   
   <body>


<CarouselDefault/>


<Card/>
   </body>

   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default App
