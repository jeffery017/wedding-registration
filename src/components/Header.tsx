import mainPicture from '../assets/main-picture.png'
import shiningGIF from '../assets/blink-1.gif'
export default function Header() {
 
  return (
    <div className="relative w-full md:w-1/2 xl:w-1/3 xl:ml-32  h-screen  bg-[hsl(21,63%,69%)] shadow-lg overflow-hidden" >
      <img src={mainPicture} alt="main" className='absolute w-full h-full object-cover'/>
      <img src={shiningGIF} alt="main" className='absolute w-full h-full mix-blend-screen object-cover' />
      {/*  */}
      <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-orange-950 to-orange-950/0 opacity-60'></div>
      <div className="absolute w-full bottom-[15%] flex flex-col items-center justify-center ">
          {/* <h1 className='text-3xl  w-full '>以奇與濟芸的婚禮</h1> */}
          <p className=' text-center text-white font-thin leading-loose'>
            我們要結婚了<br/>
            謝謝你們參與我們人生的不同階段<br/>
            為我們留下許多美好的回憶<br/>
            誠摯的邀請你們<br/>
            參與我們的這一天<br/>
            希望能與你們一起分享我們的喜悅<br/>
            留下珍貴的記憶</p> 
      </div>
    </div>
  )
}