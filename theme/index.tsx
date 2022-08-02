import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import theme from './theme';

const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
