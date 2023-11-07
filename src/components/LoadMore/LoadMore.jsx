import { useDispatch, useSelector } from 'react-redux';
import {selectPage} from '../../redux/selectors';
import {setPage} from '../../redux/pageSlice';
import {LoadMoreBox, LoadMoreBtn } from './LoadMore.styled';
const LoadMore = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const handleClick = () => {
    const newPage = page + 1;
    dispatch(setPage(newPage));
  };

  return (
    <LoadMoreBox>
      <LoadMoreBtn onClick={handleClick}>LoadMore</LoadMoreBtn>
    </LoadMoreBox>
  );
};

export default LoadMore;
