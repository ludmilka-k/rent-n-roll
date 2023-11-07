import { useState } from 'react';
import {Card, ImageBox, Image, TitleBox, Title, Model, Price, DescriptionBox, Item} from './CarCard.styled';
import HeartIcon from '../HeartIcon';
import Button from '../Button';
import Modal from'../Modal';
import CarDescription from '../CarDescription';


const CarCard = ({car}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)


  const handleOpen = () => {
    setIsOpenModal(true);
  };
  const handleClose = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <Card>
        <ImageBox>
          <HeartIcon car={car}/>
          <Image src={car.img} alt={car.model} loading="lazy" />
        </ImageBox>
        <TitleBox>
          <Title>{car.make} <Model>{car.model}</Model>, {car.year}</Title>
          <Price>{car.rentalPrice}</Price>
        </TitleBox>
        <DescriptionBox>
          <Item>{car.address.split(',')[1]}</Item>
          <Item>{car.address.split(',')[2]}</Item>
          <Item>{car.rentalCompany}</Item>
          <Item>{car.type}</Item>
          <Item>{car.model}</Item>
          <Item>{car.mileage}</Item>
          <Item>{car.accessories[0]}</Item>
        </DescriptionBox>
        <Button onClick={handleOpen} text="Learn more" width="274px"/>
      </Card>
      {isOpenModal && (<Modal isOpen={isOpenModal} onClose={handleClose}>
        <CarDescription car={car} />
      </Modal>)}
    </>
  );
};

export default CarCard;
