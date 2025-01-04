 
import { useState } from 'react'
import './App.css' 
// components
import Form from './components/Form'
import SubmitDialog from './components/SubmitDialog'
import Timeline from './components/Timeline'
import Header from './components/Header'
// image
import backgroundImage from './assets/flower-background.jpg'
import flowerRing from './assets/wreath-3384413_1280.png'


function App() { 
  const queryParams = new URLSearchParams(window.location.search)
  const group = queryParams.get("group") || ""
  const relationship = queryParams.get("r") || ""
  const [isDialogShow, setIsDialogShow] = useState(true) 
  const [isSubmitted, setIsSubmitted] =  useState(true)
  const [willAttend, setWillAttend] = useState(false)

  return (
    <>
    <div >
      <div className='relative overflow-hidden'>
        <div className='absolute bottom-0  bg-neutral-200 w-full h-full'></div>
        <img src={backgroundImage} alt="" className='absolute bottom-0 h-screen w-full object-cover object-right-bottom opacity-20' />
        <div className='flex flex-col md:flex-row'>
          <Header/>
          <Timeline/>
        </div>
      
      </div>
      <section className='relative px-2 pt-16 md:pb-16 flex flex-col font-light gap-4 overflow-hidden'>
        <img src={flowerRing} alt="" className='absolute w-[800px] top-0 right-0 object-cover opacity-20' />
        <img src={flowerRing} alt="" className='absolute  w-[900px] bottom-0 left-0 object-cover opacity-20 rotate-90' />
        <h1 className='text-2xl text-center z-10'>報名參加</h1>
        <p className='text-center m-auto max-w-md z-10'>如果您願意出席我們的婚禮，請填寫以下問卷，以方便我們評估人數。如果您不方便參與，還是歡迎您留下對我們的祝福。</p>
        <div className='relative m-auto max-w-2xl mt-16'>
          <Form 
            group={group} 
            relationship={relationship}
            setIsDialogShow={setIsDialogShow} 
            setIsSubmitted={setIsSubmitted}
            setWillAttend={setWillAttend}
            />
        </div>
      </section> 
      {isDialogShow && 
      <SubmitDialog 
        isSubmitted={isSubmitted}
        willAttend={willAttend} 
        setIsDialogShow={setIsDialogShow}/>}

    </div>
    </>
  )
}

export default App
