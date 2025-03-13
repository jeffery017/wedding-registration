import shiningGIF from '../assets/blink-1.gif'
import mainPicture from '../assets/main-picture-3.jpg'
import title from '../assets/title.png'
export default function Header() { 
 
  return (
    <div className="relative md:sticky md:top-0 w-full lg:w-1/2  h-screen overflow-hidden" >
      <img 
        src={mainPicture} 
        alt="main" 
        className='absolute top-0 w-full h-full object-cover' 
      />
      <img src={shiningGIF} alt="shining" className='absolute top-0 w-full h-full mix-blend-screen object-cover' />
      <img src={title} alt="title" className='absolute mx-[25%] top-32 w-1/2 object-contain ' />      
    </div>
  )
}