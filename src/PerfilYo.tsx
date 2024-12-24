
  import yo from "../public/Yovoy.jpg"
  

  import ProfileCardMiembros from "./ProfileCardMiembros";

  import NavBar  from "./NavInicio";
  export default function PerfilYo() {
  

    return (
      <>
 <header>
  <NavBar/>
  </header>
      <ProfileCardMiembros   
                  profilePicSrc={yo}   
                  name='Juan Cruz Oduardo'   
                  position='Desarrollador Web'   
                  institution='Universidad de Ciego de Avila'   
                  country='Cuba'   
                  flagSrc='https://flagcdn.com/w320/cu.png'   
                  socialLinks={{
                    facebook: "https://www.facebook.com/juan.cruzoduardo/",  
                    twitter: "https://x.com/JohnManito2",  
                    // linkedin: "https://linkedin.com/in/carlos",  
                    github: "https://github.com/Johnnyinlove"}}   
              />

</>
    );
  }
  