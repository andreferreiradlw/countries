import type { RegionsType } from './regions';

interface CountryType {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string; official: string } };
  };
  cca2: string;
  tld?: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  population: number;
  capital?: string[];
  region: RegionsType;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  flags: {
    png: string;
    svg: string;
  };
  flag: string;
}

export type { CountryType };
