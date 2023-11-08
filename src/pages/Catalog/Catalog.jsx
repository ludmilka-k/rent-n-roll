import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCarsThunk} from '../../redux/operations';
import FilterBar from '../../components/FilterBar';
import CarsList from '../../components/CarsList';
import { selectCars, selectPage, selectShowLoadMore } from '../../redux/selectors';
import LoadMore from '../../components/LoadMore';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const showLoadMore = useSelector(selectShowLoadMore);
  const page = useSelector(selectPage);

  let currentPage = { page: 0 };

  useEffect(() => {
    console.log("(fetchCarsThunk: " + page);
    if (page > currentPage.page) {
       dispatch(fetchCarsThunk(page));
       currentPage.page = page;
    }
  }, [page, dispatch]);

  return (
    <>
      <FilterBar/>
      {cars && <CarsList cars={cars} />}
      {showLoadMore && <LoadMore />}
    </>
  );
};

export default Catalog;
