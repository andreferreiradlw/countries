import type { CountryPageProps } from '@/pages/country/[countryCode]';
// helpers
import { useRouter } from 'next/router';
// styles
import {
  Content,
  Button,
  CountryContainer,
  FlagContainer,
  RightContainer,
  Name,
  DetailsContainer,
  DetailsList,
  Detail,
  BordersContainer,
} from './Country.styles';
// components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ArrowLeft from '/public/arrow-left.svg';

const CountryPage = ({ country, borders }: CountryPageProps): JSX.Element => {
  const { flag, flags, name, population, region, subregion, capital, tld, currencies, languages } = country;

  const { common: commonName, nativeName } = name;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{commonName}!</title>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${flag}</text></svg>`}
        />
      </Head>
      <Content data-testid="countryPageContainer">
        <Button onClick={() => router.back()} data-testid="countryPageBackBtn">
          <ArrowLeft />
          Go Back
        </Button>
        <CountryContainer>
          <FlagContainer>
            <Image src={flags.svg} layout="responsive" priority width={700} height={475} alt={`${commonName} flag`} />
          </FlagContainer>
          <RightContainer>
            <Name data-testid="countryPageCommonName">{commonName}</Name>
            <DetailsContainer>
              <DetailsList>
                <Detail data-testid="countryPageNativeName">
                  {/** renders the first native name from the object */}
                  <span>Native Name:</span>{' '}
                  {nativeName ? nativeName[Object.keys(nativeName)[0]]?.common : 'No Native Name'}
                </Detail>
                <Detail data-testid="countryPagePopulation">
                  <span>Population:</span> {population.toLocaleString()}
                </Detail>
                <Detail data-testid="countryPageRegion">
                  <span>Region:</span> {region}
                </Detail>
                <Detail data-testid="countryPageSubRegion">
                  <span>Sub Region:</span> {subregion || 'No Sub Region'}
                </Detail>
                <Detail data-testid="countryPageCapital">
                  <span>Capital:</span> {capital?.join(', ') || 'No Capital'}
                </Detail>
              </DetailsList>
              <DetailsList>
                <Detail data-testid="countryPageDomain">
                  <span>Top Level Domain:</span> {tld?.join(', ') || 'No Domain'}
                </Detail>
                <Detail data-testid="countryPageCurrencies">
                  <span>Currencies:</span>{' '}
                  {currencies
                    ? Object.values(currencies)
                        .map(currency => currency.name)
                        .join(', ')
                    : 'No Currencies'}
                </Detail>
                <Detail data-testid="countryPageLanguages">
                  <span>Languages:</span> {languages ? Object.values(languages).join(', ') : 'No Languages'}
                </Detail>
              </DetailsList>
            </DetailsContainer>
            <BordersContainer>
              Border Countries:{' '}
              {borders?.length
                ? borders?.map((border, i) => (
                    <Link href={`/country/${border.cca2.toLowerCase()}`} passHref key={`border-country-${i}`}>
                      <Button as="a" data-testid="countryPageBorder">
                        {border.name.common}
                      </Button>
                    </Link>
                  ))
                : 'No Borders'}
            </BordersContainer>
          </RightContainer>
        </CountryContainer>
      </Content>
    </>
  );
};

export default CountryPage;
