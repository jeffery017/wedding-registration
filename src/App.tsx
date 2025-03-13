 
import { useEffect, useState } from 'react'
import './App.css'
// components 
import Header from './components/Header'
import SubmitDialog from './components/SubmitDialog'
// image 
import backgroundImage from './assets/blue_flower_background.jpg'
import FormSection from './components/FormSection'


function App() { 
  const queryParams = new URLSearchParams(window.location.search)
  const group = queryParams.get("group") || ""
  const relationship = queryParams.get("r") || ""
  const [isDialogShow, setIsDialogShow] = useState(false) 
  const [isSubmitted, setIsSubmitted] =  useState(false)
  const [willAttend, setWillAttend] = useState(false)
  const [offsetY, setOffsetY] = useState(0); 
 
   

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetY(window.scrollY);
    }, 10); // Adjust interval timing for smoothness (e.g., 50ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <> 
    <div  className='relative  m-auto flex flex-col md:flex-row'> 
      <div className='snap-start'></div>
      <div className='absolute w-full h-full bg-neutral-100/50'></div>
      {/* <div className='absolute w-full h-full bg-blue-100/10'></div> */}
      <Header/> 
      <img id="bgImage" src={backgroundImage} alt="" className={`mt-[50vh] sm:mt-0 parallax absolute top-0 right-0 h-[135vh] min-h-[80em] w-full md:w-2/3 object-cover object-right-top opacity-70 -z-10 `}
        style={{
          transform: `translateY(${offsetY * 0.5}px)`, // Adjust speed with multiplier
        }} 
        />
        {/* <div className='snap h-[600px] bg-red-400 m-2'></div>
        <div className='snap-start h-[600px] bg-red-400 m-2'></div>
        <div className='snap-start h-[600px] bg-red-400 m-2'></div>
        <div className='snap-start h-[600px] bg-red-400 m-2'></div> */}
        
        <FormSection 
          group={group} 
          relationship={relationship}
          setIsDialogShow={setIsDialogShow} 
          setIsSubmitted={setIsSubmitted}
          setWillAttend={setWillAttend}
          />
      {/* <div className='relative flex flex-col md:flex-col overflow-hidden '>
        <Timeline/> 
      </div>  */}
         

    </div>
      {isDialogShow &&  <SubmitDialog 
        isSubmitted={isSubmitted}
        willAttend={willAttend} 
        setIsDialogShow={setIsDialogShow}/>}
    </>
  )
}

export default App
