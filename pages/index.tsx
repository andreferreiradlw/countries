import type { NextPage, GetStaticProps } from 'next';
import type { CountryType } from '@/types';
// helpers
import { getAllCountries } from '@/utils';
// components
import HomePage from '@/components/Homepage';

export interface HomepageProps {
  countryList: CountryType[];
}

const Home: NextPage<HomepageProps> = props => <HomePage {...props} />;

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
