import Carousel from 'react-material-ui-carousel'

export default function CarouselDefault() {  
  return (  
    <Carousel className=' absolute sm:-my-96 w-full h-full rounded-t-xl '>  
      <div className="relative h-full w-full " >  
        <img  
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"  
          alt="image 1"  
          className="h-full w-full object-cover rounded-b-xl"  
        />  
      </div>  
      <div className="relative h-full w-full">  
        <img  
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"  
          alt="image 2"  
          className="h-full w-full object-cover rounded-b-xl"  
        />  
      </div>  
      <div className="relative h-full w-full">  
        <img  
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"  
          alt="image 3"  
          className="h-full w-full object-cover rounded-b-xl"  
        />  
      </div>  
    </Carousel>  
  );  
}