import { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography } from '@material-ui/core';  

const HowToJoinCard = () => {  
    const [isVisible, setIsVisible] = useState(false);  
    const cardRef = useRef(null);  

    useEffect(() => {  
        const observer = new IntersectionObserver(  
            ([entry]) => {  
                setIsVisible(entry.isIntersecting);  
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
            }}   
            className="max-w-80 mx-auto my-10 shadow-lg"  
            aria-hidden={!isVisible}  
        >   
            <CardContent>  
                <Typography variant="h5" component="h2" className="font-bold mb-4 text-center"    
                     style={{ fontSize: '1.8rem' }} // Aumentar tamaño de la fuente del título  
                >  
                    ¿Cómo Unirse? 
                </Typography>  
                <Typography variant="body1" className="text-gray-700 mb-4"
                                     style={{ fontSize: '1.2rem' }} // Aumentar tamaño de la fuente del título  
>  
                    Para unirse a la Red Internacional de Investigación en Bienestar Animal (RED-RIIBA), los interesados pueden:  
                </Typography>  
                <Typography variant="body1" className="text-gray-700 mb-4"
                                     style={{ fontSize: '1rem' }} // Aumentar tamaño de la fuente del título  
>  
                    1. <strong>Registrase</strong> a través del formulario que aparece al final de esta página Web: Proporcionaremos detalles de contacto y formularios de inscripción.  
                </Typography>  
                <Typography variant="body1" className="text-gray-700 mb-4"
                                     style={{ fontSize: '1rem' }} // Aumentar tamaño de la fuente del título  
>  
                    2. <strong>Participar en eventos y talleres</strong>: Ofrecemos eventos regulares y talleres para fomentar la colaboración y el intercambio de conocimientos.  
                </Typography>  
                <Typography variant="body1" className="text-gray-700 mb-4"
                                     style={{ fontSize: '1rem' }} // Aumentar tamaño de la fuente del título  
>  
                    3. <strong>Contribuir con investigaciones</strong>: Invitamos a los investigadores a presentar sus trabajos y colaborar en proyectos conjuntos.  
                </Typography>  
            </CardContent>  
        </Card>  
    );  
};  

export default HowToJoinCard;