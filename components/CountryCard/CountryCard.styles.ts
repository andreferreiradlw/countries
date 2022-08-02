import styled from 'styled-components';

const Container = styled.a`
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 20em;

  &:hover {
    transform: translateY(-0.2em);
  }
`;

const FlagContainer = styled.div`
  height: 12em;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5em;
  padding: 1em;
`;

const CountryName = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`;

const CountryDetail = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};

  & span {
    font-weight: 600;
  }
`;

export { Container, FlagContainer, Content, CountryName, CountryDetail };
