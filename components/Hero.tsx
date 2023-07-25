"use client";

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

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
		<div className="hero__image-container">
			<div className='hero__image'>
				<Image src="/hero.png" alt='hero' fill className='object-contain' />
			</div>
			<div className='hero__image-overlay' />
		</div>
	 </div>
  )
}

export default Hero