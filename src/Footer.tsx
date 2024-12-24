import { useNavigate } from "react-router-dom";  

export default function Footer() {  
    const navigate = useNavigate();  

    const goAutor = () => {  
        navigate("/RIIBA/Autor");  
    };  

    return (  
        <footer className="bg-white rounded-lg shadow m-0 p-2 dark:bg-gray-800"> {/* Cambié m-4 a m-0 */}  
            <div className="w-full mx-auto max-w-screen-xl flex flex-col items-center p-2 md:flex-row md:items-center md:justify-between"> {/* Cambié p-4 a p-2 y quité algunos márgenes */}  
                <span   
                    onClick={goAutor}   
                    className="text-sm text-gray-500 text-center cursor-pointer dark:text-gray-400" // Añadí cursor-pointer para indicar que es clickeable  
                >  
                    © 2024 <a href="#" className="hover:underline">Lic. Juan Cruz Odurado</a>. Creador  
                </span>  
                <ul className="flex flex-wrap items-center mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">  
                    <li className="mr-4"> {/* mf: Add some margin to the right instead of me-4 */}  
                        <a href="#" className="hover:underline">About</a>  
                    </li>  
                    <li className="mr-4">  
                        <a href="#" className="hover:underline">Privacy Policy</a>  
                    </li>  
                    <li className="mr-4">  
                        <a href="#" className="hover:underline">Licensing</a>  
                    </li>  
                    <li>  
                        <a href="#" className="hover:underline">Contact</a>  
                    </li>  
                </ul>  
            </div>  
        </footer>  
    );  
}