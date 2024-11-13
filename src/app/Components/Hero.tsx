import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='flex justify-right pl-20 font-bold font-serif text-4xl'>
      <h1>
      IMPECCABLE<br></br>
       CRAFTSMANSHIP<br></br>
       AND<br></br>
       FINESSE
       </h1>

      </div>
     <br></br>

     <div className='flex justify-right pl-20 w-1/2'>
      <p className='text-2xl text-[#787054] font-serif'>
      An example of intricate workmanship and detail, elegant 
       necklaces and long and short chains form a part of our
       desirable collection.
      </p>
      </div>
      <br></br>
      <br></br>
      
      <div className='flex justify-right pl-20 p-15 mr-15'>
      <button className='font-serif text-white bg-[#A29875] p-2 font-bold  text-1xl mr-15 p-15'>
        Explore Now
      </button>
     </div>

     <div className='flex justify-end p-5 '>
      <img src={"/images/image.png"} alt="images" width={"400px"}
    height={"400px"} className='  absolute top-10 right-0 mt-16 mr-5'></img>
      </div>
     </div>
     )
}

export default Hero
