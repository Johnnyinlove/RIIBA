import { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography, List, ListItem } from '@material-ui/core';  

const Cards = ({ title, subtitle, listaItems }: any) => {  
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
                    {title}  
                </Typography>  
                <Typography   
                    variant="body1"   
                    className="text-gray-700 mb-4"   
                    style={{ fontSize: '1.2rem' }} // Aumentar tamaño de la fuente del cuerpo  
                >  
                    {subtitle}  
                </Typography>  
                <List>  
                    {listaItems.map((item:any, index:any) => ( // Mapeamos el array de ítems  
                        <ListItem key={index}>  
                            <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                                {index+1}. {item.texto}  
                            </Typography>  
                        </ListItem>  
                    ))}  
                </List>  
            </CardContent>  
        </Card>  
    );  
};  

export default Cards;