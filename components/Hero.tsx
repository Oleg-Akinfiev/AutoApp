"use client";

import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
	const handleScroll = () => {

	}

  return (
	 <div className='hero'>
		<div className='flex-1 pt-36 padding-x'>
			<h1 className="hero__title">
				Найдите, забронируйте или арендуйте автомобиль - быстро и легко!
			</h1>
			<p className='hero__subtitle'>
				Упростите свой процесс аренды автомобиля с помощью нашего простого бронирования процесс.
			</p>

			<CustomButton title="Смотреть авто" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}/>
		</div>
	 </div>
  )
}

export default Hero