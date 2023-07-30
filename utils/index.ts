export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Базовая стоимость аренды в сутки в долларах
  const mileageFactor = 0.1; // Дополнительная плата за пройденную милю
  const ageFactor = 0.05; // Дополнительная ставка за год в зависимости от возраста транспортного средства

  // Рассчитайте дополнительный тариф на основе пробега и возраста
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Рассчитайте общую арендную ставку за сутки
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() { 
	// Установите необходимые заголовки для запроса API
	const headers: HeadersInit = {
		'X-RapidAPI-Key': 'eeef30b9e6msh70018fcd711328ap1b4b5bjsnbff95018df67',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
 
	// Установите необходимые заголовки для запроса API
	const response = await fetch(
	  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {
		 headers: headers,
	  });
 
	// Проанализируйте ответ в формате JSON
	const result = await response.json();
 
	return result;
 }