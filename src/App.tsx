import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./NavInicio";
import Card from './Card';
import Footer from "./Footer";
function App() {
  const [count, setCount] = useState(0)




  return (
    <>
 
  <Navbar/>
   
   <body>





{/* <Card/> */}
   </body>

   <footer>
<Footer/>
   </footer>
   
    </>
  )
}

export default App
