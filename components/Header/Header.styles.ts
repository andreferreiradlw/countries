import styled from 'styled-components';

const Container = styled.header`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1.5em 0;
  position: relative;
  width: 100%;
  z-index: 100;
`;

const Content = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.screenSizes.desktop};
  padding: 0 2em;
  width: 100%;
`;

const Title = styled.a`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 2.5em;
  font-weight: 800;
  text-decoration: none;
`;

export { Container, Content, Title };
