import './App.css'
import Navbar from './NavInicio';
import Footer from './Footer';
import Cards from "./Cards";
import { listaAreaInvestigacion, listaBeneficios, listaIntencion, listaObjetivo } from'./Data' ;
import ScrollToTopButton from './ScrollToTopButton';

function Red() {

  

  return (
    <>

<header>
  <Navbar/>
  </header>

<div className='pt-36 pb-[700px] w-full  '>
<Cards
title={listaObjetivo.title}
subtitle={listaObjetivo.subtitle}
listaItems={listaObjetivo.listaItems}

/>

<Cards
title={listaIntencion.title}
subtitle={listaIntencion.subtitle}
listaItems={listaIntencion.listaItems}

/>
<Cards
title={listaAreaInvestigacion.title}
subtitle={listaAreaInvestigacion.subtitle}
listaItems={listaAreaInvestigacion.listaItems}

/>

<Cards
title={listaBeneficios.title}
subtitle={listaBeneficios.subtitle}
listaItems={listaBeneficios.listaItems}

/>

<ScrollToTopButton/>


</div>



   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default Red
