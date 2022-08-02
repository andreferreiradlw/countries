import type { CountryType } from '@/types';

const endpoint = 'https://restcountries.com/v3.1';

const getAllCountries = async (): Promise<CountryType[]> =>
  await fetch(`${endpoint}/all`)
    .then(data => data.json())
    .catch(console.error);

const getCountriesByCode = async (codes: string[]): Promise<CountryType[]> =>
  await fetch(`${endpoint}/alpha?codes=${codes.join(',')}`)
    .then(data => data.json())
    .catch(console.error);

export { getAllCountries, getCountriesByCode };
