 
  import ProfileCardMiembros from "./ProfileCardMiembros";
import { profiles } from "./Data";

  export default function ProfileCard() {
    
    
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