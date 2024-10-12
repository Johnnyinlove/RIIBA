import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./NavInicio";
import CarouselDefault from "./CarouselSlider";
import Card from './Card';
import Footer from "./Footer";
import Example from "./Example";
function App() {

  return (
    <>
<header>
  <Navbar/>
  </header>

   <body className=' flex w-auto bg-deep-orange-900'>
{/* <Example/> */}
<CarouselDefault/>



{/* <Card/> */}


   </body>

   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default App
