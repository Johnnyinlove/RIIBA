import React, { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography, List, ListItem } from '@material-ui/core';  

const IntentionCard = () => {  
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
                    style={{ fontSize: '1.8rem' }} // Aumentar el tamaño de la fuente del título  
                >  
                    Intención  
                </Typography>  
                <Typography   
                    variant="body1"   
                    className="text-gray-700 mb-4"   
                    style={{ fontSize: '1.2rem' }} // Aumentar el tamaño de la fuente del cuerpo  
                >  
La intención de la Red es crear un entorno colaborativo en el que investigadores, académicos, productores, legisladores y otras partes interesadas puedan trabajar juntos para:
                </Typography>  
                <List>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            1. Desarrollar métodos diagnósticos avanzados: Mejorar las herramientas y técnicas para monitorear la salud animal, permitiendo diagnósticos precisos y rápidos.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            2. Promover el uso de productos naturales: Investigar y validar alternativas naturales para el cuidado y bienestar animal, reduciendo la dependencia de productos sintéticos.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            3.	Implementar programas educativos: Fomentar la educación y la formación en bienestar animal, tanto de granjas como mascotas, y discutir temas relacionados con la seguridad alimentaria.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            4.	Garantizar la producción sostenible: Promover prácticas agrícolas sostenibles que mejoren la calidad e inocuidad de los alimentos.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                        5.	Fomentar el mejoramiento genético: Crear sementales resistentes a infecciones gástricas para mejorar la salud y la productividad animal.                     
                           </Typography>  
                    </ListItem>
                      <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                        6.	Establecer normativas claras y aplicables: Abogar por regulaciones efectivas que protejan el bienestar animal y aseguren la calidad de los productos alimenticios.  
                             </Typography>  
                    </ListItem>  
                </List>  
            </CardContent>  
        </Card>  
    );  
};  

export default IntentionCard;