// ScrollToTopButton.js  
import { useEffect, useState } from 'react';  
import { Button,} from '@material-ui/core'; 
import {  ArrowUpward } from '@material-ui/icons';  

export default function ScrollToTopButton() {  
    const [visible, setVisible] = useState(false); 
    const [opacityon, setOpacityon] = useState(0); // Estado para el tamaño  
 

    const handleScroll = () => {  
        // Cambia el estado de "visible" según la posición del scroll  
        if (window.scrollY > 300) {  
            setVisible(true);
            setOpacityon(.6); // Resetea la opacidad a 0 antes de la animación  

            // Aumenta la opacidad a 1 en 1 segundo  
            // setTimeout(() => {  
            //     setOpacityon(1); // Establece la opacidad a 1  
            // }, 0); // Necesario establecer opacidad a 0 para forzar el cambio de visualización  
        } else {  
            setOpacityon(0); // Cuando se desplaza hacia arriba, oculta el botón  
 
        }  
    };  

    const scrollToTop = () => {  
        window.scrollTo({  
            top: 0,  
            behavior: 'smooth', // Desplazamiento suave hacia el top  
        });  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

 


    return ( 
      
      <Button   
      variant="contained"   
      color="primary"  
      aria-label="Scroll to top"  
      startIcon={<ArrowUpward style={{ fontSize: '17px', marginLeft:"11px" }} />}
      onClick={scrollToTop}  
      style={{  
          display: visible ? 'block' : 'none',  
          position: 'fixed',  
          bottom: '40px',  
          right: '20px', 
          borderRadius:'50%', 
          zIndex: 1000, // Asegúrate de que esté por encima de otros elementos 
          opacity:visible ? opacityon : 0,  
          transition: ' opacity 1s ease', // Transición suave  
          fontSize: '9px',
          padding: '14px 0px 14px 0px', // Ajusta el padding según sea necesario  
   
      }} 
    >  SUBIR
     </Button> 
     
    );  
}  

