import { CarProps, FilterProps } from "@types";

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

export const updateSearchParams = (type: string, value: string) => {
  // Получите текущие параметры поиска по URL-адресу
  const searchParams = new URLSearchParams(window.location.search);

  // Установите для указанного параметра поиска заданное значение
  searchParams.set(type, value);

  // Установите для указанного параметра поиска заданное значение
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Установите для указанного параметра поиска заданное значение
  const newSearchParams = new URLSearchParams(window.location.search);

  // Удалите указанный параметр поиска
  newSearchParams.delete(type.toLocaleLowerCase());

  // Создайте обновленный URL-путь с удаленным параметром поиска
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Установите необходимые заголовки для запроса API
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Установите необходимые заголовки для запроса API
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // PПроанализируйте ответ в формате JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 