import flowerRing from '../assets/flower-ring.jpg'

type Props = {
  isSubmitted: boolean
  willAttend: boolean
  setIsDialogShow: React.Dispatch<React.SetStateAction<boolean>>
}
 

export default function SubmitDialog({
  isSubmitted,
  willAttend,
  setIsDialogShow
}: Props) { 


  return (
    <div className="fixed w-full h-lvh  top-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-black/20 z-40"
      onClick={() => setIsDialogShow(false)}
    > 
      <div className="relative w-full max-w-[350px] m-2 aspect-square bg-white border-2 border-red-300 shadow-md rounded-full flex flex-col items-center justify-center gap-4 font-light text-xl overflow-hidden text-center">
      <img src={flowerRing} alt="" className='absolute h-[140%] object-cover opacity-30' />
        {/* <img src={backgroundImage} alt="" className='absolute bottom-0 h-[200%] object-cover opacity-20 object-right' /> */}
        <div className='z-10'>
          {isSubmitted ? willAttend? <p>提交成功<br/>謝謝您的報名！</p> :  <p>提交成功<br/>謝謝您的留言！</p> : <p>提交表單中</p>}

        </div>
        <div className='z-10'>
          {isSubmitted && 
            <button 
            className="w-48  m-auto bg-[hsl(12,75%,66%)] hover:bg-[hsl(12,85%,70%)] text-white py-2 rounded-md"
            onClick={()=>setIsDialogShow(false)}
            >關閉</button> 
            
          }
        </div>
      </div> 
    </div>
  )
}