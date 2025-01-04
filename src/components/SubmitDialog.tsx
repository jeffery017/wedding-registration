import backgroundImage from '../assets/flower-background.jpg'

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
    <div className="fixed w-full h-lvh bg-neutral-900 bg-opacity-60 top-0 flex items-center justify-center "> 
      <div className="relative w-full max-w-[350px] m-2 aspect-square bg-white border-2 shadow-md rounded-full flex flex-col items-center justify-center gap-4 overflow-hidden font-light text-xl">
        <img src={backgroundImage} alt="" className='absolute bottom-0 h-[200%] object-cover opacity-35 object-right' />
        <div className="z-10">
          {isSubmitted ? willAttend? <p>提交成功，謝謝您的報名！</p> :  <p>提交成功，謝謝您的留言！</p> : <p>提交表單中</p>}

        </div>
        <div className='z-10 text-xl '>
          {isSubmitted && 
            <button 
            className="w-64 m-auto bg-[hsl(12,75%,66%)] hover:bg-[hsl(12,85%,70%)] text-white py-2 rounded-md"
            onClick={()=>setIsDialogShow(false)}
            >關閉</button> 
            
            }
        </div>
      </div>
    </div>
  )
}