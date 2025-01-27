import React, { useState } from 'react';  
import { Button } from '@mui/material';  

const ImageUploader = () => {  
  const [image, setImage] = useState(null);  // Cambiar a null para almacenar solo una imagen  

  const handleImageChange = (e:any) => {  
    const file = e.target.files[0];  // Solo toma el primer archivo  
    if (file) {  
      const imgUrl:any = URL.createObjectURL(file);  
      setImage(imgUrl);  // Establece solo una imagen  
    }  
  };  

  return (  
    <div className="flex flex-col items-center p-4">  
     
      <Button variant="contained" component="label" className="mb-4">  
        Subir Imagen  
        <input type="file" accept="image/*" hidden onChange={handleImageChange} />  
      </Button>  
      {image && (  // Solo renderiza si hay una imagen  
        <div className="mb-4">  
          <img src={image} alt="Uploaded Preview" className="w-52 overflow-hidden rounded-lg" />  
        </div>  
      )}  
    </div>  
  );  
};  

export default ImageUploader;