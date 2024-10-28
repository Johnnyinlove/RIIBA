import Carousel from 'react-material-ui-carousel'

// let clases:string[]=[" h-full w-full",
//   "h-full w-full object-cover rounded-b-xl"
// ];

let clases=['flex  justify-center w-full h-[36rem] relative overflow-hidden',
  ' h-full w-full object-container object-center shadow-xl shadow-blue-gray-900/50 rounded-b-3xl'
];

// object-contain // esta es la que me permite ajustar la imagen al div


let ImagenInfo = [  
  { src: "https://cdn.pixabay.com/photo/2024/08/06/15/29/ai-generated-8949588_640.jpg",
     alt:"imgen 1", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://cdn.pixabay.com/photo/2024/06/28/09/45/veterinarian-8859098_640.jpg",
     alt:"imgen 2", 
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
    },  
  { src: "https://cdn.pixabay.com/photo/2017/05/16/17/33/holstein-cattle-2318436_640.jpg",
     alt:"imgen 3",
     ClassNameDiv: clases[0],
     ClassNameImag: clases[1]
      },
  { src: "https://cdn.pixabay.com/photo/2024/07/31/12/53/horses-8934699_640.jpg",
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
 className=' w-full overflow-hidden '>   
  {ImagenInfo.map((img, index) => (  
    <div key={index} className={img.ClassNameDiv}>  
      <img className={img.ClassNameImag} src={img.src} alt={img.alt} />  
    </div>  
  ))}  
</Carousel>



  );  
}