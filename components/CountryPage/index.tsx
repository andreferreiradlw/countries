import type { NextPage } from 'next';
import type {CountryPageProps} from "@/pages/country/[countrycode].tsx"
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

const CountryPage: NextPage<CountryPageProps> = ({ country, borders }) => {
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
      <Content>
        <Button onClick={() => router.back()}>
          <ArrowLeft />
          Go Back
        </Button>
        <CountryContainer>
          <FlagContainer>
            <Image src={flags.svg} layout="responsive" priority width={700} height={475} alt={`${commonName} flag`} />
          </FlagContainer>
          <RightContainer>
            <Name>{commonName}</Name>
            <DetailsContainer>
              <DetailsList>
                <Detail>
                  {/** renders the first native name from the object */}
                  <span>Native Name:</span> {nativeName[Object.keys(nativeName)[0]]?.common}
                </Detail>
                <Detail>
                  <span>Population:</span> {population.toLocaleString()}
                </Detail>
                <Detail>
                  <span>Region:</span> {region}
                </Detail>
                <Detail>
                  <span>Sub Region:</span> {subregion}
                </Detail>
                <Detail>
                  <span>Capital:</span> {capital?.join(', ') || 'None'}
                </Detail>
              </DetailsList>
              <DetailsList>
                <Detail>
                  <span>Top Level Domain:</span> {tld?.join(', ') || 'None'}
                </Detail>
                <Detail>
                  <span>Currencies:</span>{' '}
                  {Object.values(currencies)
                    .map(currency => currency.name)
                    .join(', ')}
                </Detail>
                <Detail>
                  <span>Languages:</span> {Object.values(languages).join(', ')}
                </Detail>
              </DetailsList>
            </DetailsContainer>
            <BordersContainer>
              Border Countries:{' '}
              {borders?.length
                ? borders?.map((border, i) => (
                    <Link href={`/country/${border.cca2.toLowerCase()}`} passHref key={`border-country-${i}`}>
                      <Button as="a">{border.name.common}</Button>
                    </Link>
                  ))
                : 'None'}
            </BordersContainer>
          </RightContainer>
        </CountryContainer>
      </Content>
    </>
  );
};

export default CountryPage
