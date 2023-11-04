import React from 'react';
import { useSelector } from 'react-redux';
import {selectCars} from '../../redux/selectors';
import CarCard from '../CarCard';
import { List } from './CarsList.styled';

const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <List>
      {cars.map((car) => (
        <CarCard key={car.id} car={car}/>
      ))}
    </List>
  );
};

export default CarsList;
