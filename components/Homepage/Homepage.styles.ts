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

const FiltersContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 40em) {
    flex-direction: row;
  }
`;

const InputContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  gap: 1.5em;
  height: 3.5em;
  min-width: 22em;
  padding: 1em 1.5em;

  & svg {
    fill: ${({ theme }) => theme.colors.darkBlue};
    height: 20px;
    width: 20px;
  }
`;

const Input = styled.input`
  background: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  flex-grow: 1;
  outline: 0;
`;

const CardsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  width: 100%;
`;

export { Content, FiltersContainer, InputContainer, Input, CardsContainer };
