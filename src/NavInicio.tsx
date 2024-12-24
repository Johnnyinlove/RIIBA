import { useState } from "react";  
import icon from "../public/logo.png";  
import { Link, useLocation } from "react-router-dom";  
import { Button,} from '@material-ui/core'; 

export default function Navbar() {  
  const location = useLocation(); // Captura la ubicación actual  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => setIsOpen(!isOpen);  

  const navItems = [  
    { name: "Inicio", path: "/RIIBA/" },  
    { name: "La Red", path: "/RIIBA/Red" },  
    { name: "Actualidad", path: "#" },  
    { name: "Miembros", path: "/RIIBA/Miembros" },  
    { name: "Visibilidad", path: "#" },  
    { name: "Noticias", path: "#" },  
    { name: "Contacto", path: "#" },  
  ];  

  const handleLinkClick = () => {  
    window.scrollTo(0, 0); // Desplaza la ventana a la parte superior  
    setIsOpen(false); // Cierra el menú al seleccionar un enlace  
  };  


 
    const [isHovered, setIsHovered] = useState(false);  
  
   

  return (  
    <nav className="bg-sky-300 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-l-white dark:border-gray-500">  
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">  
        <Link to="https://johnnyinlove.github.io/RIIBA/" className="flex items-center space-x-3 rtl:space-x-reverse">  
          <img src={icon} className="h-16 rounded-full" alt="Flowbite Logo" />  
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-800 dark:text-white">  
            <h1>RED-RIIBA</h1>  
          </span>  
        </Link>  
        <div className="flex  bg-gray-100 md:hidden md:order-2 space-x-3  rounded-lg  md:space-x-0 rtl:space-x-reverse">  
          <Button  
            onClick={toggleMenu}  
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  
            aria-controls="navbar-sticky"  
            aria-expanded={isOpen}  
          >  
            <span className="sr-only ">Open main menu</span>  
            <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">  
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />  
            </svg>  
          </Button>  
        </div>  
        <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">  
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">  
            {navItems.map((item) => (  
              <li key={item.name}>  
                <Link  
                  to={item.path}  
                  onClick={handleLinkClick} // Usa la nueva función para manejar el clic  
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent ${  
                    location.pathname === item.path  
                      ? 'text-blue-700'  
                      : 'text-gray-900 dark:text-white'  
                  } md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}  
                >  
                  {item.name}  
                </Link>  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>  
    </nav>  
  );  
}