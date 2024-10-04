import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import icon from '../public/icono.jpeg'

function App() {
  const [count, setCount] = useState(0)

  const images = ["https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/06/15/11/51/learn-2405206_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/01/10/04/19/college-student-7708894_1280.jpg"
    ];
console.log(images.length);


  return (
    <>
 
 
 <nav className="fixed top-0 left-0 right-0 bg-white shadow">  
    {/* este es el navegador */}
      <div className="bg-green-600  text-white p-4">
        
        <ul className='flex justify-between p-2 [&>li>a]:text-white [&>li>a]:p-3 [&>li>a]:align-middle' >
        <button className='bg-white rounded-e-full'>
          <img className=' rounded-full h-10 bg-cover bg-center' src={icon} alt="icon" />
        </button>
          <li><a href="">Inicio</a></li>
          <li><a href="">La Red</a></li>
          <li><a href="">Actualidad</a></li>
          <li><a href="">Miembros</a></li>
          <li><a href="">Visivilidad</a></li>
          <li><a href="">Noticias</a></li>
          <li><a href="">Noticias</a></li>
          <li><a href="">Noticias</a></li>
          <li><a href="">Noticias</a></li>
        {/* <button className='bg-slate-100'>Contacto</button> */}
        </ul>

        
        </div>  
</nav>   
   
   <body>


    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-2xl ">
  <div className="md:flex ">
    <div className="md:flex-shrink-0 sd:flex-shrink-2">
      <img className="h-48 w-full object-cover  md:w-48 sd:h-2" src={icon} alt="Man looking at item at a store"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>

   </body>
   
    </>
  )
}

export default App
