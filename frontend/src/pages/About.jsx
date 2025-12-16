import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

export default function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img  className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid a eum ipsam magni perferendis dolorem, hic fuga quam itaque voluptatem accusantium. Dolor vero vel tempore atque earum pariatur sequi?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quibusdam voluptatum, assumenda vitae sint error veniam distinctio autem quas magni dolores eaque non delectus nisi quidem tenetur, aliquid beatae eos.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia odit corrupti, ab beatae laborum sint excepturi ipsa perspiciatis debitis fugit magnam quas error illum id nostrum ex autem omnis!</p>
          </div>
        </div>
        <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>With our user-friendly interface and hasle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority</p>
          </div>
        </div>

        <NewsLetterBox/>

    </div>
  )
}
