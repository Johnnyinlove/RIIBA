
import icon from '../public/icono.jpeg'

export default function Card() {
    return (
      <>


<div className="max-w-md mx-auto bg-white shadow-md  md:max-w-2xl ">
<div className="md:flex  ">
  <div className="md:flex-shrink-0   sd:flex-shrink-2">
    <img className=" h-48 w-full object-cover  md:w-48 sd:h-2" src={icon} alt="Man looking at item at a store"/>
  </div>
  <div className="p-8 ">
    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
    <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
  </div>
</div>
</div>


</>)}
