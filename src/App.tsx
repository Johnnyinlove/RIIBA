import './App.css'
import Navbar from "./NavInicio";
import CarouselDefault from "./CarouselSlider";
import Footer from "./Footer";
import Form from "./Form";
import ResearchAreasCarda from './ResearchAreasCard';
import HowToJoinCard from './HowToJoinCard';
import ScrollToTopButton from './ScrollToTopButton';





function App() {

  return (
    <>
<header>
  <Navbar/>
  </header>

   <div className=' relative pb-[700px] w-full  bg-white'>
<CarouselDefault/>

<ResearchAreasCarda/> 
<HowToJoinCard/>
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
