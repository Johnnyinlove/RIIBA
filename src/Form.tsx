import React, { useState } from 'react';  
import {  
  Card,  
  Input,  
  Button,  
  Typography,  
} from '@material-ui/core';  

import emailjs from 'emailjs-com';  

export default function SimpleRegistrationForm() {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    showMessage: false,  
    nombre: '',  
  });  

  const handleChange = (e:any) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  

  const handleSubmit = (e:any) => {  
    e.preventDefault();  

   

    const userTemplateParams = {  
      name: formData.name,  
      email: formData.email,  
      message: `Gracias por registrarte, ${formData.name}! Estamos emocionados de tenerte en nuestro equipo. Lee atentamente las siguientes indicaciones`,
    };  

    const notificationTemplateParams = {  
      to_email: 'redriiba@gmail.com',  
      name: formData.name,  
      email: formData.email,  
      message: `Nuevo registro: el Usuario ${formData.name} con correo (${formData.email}) se ha registrado exitosamente.`  
    };  

    // Guardar el nombre en el estado antes de reiniciar el formulario  
    setFormData({ ...formData, nombre: formData.name });  

    emailjs.send('service_wez9i2f', 'template_4qrwk1d', userTemplateParams, 'DSGGN0cWLWbp0lO-k')  
      .then((response) => {  
        console.log('Mensaje enviado al usuario exitosamente!', response.status, response.text);  
       // Mostrar mensaje y reiniciar el formulario  
       setFormData({ name: '', email: '', showMessage: true, nombre: formData.name });  
       setTimeout(() => setFormData(prev => ({ ...prev, showMessage: false })), 5000);  
      })  
      .catch((err) => {  
        console.error('Error al enviar el mensaje:', err);  
      });  
      
    emailjs.send('service_ull22kp', 'template_wdsgep6', notificationTemplateParams, 'DSGGN0cWLWbp0lO-k')  
      .then((response) => {  
        console.log('Mensaje enviado  a la red exitosamente!', response.status, response.text);  
      })  
      .catch((err) => {  
        console.error('Error al enviar el mensaje:', err);  
      });  
  };  

  return (  
    <Card className='justify-center justify-items-center p-4 w-full overflow-hidden' color="transparent">  
      <Typography variant="h4" className="bg-transparent">  
        Formulario  
      </Typography>  
      <Typography className="mt-1 text-center w-64 max-w-screen-lg sm:w-96 font-normal">  
        ¿Quieres ser parte del nuestro equipo?<br /> Regístrate ingresando tus datos  
      </Typography>  
      <form className="mt-8 mb-2 border-gray-500 border-2 rounded-2xl p-5 w-64 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>  
        <div className="mb-1 flex flex-col gap-6">  
          <Typography variant="h6" className="-mb-3 text-center  ">  
            Nombre y Apellidos  
          </Typography>  
          <Input  
            name="name"  // Agrega el atributo name para manejar el cambio  
            placeholder="Juan Perez Perez"  
            value={formData.name}  
            onChange={handleChange}  
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"  
          />  
          <Typography variant="h6" className="-mb-3 text-center bg-gray-100">  
            Correo Gmail  
          </Typography>  
          <Input  
            name="email"  // Agrega el atributo name para manejar el cambio  
            placeholder="nombre@gmail.com"  
            value={formData.email}  
            onChange={handleChange}  
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"  
          />  
        </div>  
        <Button variant="contained" className="mt-6  m-11" fullWidth type="submit">  
          Enviar  
        </Button>   

        {formData.showMessage && (  
          <Typography className="mt-1 text-center w-64 max-w-screen-lg sm:w-96 font-normal">  
            Felicidades, {formData.nombre}! Revise su correo electrónico.  
          </Typography>  
        )}  
      </form>  
    </Card>  
  );  
}