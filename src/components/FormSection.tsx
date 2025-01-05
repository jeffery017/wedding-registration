type Props = {
    group:string
    relationship: string
    setIsDialogShow: React.Dispatch<React.SetStateAction<boolean>>
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
    setWillAttend: React.Dispatch<React.SetStateAction<boolean>>
}


import flowerRing from '../assets/wreath-3384413_1280.png'
import Form from './Form'
export default function FormSection({
    group, 
    relationship,
    setIsDialogShow, 
    setIsSubmitted,
    setWillAttend
    }:Props ) {
  return (
    <section className='relative / p-2 pt-16 md:pb-16 / flex flex-col font-light gap-4 overflow-hidden'>
        <img src={flowerRing} alt="" className='absolute w-[800px] top-0 right-0 object-cover opacity-20' />
        <img src={flowerRing} alt="" className='absolute  w-[900px] bottom-0 left-0 object-cover opacity-20 rotate-90' />
        <h1 className='text-2xl text-center tracking-wider font-light'>報名參加</h1>
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
  )
}