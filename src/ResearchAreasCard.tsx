import { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography } from '@material-ui/core';  

const ResearchAreasCarda = () => {  
    const [isVisible, setIsVisible] = useState(false);  
    const cardRef = useRef(null);  

    useEffect(() => {  
        const observer = new IntersectionObserver(  
            ([entry]) => {  
                if (entry.isIntersecting) {  
                    setIsVisible(true);  
                } else {  
                    setIsVisible(false);  
                }  
            },  
            { threshold: [0] }  
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
                transition: 'opacity 1s ease, transform 1s ease',  
                overflow: 'hidden', // Agregado para evitar el desbordamiento  
            }}   
            className="max-w-80 mx-auto my-10 shadow-lg"  
        >   
            <CardContent>  
                <Typography variant="h5" component="h2" className="font-bold mb-4 text-center"
                                    style={{ fontSize: '1.8rem' }} // Ajusta el tamaño de la fuente aquí  
                >  
                    Bienvenido!!!  
                </Typography>  
                <Typography variant="body1" className="text-gray-700 mb-4" style={{ whiteSpace: 'normal', fontSize:'1.2rem' }}>  
                    La Red Internacional de Investigación en Bienestar Animal es una plataforma dedicada a la mejora del bienestar animal y la seguridad alimentaria a través de la colaboración y la innovación. Invitamos a todos los interesados a unirse a nosotros en este proyecto global para crear un futuro más sostenible y saludable para los animales y las personas.       
                </Typography>  
            </CardContent>  
        </Card>  
    );  
};  

export default ResearchAreasCarda;