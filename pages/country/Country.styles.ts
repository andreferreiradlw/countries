import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  margin: 4em auto;
  max-width: ${({ theme }) => theme.screenSizes.desktop};
  padding: 0 2em;
  width: 100%;
`;

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrey};
  border: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  font-weight: 600;
  gap: 0.5em;
  justify-content: center;
  outline: 0;
  padding: 0.5em 1.5em;
  text-decoration: none;
  transition: all 0.2s ease;
  width: fit-content;

  & svg {
    fill: ${({ theme }) => theme.colors.darkBlue};
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
    cursor: pointer;

    & svg {
      fill: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

const FlagContainer = styled.div`
  position: relative;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
`;

const CountryContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5em;

  & > ${FlagContainer}, & > ${RightContainer} {
    flex-basis: 100%;
    width: 100%;
  }

  @media only screen and (min-width: 40em) {
    flex-direction: row;
    align-items: stretch;

    & > ${FlagContainer}, & > ${RightContainer} {
      flex-basis: 50%;
    }
  }
`;

const Name = styled.h1`
  font-size: 3em;
  font-weight: 800;
`;

const DetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

const DetailsList = styled(RightContainer)`
  flex-grow: 1;
  gap: 1em;
`;

const Detail = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};

  & span {
    font-weight: 600;
  }
`;

const BordersContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  gap: 1em;
`;

export {
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
};
