import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-26 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Transform your ideas into stunning visuals in seconds.</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg' alt="" />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to image Generator</h2>
                <p className='text-gray-600 mb-4'>
                    Generate stunning images from text prompts in seconds with our advanced AI technology. Simply describe what you want to see, and our AI will create beautiful, high-quality images tailored to your vision. Perfect for designers, content creators, and anyone looking to bring their imagination to life.
                </p>
                <p className='text-gray-600'>
                    With its user-friendly interface, you can easily refine your prompts to achieve the exact artistic style or theme you desire. Unleash your creativity and watch as your ideas transform into breathtaking visual masterpieces.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Description
