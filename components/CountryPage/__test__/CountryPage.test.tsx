import React from 'react';
import { render, screen, fireEvent, within } from '@/utils';
import CountryPage from '../index';
import defaultData from './CountryPage.data.json';

const renderCountry = (props?: {}) => {
  // @ts-ignore
  render(<CountryPage {...defaultData} {...props} />);

  const Container = screen.queryByTestId('countryPageContainer');
  const BackBtn = screen.queryByTestId('countryPageBackBtn');
  const CommonName = screen.queryByTestId('countryPageCommonName');
  const NativeName = screen.queryByTestId('countryPageNativeName');
  const Population = screen.queryByTestId('countryPagePopulation');
  const Region = screen.queryByTestId('countryPageRegion');
  const SubRegion = screen.queryByTestId('countryPageSubRegion');
  const Capital = screen.queryByTestId('countryPageCapital');
  const Domain = screen.queryByTestId('countryPageDomain');
  const Currencies = screen.queryByTestId('countryPageCurrencies');
  const Languages = screen.queryByTestId('countryPageLanguages');
  const Borders = screen.queryAllByTestId('countryPageBorder');

  return {
    screen,
    Container,
    BackBtn,
    CommonName,
    NativeName,
    Population,
    Region,
    SubRegion,
    Capital,
    Domain,
    Currencies,
    Languages,
    Borders,
  };
};

const mockCountry = {
  country: {
    name: { common: 'CountryNameCommon' },
    flags: { svg: '/CountrySvgFlagUrl' },
    population: 1,
    region: 'Americas',
  },
  borders: null,
};

describe('CountryPage', () => {
  it('Should display the country page container', () => {
    const { Container } = renderCountry();

    expect(Container).toBeInTheDocument();
  });

  it('Should display the back button with the correct text', () => {
    const { BackBtn } = renderCountry();

    expect(BackBtn).toHaveTextContent('Go Back');
  });

  it('Should trigger the next router correctly when back button is clicked', () => {
    const mockBackClick = jest.fn(() => null);

    const useRouter = jest.spyOn(require('next/router'), 'useRouter');

    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      back: mockBackClick,
    }));

    const { BackBtn } = renderCountry();

    expect(BackBtn).toBeInTheDocument();

    BackBtn && fireEvent.click(BackBtn);

    expect(useRouter).toHaveBeenCalledTimes(1);
    expect(mockBackClick).toHaveBeenCalledTimes(1);
  });

  it('Should display the correct common name', () => {
    const { CommonName } = renderCountry();

    expect(CommonName).toHaveTextContent(defaultData.country.name.common);
  });

  it('Should display the correct native name when provided', () => {
    const { NativeName } = renderCountry();

    expect(NativeName).toHaveTextContent(`Native Name: ${defaultData.country.name.nativeName.eng.common}`);
  });

  it('Should display the correct fallback text when native name is not provided', () => {
    const { NativeName } = renderCountry({ ...mockCountry });

    expect(NativeName).toHaveTextContent(`Native Name: No Native Name`);
  });

  it('Should display the correct population number', () => {
    const { Population } = renderCountry();

    expect(Population).toHaveTextContent(`Population: ${defaultData.country.population.toLocaleString()}`);
  });

  it('Should display the correct region name', () => {
    const { Region } = renderCountry();

    expect(Region).toHaveTextContent(`Region: ${defaultData.country.region}`);
  });

  it('Should display the correct SubRegion when provided', () => {
    const { SubRegion } = renderCountry();

    expect(SubRegion).toHaveTextContent(`Sub Region: ${defaultData.country.subregion}`);
  });

  it('Should display the correct fallback text when SubRegion is not provided', () => {
    const { SubRegion } = renderCountry({ ...mockCountry });

    expect(SubRegion).toHaveTextContent(`Sub Region: No Sub Region`);
  });

  it('Should display the correct Capital when provided', () => {
    const { Capital } = renderCountry();

    expect(Capital).toHaveTextContent(`Capital: ${defaultData.country.capital[0]}`);
  });

  it('Should display the correct fallback text when Capital is not provided', () => {
    const { Capital } = renderCountry({ ...mockCountry });

    expect(Capital).toHaveTextContent(`Capital: No Capital`);
  });

  it('Should display the correct Domains are provided', () => {
    const { Domain } = renderCountry();

    expect(Domain).toHaveTextContent(`Top Level Domain: ${defaultData.country.tld.join(', ')}`);
  });

  it('Should display the correct fallback text when Domains are not provided', () => {
    const { Domain } = renderCountry({ ...mockCountry });

    expect(Domain).toHaveTextContent(`Top Level Domain: No Domain`);
  });

  it('Should display the correct Currencies are provided', () => {
    const { Currencies } = renderCountry();

    expect(Currencies).toHaveTextContent(`Currencies: ${defaultData.country.currencies.eur.name}`);
  });

  it('Should display the correct fallback text when Currencies are not provided', () => {
    const { Currencies } = renderCountry({ ...mockCountry });

    expect(Currencies).toHaveTextContent(`Currencies: No Currencies`);
  });

  it('Should display the correct Languages are provided', () => {
    const { Languages } = renderCountry();

    expect(Languages).toHaveTextContent(`Languages: ${defaultData.country.languages.eng}`);
  });

  it('Should display the correct fallback text when Languages are not provided', () => {
    const { Languages } = renderCountry({ ...mockCountry });

    expect(Languages).toHaveTextContent(`Languages: No Languages`);
  });

  it('Should display the correct number of borders', () => {
    const { Borders } = renderCountry();

    expect(Borders.length).toBe(defaultData.borders.length);
  });

  it('Should display the borders with the correct url and text', () => {
    const { Borders } = renderCountry();

    Borders.forEach((Border, i) => {
      expect(Border).toHaveTextContent(defaultData.borders[i].name.common);
      expect(Border).toHaveAttribute('href', `/country/${defaultData.borders[i].cca2.toLowerCase()}`);
    });
  });

  it('Should not display any borders if not provided', () => {
    const { Borders } = renderCountry({ ...mockCountry });

    expect(Borders.length).toBe(0);
  });
});
