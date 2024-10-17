import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./NavInicio";
import CarouselDefault from "./CarouselSlider";
import Card from './Card';
import Footer from "./Footer";
import CollapseDefault from "./Colapse";
import GalleryWithTab from "./Galery";
function App() {

  return (
    <>
<header>
  <Navbar/>
  </header>

   <div className=' relative pb-[700px] w-full bg-white'>
<CarouselDefault/>
<Card/>

{/* <div className='flex flex-col items-center mx-auto max-w-md w-full'>  */}
    {/* <CollapseD|efault  />   */}
    {/* <CollapseDefault  />   */}
    {/* </div> */}
{/* <GalleryWithTab/> */}
   </div>

   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default App
