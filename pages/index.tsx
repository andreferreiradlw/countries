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
  try {
    // fetch all countries
    const countryList = await getAllCountries();

    if (!countryList) {
      return { notFound: true };
    }

    return { props: { countryList } };
  } catch (e) {
    return { notFound: true };
  }
};

export default Home;
