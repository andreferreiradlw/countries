import React from 'react';
import { render, screen, fireEvent, within } from '@/utils';
import HomePage from '../index';
import defaultData from './HomePage.data.json';

const renderHomepage = (props?: {}) => {
  // @ts-ignore
  render(<HomePage {...defaultData} {...props} />);

  const Container = screen.queryByTestId('homepageContainer');
  const Input = screen.queryByTestId('homepageInput');
  const Select = screen.queryByTestId('homepageSelect');
  const CardsContainer = screen.queryByTestId('homepageCardsContainer');
  const CountryCards = screen.queryAllByTestId('homepageCountryCard');

  return { screen, Container, Input, Select, CardsContainer, CountryCards };
};

describe('Homepage', () => {
  it('Should display the homepage', () => {
    const { Container } = renderHomepage();

    expect(Container).toBeInTheDocument();
  });

  it('Should update the displayed countries when name input changes', () => {
    const { Input, CardsContainer } = renderHomepage();

    Input && fireEvent.change(Input, { target: { value: 'taiwan' } });

    const Countries = CardsContainer && within(CardsContainer).queryAllByTestId('homepageCountryCard');

    expect(Countries?.length).toBe(1);
  });

  it('Should display the fallback message when no countries match name input search', () => {
    const { Input, CardsContainer } = renderHomepage();

    Input && fireEvent.change(Input, { target: { value: 'france' } });

    const Countries = CardsContainer && within(CardsContainer).queryAllByTestId('homepageCountryCard');

    expect(Countries?.length).toBe(0);
    expect(CardsContainer).toHaveTextContent('No countries match the applied filters.');
  });

  it('Should display the correct number of cards inside the cards container', () => {
    const { CountryCards } = renderHomepage();

    expect(CountryCards?.length).toBe(defaultData.countryList.length);
  });

  it('Should display the fallback message when no countries are provided', () => {
    const { CardsContainer } = renderHomepage({ countryList: [] });

    expect(CardsContainer).toBeInTheDocument();

    expect(CardsContainer).toHaveTextContent('No countries match the applied filters.');
  });
});
