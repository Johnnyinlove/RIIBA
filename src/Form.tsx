import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from '@material-ui/core';



  export default function SimpleRegistrationForm() {
    return (
      
       <Card className='justify-center justify-items-center p-4 w-full overflow-hidden'  color="transparent">
        <Typography variant="h4" className="bg-transparent">
          Formulario
        </Typography>
        <Typography className="mt-1  text-center w-64 max-w-screen-lg sm:w-96 font-normal">
        ¿Quieres ser parte del nuestro equipo?<br/> Regístrate ingresando tus datos
                </Typography>
        <form className="mt-8 mb-2 w-64 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6"  className="-mb-3 text-center bg-blue-900 ">
              Nombre y Apellidos
            </Typography>
            <Input
              placeholder=" Juan Perez Perez"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

            />
            <Typography variant="h6" className="-mb-3 text-center bg-gray-100">
              Correo Gmail
            </Typography>
            <Input
              placeholder="nombre@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

            />
            <Typography variant="h6" className="-mb-3 text-center bg-gray-100">
              Contraseña
            </Typography>
            <Input
              type="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
          <Checkbox /> Recordar Contraseña
          <Button variant="contained" className="mt-6 bg-cyan-500 m-11" fullWidth>
            Enviar
          </Button>
          {/* <Typography  className="mt-4 text-center font-normal bg-gray-100">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography> */}
        </form>
      </Card>

    );
  }