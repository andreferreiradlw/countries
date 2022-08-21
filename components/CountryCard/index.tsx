import type { CountryType } from '@/types';
// styles
import { Container, FlagContainer, Content, CountryName, CountryDetail } from './CountryCard.styles';
// components
import Link from 'next/link';
import Image from 'next/image';

const CountryCard = ({ name, cca2, flags, population, region, capital, ...rest }: CountryType): JSX.Element => (
  <Link href={`/country/${cca2.toLowerCase()}`} passHref>
    <Container data-testid="countryCardContainer" {...rest}>
      <FlagContainer>
        <Image
          src={flags.svg}
          layout="fill"
          objectFit="cover"
          alt={`${name.common} flag`}
          data-testid="countryCardFlag"
        />
      </FlagContainer>
      <Content>
        <CountryName data-testid="countryCardName">{name.common}</CountryName>
        <CountryDetail data-testid="countryCardPopulation">
          <span>Population:</span> {population.toLocaleString()}
        </CountryDetail>
        <CountryDetail data-testid="countryCardRegion">
          <span>Region:</span> {region}
        </CountryDetail>
        <CountryDetail data-testid="countryCardCapital">
          <span>Capital:</span> {capital?.join(', ') || 'None'}
        </CountryDetail>
      </Content>
    </Container>
  </Link>
);

export default CountryCard;
