import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchCarsThunk} from '../../redux/operations';
import FilterBar from '../../components/FilterBar';
import CarsList from '../../components/CarsList';
import { selectCars } from '../../redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  // const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, []);

  return (
    <>
      <FilterBar/>
      {cars && <CarsList cars={cars} />}
    </>
  );
};

export default Catalog;
