import {Header, Logo, Navigation, Link} from './NavBar.styled'
const NavBar = () => {
  return (
    <Header>
      <Logo to="/">Rent'n'Roll</Logo>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navigation>
    </Header>
  );
};

export default NavBar;
