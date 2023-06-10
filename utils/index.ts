export async function fetchCars() {
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5187185799msh6f638dc0f825f2fp179f51jsn898a24aaf3fe',
		  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  })
  const result = await response.json()
  return result
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}
