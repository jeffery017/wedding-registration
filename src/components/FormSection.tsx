import Form from './Form' 

type Props = {
    group:string
    relationship: string
    setIsDialogShow: React.Dispatch<React.SetStateAction<boolean>>
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
    setWillAttend: React.Dispatch<React.SetStateAction<boolean>>
}



export default function FormSection({
  group, 
  relationship,
  setIsDialogShow, 
  setIsSubmitted,
  setWillAttend
}:Props ) {
  

  return (
    <section className='py-24 relative  p-2 md:px-8  flex flex-col font-light gap-16 overflow-hidden text-center'> 
      <div>
        <h1 className='text-2xl text-center tracking-wider pb-2'>我們要結婚了</h1>
        <p className=' leading-loose'>
              親愛的家人朋友們<br/>
              謝謝你們參與我們人生的不同階段<br/>
              為我們留下許多美好的回憶<br/>
              誠摯的邀請你們<br/>
              參與我們的這一天<br/>
              希望能與你們一起分享我們的喜悅<br/>
              留下珍貴的記憶</p> 
      </div>
     
     
      <TimeLine/>
        {/* <img src={flowerRing} alt="" className='absolute w-[800px] top-0 right-0 object-cover opacity-20' />
        <img src={flowerRing} alt="" className='absolute  w-[900px] bottom-0 left-0 object-cover opacity-20 rotate-90' /> */}
      <div>
        <h1 className='text-2xl  tracking-wider pb-2'>報名參加</h1>
        <p className='m-auto max-w-md z-10'>如果您願意出席我們的婚禮，請填寫以下問卷，以方便我們評估人數。如果您不方便參與，還是歡迎您留下對我們的祝福。</p>
      </div>
      <Form 
        group={group} 
        relationship={relationship}
        setIsDialogShow={setIsDialogShow} 
        setIsSubmitted={setIsSubmitted}
        setWillAttend={setWillAttend}
        />  
    </section> 
  )
}

const TimeLine = () => { return <div className='relative py-16 sm:py-32 gap-6 sm:gap-12 w-full min-h-[60vh] flex flex-col items-center justify-center  bg-white/80 border-[1.5px] border-red-100 rounded-md shadow-md '>
  
  
  <div> 
      <h1 className='text-2xl text-center tracking-wider pb-2'>婚禮時程</h1>
      <p className='text-center'>2025.6.28 (六)</p> 
  </div> 
  <div className='text-2xl'>・</div>
  <div>
    <h2 className='text-2xl  pb-2'>證婚</h2>
    <p>10:00~11:30</p>
    <p>大安教會禮拜堂<br/>台北市和平東路3段1巷51號</p>
    <a 
      className='underline'
      href="https://maps.app.goo.gl/4tYBiYdGP9t7ziA87" 
      target='blank'>查看 Google Map</a>
  </div>
  <div className='text-2xl'>・</div>
  <div>
    <h2 className='text-2xl  pb-2'>婚宴</h2>
    <p>12:30~15:00</p>
    <p>彭園壹品宴<br/>台北市南京東路二段63號2樓</p>
    <a 
      className='underline'
      href="https://maps.app.goo.gl/VS8uK1gWWFZMAP5E7" 
      target='blank' >查看 Google Map</a>
    {/* <p></p> */}
  </div>
</div> }