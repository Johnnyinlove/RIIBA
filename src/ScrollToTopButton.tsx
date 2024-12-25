import { useEffect, useState } from 'react';  
import { Button } from '@material-ui/core';   
import { ArrowUpward } from '@material-ui/icons';  

export default function ScrollToTopButton() {  
    const [visible, setVisible] = useState(false);   
    const [opaciton, setOpaciton] = useState(0);   

    const handleScroll = () => {  
        if (window.scrollY > 300) {  
            setVisible(true); 
            setOpaciton(1) 
        } else {  
            setVisible(false);  
            setOpaciton(0) 
        }  
    };  

    const scrollToTop = () => {  
        window.scrollTo({  
            top: 0,  
            behavior: 'smooth',  
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
            startIcon={<ArrowUpward className="bounce-icon" style={{ fontSize: '17px', marginLeft: "11px" }} />}  
            onClick={scrollToTop}  
            style={{  
                display: visible ? 'block' : 'none',  
                position: 'fixed',  
                bottom: '40px',  
                right: '20px',   
                borderRadius: '50%',   
                zIndex: 1000, // Asegúrate de que esté por encima de otros elementos   
                opacity: visible ? opaciton : 0,  
                transition: 'opacity 10s ease', // Transición suave  
                fontSize: '9px',  
                padding: '14px 0px', // Ajusta el padding según sea necesario  
            }}   
        >  
            SUBIR  
        </Button>   
    );  
}