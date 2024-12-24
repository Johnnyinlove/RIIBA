import { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography, List, ListItem } from '@material-ui/core';  

const BenefitsCard = () => {  
    const [isVisible, setIsVisible] = useState(false);  
    const cardRef = useRef(null);  

    useEffect(() => {  
        const observer = new IntersectionObserver(  
            ([entry]) => {  
                // Detectar si el componente está visible en la ventana  
                if (entry.isIntersecting) {  
                    setIsVisible(true);  
                } else {  
                    setIsVisible(false);  
                }  
            },  
            { threshold: [0] } // Umbral para activarse cuando el componente entra en vista  
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
                background:"https://cdn.pixabay.com/photo/2014/05/05/14/14/meadow-338211_640.jpg" 
            }}  
            className="max-w-80 mx-auto my-10 shadow-lg"  
        >  
            <CardContent>  
                <Typography   
                    variant="h5"   
                    component="h2"   
                    className="font-bold mb-4 text-center"   
                    style={{ fontSize: '1.8rem' }} // Aumentar tamaño de la fuente del título  
                >  
                    Beneficios  
                </Typography>  
                <Typography   
                    variant="body1"   
                    className="text-gray-700 mb-4"   
                    style={{ fontSize: '1.2rem' }} // Aumentar tamaño de la fuente del cuerpo  
                >  
                    Participar en RED-RIIBA ofrece varios beneficios, tales como:  
                </Typography>  
                <List>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            1. Colaboración internacional y acceso a investigaciones de vanguardia: Establecer relaciones con expertos de diferentes países y organizaciones afines, ampliando la red de contactos y colaboración. Tener acceso a las últimas investigaciones y tecnologías.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            2. Formación y educación continua: Oportunidades de formación para mejorar las competencias en bienestar animal y seguridad alimentaria.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            3. Desarrollo de soluciones: Contribuir al desarrollo de soluciones que mejoren la vida de los animales y la seguridad alimentaria a nivel global.  
                        </Typography>  
                    </ListItem>  
                </List>  
            </CardContent>  
        </Card>  
    );  
};  

export default BenefitsCard;