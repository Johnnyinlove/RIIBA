import React, { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography, List, ListItem } from '@material-ui/core';  

const ResearchAreasCard = () => {  
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
                    Áreas de Investigación  
                </Typography>  
                <Typography   
                    variant="body1"   
                    className="text-gray-700 mb-4"   
                    style={{ fontSize: '1.2rem' }} // Aumentar tamaño de la fuente del cuerpo  
                >  
                    La Red se centra en varias líneas de investigación clave:  
                </Typography>  
                <List>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            1. Diagnósticos fisiológicos: Desarrollo y/o empleo de dispositivos avanzados para la detección de parásitos gastrointestinales y otros indicadores de salud animal.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            2. Salud y bienestar animal: Uso de productos naturales con el enfoque "Una Sola Salud-Un Bienestar” para la prevención y tratamiento de enfermedades.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            3. Educación nutricional: Desarrollo de programas educativos sobre manejo y nutrición animal.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            4. Sostenibilidad alimentaria: Estrategias para garantizar la producción de alimentos de alta calidad y seguros.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            5. Mejoramiento genético: Investigación para el mejoramiento genético y creación de sementales resistentes a infecciones gástricas.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            6. Gestión del agua para la producción animal: Diseñar y optimizar sistemas de abastecimiento y distribución de agua para los animales y la crianza de peces en granjas, asegurando un uso eficiente y sostenible de los recursos hídricos.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            7. Control y manejo de aguas residuales: Implementar sistemas de tratamiento de aguas residuales en granjas para reducir la contaminación y proteger los recursos hídricos.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            8. Modelos predictivos y análisis de datos: Desarrollar modelos matemáticos y análisis de datos para predecir enfermedades y problemas de salud en animales, optimizando la producción.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            9. Optimización de recursos: Crear algoritmos para la gestión eficiente de recursos en sistemas de producción, mejorando el bienestar animal y la productividad.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            10. Diseño de infraestructura: Planificación y construcción de instalaciones adecuadas para el alojamiento y manejo de animales, garantizando condiciones óptimas de bienestar.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            11. Construcción sostenible: Uso de materiales sostenibles y técnicas de construcción ecológicas compatibles en el desarrollo de infraestructuras para la producción animal.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            12. Estudios de impacto social: Investigar cómo las prácticas inadecuadas de bienestar animal afectan a las comunidades locales y su economía, promoviendo cambios culturales y educativos.  
                        </Typography>  
                    </ListItem>  
                    <ListItem>  
                        <Typography variant="body2" style={{ fontSize: '1rem' }}>  
                            13. Legislación y políticas: Investigación y promoción de leyes y políticas que mejoren el bienestar animal.  
                        </Typography>  
                    </ListItem>  
                </List>  
            </CardContent>  
        </Card>  
    );  
};  

export default ResearchAreasCard;