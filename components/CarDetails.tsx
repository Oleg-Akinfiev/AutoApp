"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { CarProps } from '@/types';

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  return (
	 <>
	 	<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={closeModal}>

			</Dialog>
		</Transition>
	 </>
  )
}

export default CarDetails