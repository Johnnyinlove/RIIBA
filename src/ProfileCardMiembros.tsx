import { useEffect, useRef, useState } from 'react';  
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';  
import { Facebook, Twitter, LinkedIn, GitHub } from '@material-ui/icons';  

// , socialLinks

const ProfileCardMiembros = ({ name, position, country, flagSrc, profilePicSrc, socialLinks }:any) => {  
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
            <CardContent className="flex flex-col items-center">  
                {/* Imagen de perfil redondeada */}  
                <img  
                    src={profilePicSrc}  
                    alt={`${name}'s Profile`}  
                    className="w-28 h-28 rounded-full mb-4" // Tamaño de la imagen y borde redondeado  
                />  

                <Typography variant="h6" className="font-bold text-center mb-2">  
                    {name}  
                </Typography>  
                <Typography variant="body1" className="text-gray-700 mb-2">  
                    {position}  
                </Typography>  
                <img  
                    src={flagSrc}  
                    alt={`${country} Flag`}  
                    className="w-12 h-8 mb-2"  
                />  
                <Typography variant="body1" className="text-gray-700 mb-4">  
                    {country}  
                </Typography>

                {/* <div className="flex space-x-2">  
                    {socialLinks.facebook && (  
                        <IconButton href={socialLinks.facebook} target="_blank">  
                            <Facebook fontSize="small" />  
                        </IconButton>  
                    )}  
                    {socialLinks.twitter && (  
                        <IconButton href={socialLinks.twitter} target="_blank">  
                            <Twitter fontSize="small" />  
                        </IconButton>  
                    )}  
                    {socialLinks.linkedin && (  
                        <IconButton href={socialLinks.linkedin} target="_blank">  
                            <LinkedIn fontSize="small" />  
                        </IconButton>  
                    )}  
                    {socialLinks.github && (  
                        <IconButton href={socialLinks.github} target="_blank">  
                            <GitHub fontSize="small" />  
                        </IconButton>  
                    )}  
                </div>   */}
            </CardContent>  
        </Card>  
    );  
};  

export default ProfileCardMiembros;