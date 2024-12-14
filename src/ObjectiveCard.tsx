import { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography } from '@material-ui/core';  

const ObjectiveCard = () => {  
    const [isVisible, setIsVisible] = useState(false);  
    const cardRef = useRef(null);  

    useEffect(() => {  
        const observer = new IntersectionObserver(  
            ([entry]) => {  
                if (entry.isIntersecting) {  
                    // Si el componente está visible en la ventana, establecerlo como visible  
                    setIsVisible(true);  
                } else {  
                    // Si el componente no está visible, ocultarlo  
                    setIsVisible(false);  
                }  
            },  
            { threshold: [0] } // Cambiar el umbral para que se active tan pronto como el componente entre en la vista  
        );  

        if (cardRef.current) {  
            observer.observe(cardRef.current);  
        }  

        return () => {  
            if (cardRef.current) {  
                observer.unobserve(cardRef.current);  
            }  
        };  
    }, []);   

    return (  
        <Card  
            ref={cardRef}  
            style={{  
                opacity: isVisible ? 1 : 0,  
                transform: isVisible ? 'translateY(0)' : 'translateY(90px)',  
                transition: 'opacity 1s ease, transform 1s ease', // Tiempo de transición  
            }}   
            className="max-w-80 mx-auto my-10 shadow-lg"  
        >  
            <CardContent>  
                <Typography   
                    variant="h5"   
                    component="div"   
                    className="text-center font-bold mb-4"   
                    style={{ fontSize: '1.8rem' }} // Ajusta el tamaño de la fuente aquí  
                >  
                    Objetivo  
                </Typography>  
                <Typography   
                    variant="body1"   
                    className="text-gray-700 text-base"   
                    style={{ fontSize: '1.2rem' }} // Ajusta el tamaño de la fuente aquí  
                >  
        La Red Internacional de Investigación en Bienestar Animal (RED-RIIBA) tiene como objetivo principal promover y coordinar esfuerzos de investigación a nivel global para mejorar el bienestar de los animales en diversos sistemas de producción. A través de la colaboración interdisciplinaria y el intercambio de conocimientos, buscamos desarrollar soluciones innovadoras y sostenibles que contribuyan a la salud y el bienestar de los animales, así como a la seguridad alimentaria.  
                </Typography>  
            </CardContent>  
        </Card>  
    );  
};  

export default ObjectiveCard;