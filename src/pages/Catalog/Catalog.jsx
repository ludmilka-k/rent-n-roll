import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchCarsThunk} from '../../redux/operations';
import FilterBar from '../../components/FilterBar';
import CarsList from '../../components/CarsList';
import { selectCars } from '../../redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <>
      <FilterBar/>
      {cars && <CarsList cars={cars} />}
    </>
  );
};

export default Catalog;
