import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='esasMain'>
      <div className='div1 flex items-center justify-around '>
        <div>
          <h1 className='font-bold ml-96'>9:41</h1>
        </div>
        <div className='flex mr-96'>

          <Image
            src="./div1/seticon.svg"
            width={150}
            height={150}
            alt='Photo'
            className='bg-cover w-4 h-4'
          />
          <Image
            src="./div1/Wifi.svg"
            width={150}
            height={150}
            alt='Photo'
            className='bg-cover w-4 h-4'
          />
          <Image
            src="./div1/Battery.svg"
            width={150}
            height={150}
            alt='Photo'
            className='bg-cover w-4 h-4'
          />
        </div>
      </div>
      <div className='div2 flex ml-'>
        <div className='flex justify-around mr-20'>
          <Image
            src="./div2/camera.svg"
            width={100}
            height={100}
            className='bg-cover w-10 h-10'
            alt='Photo' />
          <Image
            src="./div2/instalogo.svg"
            width={100}
            height={100}
            className='bg-cover w-40 h-10'
            alt='Photo' />
        </div>
        <div className='flex justify-between'>
          <Image
            src="./div2/IGTV.svg"
            width={100}
            height={100}
            className='bg-cover w-10 h-10'
            alt='Photo' />
          <Image
            src="./div2/messenger.svg"
            width={100}
            height={100}
            className='bg-cover w-10 h-10'
            alt='Photo' />
        </div>

      </div>
    </div>

  )
}

export default Home