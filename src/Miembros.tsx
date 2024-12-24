
import './App.css'
import Navbar from "./NavInicio";
import Footer from "./Footer";

import ProfileCard from "./ProfileCard"

function Miembros() {



  return (
    <>
<header>
  <Navbar/>
  </header>

   <div className=' pt-32 relative pb-[700px] w-full  bg-white'>

<ProfileCard/>

   </div>

   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default Miembros
