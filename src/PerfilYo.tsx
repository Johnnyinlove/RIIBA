
  import yo from "../public/Yovoy.jpg"
  

  import ProfileCardMiembros from "./ProfileCardMiembros";
  import ImageUploader from './ImageUploader'; // Ajusta la ruta según tu estructura  

  import NavBar  from "./NavInicio";


  export default function PerfilYo() {
  

    return (
      <>
 <header>
  <NavBar/>
  </header>
  
  <div className="min-h-screen flex items-center justify-center bg-gray-100">  
        <ImageUploader />  
      </div>

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
  