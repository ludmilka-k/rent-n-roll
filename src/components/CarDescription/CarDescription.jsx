
import { DescriptionBox, Image, ImageBox, Title, Item, Model, Description, Heading, List, ConditionBox, ConditionItem , Span} from './CarDescription.styled';
import testImg from '../../images/mitsubishi.webp'; // {car.img}
import Button from '../Button';

const CarDescription = ({car}) => {
  const firstCondition = new Date().getFullYear() - car.year;
  const formattedMileage = car.mileage.toLocaleString("en-EN");
  return (
    <>
      <ImageBox>
        <Image src={testImg} alt={car.model} width="460" height="248" loading="lazy" />
      </ImageBox>
      <Title>{car.make} <Model>{car.model}</Model>, {car.year}</Title>
      <DescriptionBox>
        <Item>{car.address.split(',')[1]}</Item>
        <Item>{car.address.split(',')[2]}</Item>
        <Item>Id: {car.id}</Item>
        <Item>Year: {car.year}</Item>
        <Item>Type: {car.type}</Item>
        <Item>Fuel Consumption: {car.fuelConsumption}</Item>
        <Item>Engine Size: {car.engineSize}</Item>
      </DescriptionBox>
      <Description>{car.description}</Description>
      <Heading>Accessories and functionalities:</Heading>
      <List>
        {car.accessories.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </List>
      <List>
        {car.functionalities.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </List>
      <Heading>Rental Conditions:</Heading>
      <ConditionBox>
        <ConditionItem>
          Minimum age: <Span>{firstCondition}</Span>
        </ConditionItem>
        <ConditionItem>
          {car.rentalConditions.split('\n')[1]}
        </ConditionItem>
        <ConditionItem>
          {car.rentalConditions.split('\n')[2]}
        </ConditionItem>
        <ConditionItem>
          Mileage: <Span>{formattedMileage}</Span>
        </ConditionItem>
        <ConditionItem>
          Price: <Span>{car.rentalPrice}</Span>
        </ConditionItem>
      </ConditionBox>
      <Button
        text="Rental car"
        width="168px"
        onClick={() => {window.location.href = 'tel:+380730000000'}}
      />
    </>
  );
};

export default CarDescription;
