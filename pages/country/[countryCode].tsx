import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { CountryType } from '@/types';
// helpers
import { ParsedUrlQuery } from 'querystring';
import { getCountriesByCode, getAllCountries } from '@/utils';
// components
import CountryPage from '@/components/CountryPage';

interface CountryPageParams extends ParsedUrlQuery {
  countryCode: CountryType['cca2'];
}

export interface CountryPageProps {
  country: CountryType;
  borders?: CountryType[];
}

const Country: NextPage<CountryPageProps> = props => <CountryPage {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await getAllCountries();

  const paths = countries.map(country => ({
    params: { countryCode: country.cca2.toLowerCase() },
  }));

  // fallback: false means pages that don’t have the
  // correct cca2 will 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { countryCode } = params as CountryPageParams;

  const countryData = await getCountriesByCode([countryCode.toString()]);

  return {
    props: {
      country: countryData[0],
      borders: countryData[0]?.borders ? await getCountriesByCode(countryData[0].borders) : null,
    },
  };
};

export default Country;
