import './App.css'
import Navbar from "./NavInicio";
import CarouselDefault from "./CarouselSlider";
import Footer from "./Footer";
import Form from "./Form";
import ScrollToTopButton from './ScrollToTopButton';
import Cards from './Cards'
import { listaBienvenido, listaUnirse } from'./Data' ;


function App() {
// Definimos el array de ítems  



  return (
    <>
<header>
  <Navbar/>
  </header>

   <div className=' relative pb-[700px] w-full  bg-white'>
<CarouselDefault/>


 
<Cards
title={listaBienvenido.title}
subtitle={listaBienvenido.subtitle}
listaItems={[]}

/>

<Cards
title={listaUnirse.title}
subtitle={listaUnirse.subtitle}
listaItems={listaUnirse.listaItems}

/>

<Form/>

<ScrollToTopButton/>


   </div>

   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default App
