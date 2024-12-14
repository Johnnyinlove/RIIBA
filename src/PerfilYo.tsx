import {
    Card,
    Typography,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";

  import yo from "../public/Yovoy.jpg"
  
  import { X, Facebook, Instagram } from "iconoir-react";

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
                  country='Cuba'   
                  flagSrc='https://flagcdn.com/w320/cu.png'   
                  // socialLinks={
                  //   facebook: "https://facebook.com/carlos",  
                  //   twitter: "https://twitter.com/carlos",  
                  //   linkedin: "https://linkedin.com/in/carlos",  
                  //   github: "https://github.com/carlos"}   
              />

</>
    );
  }
  