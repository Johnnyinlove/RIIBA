 
  import ProfileCardMiembros from "./ProfileCardMiembros";
  export default function ProfileCard() {
    
    const profiles = [  
      {  perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
          name: "Iosvany Palmero Benegas",  
          position: "Investigador Principal",
          institution:'Universidad de Ciego de Avila',  
          country: "Cuba",  
          flagSrc: "https://flagcdn.com/w320/cu.png",  
          socialLinks: {  
              facebook: "https://facebook.com/juan",  
              twitter: "https://twitter.com/juan",  
              linkedin: "https://linkedin.com/in/juan",  
              github: "https://github.com/juan",  
          },  
      },  
      {  perfil: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: "Angel Ramón Contrera Nápoles",  
          position: "Coordinador de Proyectos", 
          institution:'Universidad de Ciego de Avila',   
          country: "Cuba",  
          flagSrc: "https://flagcdn.com/w320/cu.png",  
           socialLinks: {  
              facebook: "https://facebook.com/ana",  
              twitter: "https://twitter.com/ana",  
              linkedin: "https://linkedin.com/in/ana",  
              github: "https://github.com/ana",  
          },  
      },  
      {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
          name: " Ronney Soto Noguera",  
          position: "Coordinador de Proyectos",
          institution:'Universidad de Ciego de Avila',   
          country: "Cuba",  
          flagSrc: "https://flagcdn.com/w320/cu.png",  
       socialLinks: {  
              facebook: "https://facebook.com/carlos",  
              twitter: "https://twitter.com/carlos",  
              linkedin: "https://linkedin.com/in/carlos",  
              github: "https://github.com/carlos",  
          },  
      },
      {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
          name: " Gerardo Martínez Jimenez",  
          position: "Coordinador de Proyectos", 
          institution:'Universidad de Ciego de Avila',   
          country: "Cuba",  
          flagSrc: "https://flagcdn.com/w320/cu.png",  
       socialLinks: {  
              facebook: "https://facebook.com/carlos",  
              twitter: "https://twitter.com/carlos",  
              linkedin: "https://linkedin.com/in/carlos",  
              github: "https://github.com/carlos",  
          },  
      },
          {  perfil: 'https://randomuser.me/api/portraits/men/77.jpg',
          name: " Jorge Daniel Hernández Cabrera",  
          position: "Coordinador de Proyectos", 
          institution:'Universidad de Ciego de Avila',   
          country: "Cuba",  
          flagSrc: "https://flagcdn.com/w320/cu.png",  
       socialLinks: {  
              facebook: "https://facebook.com/carlos",  
              twitter: "https://twitter.com/carlos",  
              linkedin: "https://linkedin.com/in/carlos",  
              github: "https://github.com/carlos",  
          },  
      },  
  ];  

  return (  
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">   
          {profiles.map((profile, index) => (  
              <ProfileCardMiembros   
                  key={index}
                  profilePicSrc={profile.perfil}   
                  name={profile.name}   
                  position={profile.position} 
                  institution={profile.institution}  
                  country={profile.country}   
                  flagSrc={profile.flagSrc}   
                   socialLinks={index}   
              />  
          ))}  
      </div>  
  );  
};  