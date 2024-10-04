import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Navbar from "./NavInicio";
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
 
  <Navbar/>
   
   <body>






<Card/>
   </body>
   
    </>
  )
}

export default App
