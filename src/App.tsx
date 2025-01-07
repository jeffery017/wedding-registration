 
import { useEffect, useState } from 'react'
import './App.css' 
// components 
import SubmitDialog from './components/SubmitDialog' 
import Header from './components/Header'
// image 
import backgroundImage from './assets/flower-background.jpg' 
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
    <div  className='relative container m-auto flex flex-col md:flex-row'> 
      <Header/> 
      <img id="bgImage" src={backgroundImage} alt="" className={`mt-[50vh] sm:mt-0 parallax absolute top-0 right-0 h-[135vh] min-h-[80em] w-full object-cover object-right-top opacity-30 -z-10 `}
        style={{
          transform: `translateY(${offsetY * 0.5}px)`, // Adjust speed with multiplier
        }} 
        />
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
