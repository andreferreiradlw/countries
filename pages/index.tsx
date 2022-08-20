import { useEffect, useState } from 'react';
// types
import type { NextPage, GetStaticProps } from 'next';
import type { CountryType } from '@/types';
// helpers
import { getAllCountries } from '@/utils';
import Head from 'next/head';
// styles
import { Content, FiltersContainer, InputContainer, Input, CardsContainer } from './Homepage.styles';
// components
import CountryCard from '@/components/CountryCard';
import SearchIcon from '/public/search.svg';
import Select from '@/components/Select';

interface HomepageProps {
  countryList: CountryType[];
}

const Home: NextPage<HomepageProps> = ({ countryList }) => {
  const [displayCountries, setDisplayCountries] = useState<CountryType[] | []>(countryList);
  const [search, setSearch] = useState<string | null>();
  const [selectedRegion, setSelectedRegion] = useState('');

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    const filteredCountries = countryList.filter(
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
      <Content>
        <FiltersContainer>
          <InputContainer>
            <SearchIcon />
            <Input onChange={e => setSearch(e.target.value)} placeholder="Search for a country..." />
          </InputContainer>
          <Select options={regions} placeholder="Filter by Region" onChange={value => setSelectedRegion(value)} />
        </FiltersContainer>
        <CardsContainer>
          {displayCountries?.length
            ? displayCountries.map((country, i) => (
                <CountryCard key={`CountryCard-${i}-${country.name.common}`} {...country} />
              ))
            : 'No countries match the applied filters.'}
        </CardsContainer>
      </Content>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // fetch all countries
  const countryList = await getAllCountries();

  return {
    props: {
      countryList: countryList,
    },
  };
};

export default Home;
