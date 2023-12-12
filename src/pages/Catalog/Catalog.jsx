import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarsByPageThunk } from '../../redux/operations';
import { setFilters } from '../../redux/filterSlice';
import { getFilteredCars } from '../../constants/';
import FilterBar from '../../components/FilterBar';
import CarsList from '../../components/CarsList';
import { selectFilters, selectPage, selectEndOfCollection } from '../../redux/selectors';
import LoadMore from '../../components/LoadMore';
import makes from '../../constants/makes.json'
import { setPage } from '../../redux/pageSlice';
import { clearEndOfCollection } from '../../redux/carsSlice';

const Catalog = () => {

  const dispatch = useDispatch();
  // const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const endOfCollection = useSelector(selectEndOfCollection);
  const page = useSelector(selectPage);
  const [pageInt, setPageInt] = useState(1);
  const [itemInt, setItemInt] = useState(0);
  const [visibleCars, setVisibleCars] = useState([]);
  const perPage = 12;

  useEffect( () => {
    const abortController = new AbortController();

    const handleFetch = async () => {
      const carsNumToAdd = perPage * page - visibleCars.length;

      if (!endOfCollection && carsNumToAdd > 0) {
        const result = await dispatch(
          fetchCarsByPageThunk({ page: pageInt, make: filters.make, signal: abortController.signal })
        );
        const { payload } = result;

        if (payload !== "canceled") {
          const filteredPayload = getFilteredCars(payload, filters);

          const newItemInt = itemInt + carsNumToAdd;
          const carsToAdd = filteredPayload.slice(itemInt, newItemInt) // take carsNumToAdd, skip itemInt

          if (newItemInt >= perPage) {
            setItemInt(0); // use prevState
            setPageInt(pageInt + 1); // use prevState
          } else {
            setItemInt(newItemInt) // use prevState
          }

          setVisibleCars((prevState) => [...prevState, ...carsToAdd]);
        }
      }
    }

    handleFetch()
      .catch(console.error);

    return () => {
      // console.log("aborting...")
      abortController?.abort()
    }
  }, [visibleCars, itemInt, pageInt, filters, page, dispatch]);


  const priceTopLimit = 500;

  const minMileage = 1;
  const maxMileage = 6500;

  return (
    <>
      <FilterBar
        makes={makes}
        priceTopLimit={priceTopLimit}
        minMileage={minMileage}
        maxMileage={maxMileage}
        filters={filters} //???
        onFilterChange={newFilters => {
          dispatch(setFilters(newFilters));
          dispatch(setPage(1));
          setPageInt(1);
          setItemInt(0);
          setVisibleCars([]);
          dispatch(clearEndOfCollection());
        }}
      />

      {<CarsList cars={visibleCars} />}
      {!endOfCollection && (perPage * page - visibleCars.length) <= 0 && <LoadMore />}
    </>
  );
};

export default Catalog;
