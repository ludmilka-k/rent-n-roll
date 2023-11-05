import CarsList from '../../components/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);
  return (
    <>
      {favoriteCars.favorites && <CarsList cars={favoriteCars.favorites}/>}
    </>
  );
};

export default Favorites;
