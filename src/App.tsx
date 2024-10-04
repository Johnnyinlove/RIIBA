import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import icon from '../public/icono.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
 
 <nav className="fixed top-0 left-0 right-0 bg-white shadow">  
  <div className="flex justify-between p-4">  
    <div className="w-full md:w-1/2 p-2">  
      <div className="bg-blue-500 text-white p-4"><img className='-8 h-8 bg-cover bg-center' src={icon} alt="" /></div>  
    </div>  
    <div className="w-full md:w-1/2 p-2">  
      <div className="bg-green-500 text-white p-4">
        
        <ul>
          <li><a href="">dxsd</a></li>
          <li><a href="">anka</a></li>
          <li><a href="">sd</a></li>
          <li><a href="">dsd</a></li>
          <li><a href="">ds</a></li>
          <li><a href="">dsds</a></li>
        </ul>

        
        </div>  
    </div>  
  </div>  
</nav>   
   
   
    </>
  )
}

export default App
