import Form from './Form'
import Timeline from './Timeline'

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
              留下珍貴的記憶<br/>
              <br/>
              林以奇 吳濟芸<br/>
              敬邀
              </p> 
      </div>
     
     
      <Timeline/>
      <div>
        <h1 className='text-2xl  tracking-wider pb-2'>報名參加</h1>
        <p className='m-auto max-w-md z-10'>如果您願意參加我們的婚禮，請填寫以下問卷，以方便我們評估人數。如果您不方便出席，還是歡迎您留下對我們的祝福。</p>
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