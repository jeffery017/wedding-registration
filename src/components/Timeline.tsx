import paperTexture from '../assets/paper-texture.jpg';
export default function Timeline() {
  return (
    <div 
    style={{backgroundImage: `url(${paperTexture})`}}
    className='relative py-16 sm:py-32 gap-6 sm:gap-12 w-full min-h-[60vh] flex flex-col items-center justify-center  bg-cover  border-[1.5px] border-neutral-100 rounded-lg shadow-lg '>
      <div> 
          <h1 className='text-2xl text-center tracking-wider pb-2'>婚禮時程</h1>
          <p className='text-center'>2025.6.28 (六)</p> 
      </div> 
      <hr className='border-neutral-300 w-2/3 my-2'/>
      <div>
        <h2 className='text-xl  pb-2'>結婚典禮</h2>
        <p className="pb-2">9:30~11:00</p>
        <p>大安教會禮拜堂<br/>台北市和平東路3段1巷51號</p>
        <a 
          className='underline'
          href="https://maps.app.goo.gl/4tYBiYdGP9t7ziA87" 
          target='blank'>查看 Google Map</a>
      </div>
      <div className='text-2xl'>・</div>
      <div>
        <h2 className='text-xl  pb-2'>婚宴</h2> 
        <p>11:45 入席</p> 
        <p className="pb-2">12:30 開席</p>
 
        <p>彭園壹品宴<br/>台北市南京東路二段63號2樓</p>
        <a 
          className='underline'
          href="https://maps.app.goo.gl/VS8uK1gWWFZMAP5E7" 
          target='blank' >查看 Google Map</a> 
      </div>
  </div>
  )
}