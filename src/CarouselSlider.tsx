import Carousel from 'react-material-ui-carousel'
import { ImagenInfo } from "./Data";



export default function CarouselDefault() {  
  return (  
<Carousel autoPlay={true}
            interval={2000} // Duración de la transición en milisegundos  
 className=' w-full overflow-hidden '>   
  {ImagenInfo.map((img, index) => (  
    <div key={index} className={img.ClassNameDiv}>  
      <img className={img.ClassNameImag} src={img.src} alt={img.alt} />  
    </div>  
  ))}  
</Carousel>



  );  
}