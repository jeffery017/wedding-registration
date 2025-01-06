
export default function Timeline() {
  return (
    <section className="relative min-w-56 overflow-hidden flex flex-col items-center justify-center text-center font-light"> 
          <h1 className='text-2xl text-center tracking-wider'>婚禮時程</h1>
          <p>2025.6.28（六）</p> 
      <div className='m-2 my-48 lg:mx-8 p-16 w-full flex flex-col items-center justify-center gap-6 bg-white/80 rounded-md shadow-lg \'>
        <div className='flex flex-col items-center z-20'>
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