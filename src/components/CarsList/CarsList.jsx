import React from 'react';
import CarCard from '../CarCard';
import { List } from './CarsList.styled';


const CarsList = ({cars}) => {
  return (
    <List>
      {cars.map((car) => (
        <CarCard key={car.id} car={car}/>
      ))}
    </List>
  );
};

export default CarsList;
