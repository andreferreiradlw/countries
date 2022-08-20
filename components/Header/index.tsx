// styles
import { Container, Content, Title } from './Header.styles';
// components
import Link from 'next/link';

const Header = (): JSX.Element => (
  <Container data-testid="headerContainer">
    <Content>
      <Link href="/" passHref>
        <Title data-testid="headerTitle">Where in the world?</Title>
      </Link>
    </Content>
  </Container>
);

export default Header;
