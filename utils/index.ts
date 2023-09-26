import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(filters: FilterProps) { 

	const {manufacturer, year, model, limit, fuel} = filters;

	const headers: HeadersInit = {
		'X-RapidAPI-Key': 'eeef30b9e6msh70018fcd711328ap1b4b5bjsnbff95018df67',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
 
	const response = await fetch(
	  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
		 headers: headers,
	  });
 
	const result = await response.json();
 
	return result;
 }

 export const generateCarImageUrl = (car: CarProps, angle? : string) => {
	const url = new URL('https://cdn.imagin.studio/getimage');

	const {make, year, model} = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
 }