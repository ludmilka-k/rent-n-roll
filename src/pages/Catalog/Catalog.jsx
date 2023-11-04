import { useEffect } from "react"
import { useDispatch } from "react-redux";
import {fetchCarsThunk} from '../../redux/operations';
import CarsList from '../../components/CarsList';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, []);

  return (
    <>
      <CarsList />
    </>
  );
};

export default Catalog;
