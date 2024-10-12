import { ClassNames } from '@emotion/react';
import Carousel from 'react-material-ui-carousel'

// let clases:string[]=[" h-full w-full",
//   "h-full w-full object-cover rounded-b-xl"
// ];

let clases=['flex flex-wrap justify-center',
  'h-auto max-w-xs p-2'
];


let ImagenInfo = [  
  { src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
     alt:"imgen 1", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
     alt:"imgen 2", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
     alt:"imgen 3",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },  
];

// let prub=ImagenInfo.map((img)=>{return img;})

// console.log(typeof clases[0]);


export default function CarouselDefault() {  
  return (  
<Carousel autoPlay={true}
            interval={2000} // Duración de la transición en milisegundos  
 className='relative xl:-top-16  min-[320px]:-top-14 max-[600px]:-top-14 sm:-my-96 w-full   overflow-hidden'>   
  {ImagenInfo.map((img, index) => (  
    <div key={index} className='flex justify-center w-full h-96'>  
      <img className='w-full h-full object-cover rounded-b-3xl' src={img.src} alt={img.alt} />  
    </div>  
  ))}  
</Carousel>
  );  
}