import React, { useState } from 'react';  
import {  
  Card,  
  Input,  
  Button,  
  Typography,  
  Dialog,  
  DialogActions,  
  DialogContent,  
  DialogTitle  
} from '@material-ui/core'; 

import { Email as EmailIcon, Close as CloseIcon } from '@material-ui/icons'; // Importar íconos aquí  


import emailjs from 'emailjs-com';  

export default function SimpleRegistrationForm() {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    nombre: '',  
  });  

  const [openModal, setOpenModal] = useState(false); // Estado para controlar el modal  

  // Manejo de cambios en el formulario  
  const handleChange = (e:any) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  

  // Manejo del envío del formulario  
  const handleSubmit = (e:any) => {  
    e.preventDefault();  

    // Validar campos vacíos  
    if (!formData.name || !formData.email) {  
      alert('Por favor, rellene todos los campos del formulario.'); // Alertar si los campos están vacíos  
      return; // Salir de la función si hay campos vacíos  
    }  

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

    // Guardar el nombre en el estado antes de abrir el modal  
    setFormData({ ...formData, nombre: formData.name });  

    // Enviar correo al usuario  
    emailjs.send('service_wez9i2f', 'template_4qrwk1d', userTemplateParams, 'DSGGN0cWLWbp0lO-k')  
      .then((response) => {  
        console.log('Mensaje enviado al usuario exitosamente!', response.status, response.text);  
        // Abrir el modal al enviar el mensaje y reiniciar el formulario  
        setOpenModal(true);  
        setFormData({ name: '', email: '', nombre: formData.name });  
      })  
      .catch((err) => {  
        console.error('Error al enviar el mensaje:', err);  
      });  

    // Enviar notificación  
    emailjs.send('service_ull22kp', 'template_wdsgep6', notificationTemplateParams, 'DSGGN0cWLWbp0lO-k')  
      .then((response) => {  
        console.log('Mensaje enviado a la red exitosamente!', response.status, response.text);  
      })  
      .catch((err) => {  
        console.error('Error al enviar el mensaje:', err);  
      });  
  };  

  // Manejo del cierre del modal  
  const handleCloseModal = () => {  
    setOpenModal(false); // Cerrar el modal  
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
          <Typography variant="h6" className="-mb-3 text-center">  
            Nombre y Apellidos  
          </Typography>  
          <Input  
            name="name"  
            placeholder="Juan Perez Perez"  
            value={formData.name}  
            onChange={handleChange}  
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"  
          />  
          <Typography variant="h6" className="-mb-3 text-center bg-gray-100">  
            Correo Gmail  
          </Typography>  
          <Input  
            name="email"  
            placeholder="nombre@gmail.com"  
            value={formData.email}  
            onChange={handleChange}  
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"  
          />  
        </div>  
        <Button variant="contained" className="mt-6 m-11" fullWidth type="submit">  
          Enviar  
        </Button>  
      </form>  

      {/* Modal para mostrar el mensaje de éxito */}  
      <Dialog open={openModal} onClose={handleCloseModal}>  
        <DialogTitle>Mensaje Enviado</DialogTitle>  
        <DialogContent>  
          <Typography>  
            Mensaje enviado a su correo Gmail.  
          </Typography>  
        </DialogContent>  
        <DialogActions>  
        <Button   variant="contained"
            onClick={() =>{     handleCloseModal(); // Cerrar el modal  
              window.open('https://mail.google.com', '_blank');
              //Redirigir al correo
              }}   
            startIcon={<EmailIcon />}
          >  
            Revisar correo  
          </Button>         
            <Button
            variant="outlined"
            onClick={handleCloseModal}
                        startIcon={<CloseIcon />}

            >Cerrar</Button>  
        </DialogActions>  
      </Dialog>  
    </Card>  
  );  
}