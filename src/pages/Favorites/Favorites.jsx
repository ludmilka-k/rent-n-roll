import CarsList from '../../components/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { Title, Link, Section } from '../Home/Home.styled';
const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);
  return (
    <>
      {favoriteCars.favorites.length ? (
        <CarsList cars={favoriteCars.favorites}/>
      ) : (
       <Section>
         <Title>Your favorites are currently empty...</Title>
         <Link to="/catalog">Go to Catalog</Link>
       </Section>
      )}
    </>
  );
};

export default Favorites;
