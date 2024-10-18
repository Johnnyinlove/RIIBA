import { ClassNames } from '@emotion/react';
import Carousel from 'react-material-ui-carousel'

// let clases:string[]=[" h-full w-full",
//   "h-full w-full object-cover rounded-b-xl"
// ];

let clases=['flex  justify-center  h-[36rem] relative overflow-hidden',
  ' h-auto w-auto object-contain rounded-b-3xl'
];

// object-contain // esta es la que me permite ajustar la imagen al div


let ImagenInfo = [  
  { src: "https://cdn.pixabay.com/photo/2020/03/06/09/23/veterinarian-4906607_640.jpg",
     alt:"imgen 1", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://cdn.pixabay.com/photo/2024/06/28/09/45/veterinarian-8859098_640.jpg",
     alt:"imgen 2", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://cdn.pixabay.com/photo/2019/06/24/15/30/sheep-4296302_640.jpg",
     alt:"imgen 3",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },
  { src: "https://cdn.pixabay.com/photo/2017/08/06/18/52/pony-2595144_640.jpg",
     alt:"caballos",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },  
       { src: "https://cdn.pixabay.com/photo/2024/02/23/15/16/ai-generated-8592228_640.jpg",
     alt:"caballos poni",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },  
];

// let prub=ImagenInfo.map((img)=>{return img;})

// console.log(typeof clases[0]);

// className='relative xl:-top-16 lg:-top-16 2xl:-top-24 min-[320px]:-top-14 max-[600px]:-top-14 sm:-my-96 w-full   overflow-hidden'>   


export default function CarouselDefault() {  
  return (  
<Carousel autoPlay={true}
            interval={2000} // Duración de la transición en milisegundos  
 className=' w-full  overflow-hidden'>   
  {ImagenInfo.map((img, index) => (  
    <div key={index} className={img.ClassNameDiv}>  
      <img className={img.ClassNameImag} src={img.src} alt={img.alt} />  
    </div>  
  ))}  
</Carousel>



  );  
}