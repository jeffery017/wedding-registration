// import backgroundImage from '../assets/leaves-7910755_1280.png'
import flower1 from '../assets/watercolor-5729102_1280.png'
// import yellowFlower from '../assets/yellow-flowers-7746722_1280.png'
export default function Timeline() {
  return (
    <section className="grow relative min-w-56 shrink-0 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* <div className="absolute top-0 bg w-full h-full bg-neutral-900"></div> */}
      {/* <img src={backgroundImage} alt="" className='absolute w-full h-full object-cover opacity-20' /> */}
      <div className='absolute float w-full h-full'>
        <img src={flower1} alt="" className='absolute -bottom-9 left-1 w-28 md:w-36 object-cover z-10 imageShadow ' />
        <img src={flower1} alt="" className='absolute -top-4 right-2 w-28 md:w-36 object-cover z-10 imageShadow rotate-180' />
      </div> 
      {/* card */}
      <div className='m-2 p-16 flex flex-col items-center justify-center gap-6 bg-white/60 rounded-md shadow-lg text-center font-light'>
        <div className='flex flex-col items-center z-20'>
          <h1 className='text-2xl text-center tracking-wider'>婚禮時程</h1>
          <p>2025.6.28（六）</p>
        </div>
        <div className='text-2xl'>・</div>
        <div className='flex flex-col items-center z-20'>
          <h2 className='text-2xl'>證婚</h2>
          <p>10:00~11:30</p>
          <p>大安教會禮拜堂<br/>台北市和平東路3段1巷51號</p>
          <a 
            className='underline'
            href="https://maps.app.goo.gl/4tYBiYdGP9t7ziA87" 
            target='blank'>查看 Google Map</a>

        </div>

        <div className='text-2xl'>・</div>

        <div className='flex flex-col items-center z-20'>
          <h2 className='text-2xl'>婚宴</h2>
          <p>12:30~15:00</p>
          <p>彭園壹品宴<br/>台北市南京東路二段63號2樓</p>
          <a 
            className='underline'
            href="https://maps.app.goo.gl/VS8uK1gWWFZMAP5E7" 
            target='blank' >查看 Google Map</a>
          {/* <p></p> */}
        </div>
      </div> 
      
    </section>
  )
}