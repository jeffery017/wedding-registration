 
import { useState } from 'react'
import './App.css' 
// components 
import SubmitDialog from './components/SubmitDialog'
import Timeline from './components/Timeline'
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

  return (
    <>
    <div  className='container m-auto'>
      <div className='relative overflow-hidden flex flex-col md:flex-row '>
        <div className='absolute bottom-0  bg-neutral-200 w-full h-full'></div>
        <img src={backgroundImage} alt="" className='absolute bottom-0 h-screen w-full object-cover object-right-bottom opacity-20' />
        <Header/>
        <Timeline/> 
      </div> 
      <FormSection 
        group={group} 
        relationship={relationship}
        setIsDialogShow={setIsDialogShow} 
        setIsSubmitted={setIsSubmitted}
        setWillAttend={setWillAttend}
        />
         
      {isDialogShow &&  <SubmitDialog 
        isSubmitted={isSubmitted}
        willAttend={willAttend} 
        setIsDialogShow={setIsDialogShow}/>}

    </div>
    </>
  )
}

export default App
