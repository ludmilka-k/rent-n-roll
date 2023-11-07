import { useEffect, useState } from 'react';
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

  var currentPage = 0;

  useEffect(() => {
    console.log("(fetchCarsThunk: " + page);
    if (page > currentPage) {
       dispatch(fetchCarsThunk(page));
       currentPage = page;
    }
  }, [page]);

  return (
    <>
      <FilterBar/>
      {cars && <CarsList cars={cars} />}
      {showLoadMore && <LoadMore />}
    </>
  );
};

export default Catalog;
