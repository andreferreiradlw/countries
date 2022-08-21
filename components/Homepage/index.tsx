import { useEffect, useState } from 'react';
// types
import type { CountryType } from '@/types';
import type { HomepageProps } from '@/pages/index';
// styles
import { Content, FiltersContainer, InputContainer, Input, CardsContainer } from './Homepage.styles';
// components
import Head from 'next/head';
import CountryCard from '@/components/CountryCard';
import SearchIcon from '/public/search.svg';
import Select from '@/components/Select';

const HomePage = ({ countryList, ...rest }: HomepageProps): JSX.Element => {
  // states
  const [displayCountries, setDisplayCountries] = useState<CountryType[] | []>(countryList);
  const [search, setSearch] = useState<string | null>();
  const [selectedRegion, setSelectedRegion] = useState('');

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    const filteredCountries = countryList?.filter(
      ({ name, region }) =>
        (search ? name.common.toLowerCase().includes(search.toLowerCase()) : true) &&
        (selectedRegion !== '' ? region === selectedRegion : true),
    );
    // update state
    setDisplayCountries(filteredCountries);
  }, [search, selectedRegion, countryList]);

  return (
    <>
      <Head>
        <title>Pick a Country!</title>
        <meta name="description" content="Created by Andre Ferreira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content data-testid="homepageContainer" {...rest}>
        <FiltersContainer>
          <InputContainer>
            <SearchIcon />
            <Input
              onChange={e => setSearch(e.target.value)}
              placeholder="Search for a country..."
              data-testid="homepageInput"
            />
          </InputContainer>
          <Select
            options={regions}
            placeholder="Filter by Region"
            onChange={value => setSelectedRegion(value)}
            data-testid="homepageSelect"
          />
        </FiltersContainer>
        <CardsContainer data-testid="homepageCardsContainer">
          {displayCountries?.length
            ? displayCountries.map((country, i) => (
                <CountryCard
                  key={`CountryCard-${i}-${country.name.common}`}
                  {...country}
                  data-testid="homepageCountryCard"
                />
              ))
            : 'No countries match the applied filters.'}
        </CardsContainer>
      </Content>
    </>
  );
};

export default HomePage;
