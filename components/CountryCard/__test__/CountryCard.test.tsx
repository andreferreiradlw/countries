import { render, screen } from '@/utils';
import React from 'react';
import CountryCard from '../index';
import defaultData from './CountryCard.data.json';

const renderCard = (props?: {}) => {
  // @ts-ignore
  render(<CountryCard {...defaultData} {...props} />);

  const Container = screen.queryByTestId('countryCardContainer');
  const Name = screen.queryByTestId('countryCardName');
  const Flag = screen.queryByTestId('countryCardFlag');
  const Population = screen.queryByTestId('countryCardPopulation');
  const Region = screen.queryByTestId('countryCardRegion');
  const Capital = screen.queryByTestId('countryCardCapital');

  return { ...screen, Container, Name, Flag, Population, Region, Capital };
};

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img alt="mockImage" {...props} />, // eslint-disable-line
}));

describe('CountryCard', () => {
  it('Should display the container as an anchor with the correct url', () => {
    const { Container } = renderCard();

    expect(Container?.tagName).toBe('A');
    expect(Container).toHaveAttribute('href', `/country/${defaultData.cca2.toLowerCase()}`);
  });

  it('Should render the correct country name', () => {
    const { Name } = renderCard();

    expect(Name).toHaveTextContent(defaultData.name.common);
  });

  it('Should render the country flag with the correct url', () => {
    const { Flag } = renderCard();

    expect(Flag).toBeInTheDocument();
    expect(Flag).toHaveAttribute('src', defaultData.flags.svg);
  });

  it('Should render the correct population', () => {
    const { Population } = renderCard();

    expect(Population).toHaveTextContent(`Population: ${defaultData.population.toLocaleString()}`);
  });

  it('Should render the region', () => {
    const { Region } = renderCard();

    expect(Region).toHaveTextContent(`Region: ${defaultData.region}`);
  });

  it('Should render the correct capital when provided', () => {
    const { Capital } = renderCard();

    expect(Capital).toHaveTextContent(`Capital: ${defaultData.capital?.join(', ')}`);
  });

  it('Should render the placeholder text when capital is not provided', () => {
    const { Capital } = renderCard({ capital: null });

    expect(Capital).toHaveTextContent(`Capital: None`);
  });
});
