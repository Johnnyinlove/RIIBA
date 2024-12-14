 
  import ProfileCardMiembros from "./ProfileCardMiembros";
  export default function ProfileCard() {
    
    const profiles = [  
      {  perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
          name: "Juan Pérez",  
          position: "Investigador Principal",  
          country: "México",  
          flagSrc: "https://flagcdn.com/w320/mx.png",  
          socialLinks: {  
              facebook: "https://facebook.com/juan",  
              twitter: "https://twitter.com/juan",  
              linkedin: "https://linkedin.com/in/juan",  
              github: "https://github.com/juan",  
          },  
      },  
      {  perfil: 'https://randomuser.me/api/portraits/women/48.jpg',
          name: "Ana Gómez",  
          position: "Coordinadora de Proyectos",  
          country: "Colombia",  
          flagSrc: "https://flagcdn.com/w320/co.png",  
          socialLinks: {  
              facebook: "https://facebook.com/ana",  
              twitter: "https://twitter.com/ana",  
              linkedin: "https://linkedin.com/in/ana",  
              github: "https://github.com/ana",  
          },  
      },  
      {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
          name: "Carlos Martínez",  
          position: "Desarrollador",  
          country: "Argentina",  
          flagSrc: "https://flagcdn.com/w320/ar.png",  
          socialLinks: {  
              facebook: "https://facebook.com/carlos",  
              twitter: "https://twitter.com/carlos",  
              linkedin: "https://linkedin.com/in/carlos",  
              github: "https://github.com/carlos",  
          },  
      },  
  ];  

  return (  
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">   
          {profiles.map((profile, index) => (  
              <ProfileCardMiembros   
                  key={index}
                  profilePicSrc={profile.perfil}   
                  name={profile.name}   
                  position={profile.position}   
                  country={profile.country}   
                  flagSrc={profile.flagSrc}   
                //    socialLinks={profile.socialLinks}   
              />  
          ))}  
      </div>  
  );  
};  