import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  flex-grow: 1;
  width: 100%;
`;

export { LayoutContainer, MainContainer };
