import Header from '../Header';
// styles
import { LayoutContainer, MainContainer } from './Layout.styles';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <LayoutContainer>
    <Header />
    <MainContainer>{children}</MainContainer>
  </LayoutContainer>
);

export default Layout;
