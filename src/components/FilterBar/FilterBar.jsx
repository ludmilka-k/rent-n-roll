import {useState} from 'react';
import {FilterForm, Form, SelectContainer, Label, MileageContainer, MileageBox, LeftInputText, LeftInput, RightInputText, RightInput} from './FilterBar.styled';
import makesData from '../../constants/makes.json';
import SelectBrand from '../SelectBrand';
import SelectPrice from '../SelectPrice';
import Button from '../Button';
const FilterBar = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleMileageFromChange = (event) => {
    setMileageFrom(event.target.value);
  };

  const handleMileageToChange = (event) => {
    setMileageTo(event.target.value);
  };

  const handleSearch = () => {

  };

  return (
    <FilterForm>
      <Form>
        <SelectContainer>
          <Label>Car brand</Label>
          <SelectBrand options={makesData} value={brand} onChange={value => setBrand(value)} />
        </SelectContainer>
        <SelectContainer>
          <Label>Price / 1 hour</Label>
          <SelectPrice value={price} onChange={value => setPrice(value)} />
        </SelectContainer>
        <MileageContainer>
          <Label>Car mileage / km</Label>
          <MileageBox>
            <LeftInputText>From</LeftInputText>
            <LeftInput type="text" value={mileageFrom} onChange={handleMileageFromChange} />
            <RightInputText>To</RightInputText>
            <RightInput type="text" value={mileageTo} onChange={handleMileageToChange} />
          </MileageBox>
        </MileageContainer>
        <Button text="Search" onClick={handleSearch} width="135px" />
      </Form>
    </FilterForm>
  );
};

export default FilterBar;
