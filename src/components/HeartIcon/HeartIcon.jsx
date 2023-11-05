import { useDispatch, useSelector } from 'react-redux';
import { BtnHeart, FillHeart, StrokeHeart} from './HeartIcon.styled';
import {selectFavorites} from '../../redux/selectors';
import {addFavorites, removeFavorites} from '../../redux/favoritesSlice';

const HeartIcon = ({car}) => {
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorites);
  const isFavorites = favoriteCars.favorites.some((favorite) => favorite.id === car.id);
  const  toggleFavorites = () => {
    if(isFavorites) {
      dispatch(removeFavorites(car));
    } else {
      dispatch(addFavorites(car));
    }
  };
  return (
    <BtnHeart onClick={toggleFavorites}>
      {isFavorites ? <FillHeart size={18}/> : <StrokeHeart size={20}/>}
    </BtnHeart>
  );
};
export default HeartIcon;
