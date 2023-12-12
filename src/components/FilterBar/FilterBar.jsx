import Select from 'react-select';
import { useState } from 'react';
import {
  FilterForm,
  Form,
  Label,
  LeftInput,
  LeftInputText,
  MileageBox,
  MileageContainer,
  RightInput,
  RightInputText,
  SelectContainer,
} from './FilterBar.styled';
import Button from '../Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const FilterBar = ({makes, priceTopLimit, filters, onFilterChange}) => {
  const [selectedMake, setSelectedMake] = useState(filters.make);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(filters.maxPrice);
  const [mileageFrom, setMileageFrom] = useState(filters.minMileage);
  const [mileageTo, setMileageTo] = useState(filters.maxMileage);

  const makeOptions = makes.map(make => ({ value: make, label: make }));
  const handleMakeChange = (selectedOption) => {
    setSelectedMake(selectedOption);
  };

  const priceRangeOptions = [];
  for (let i = 30; i <= priceTopLimit; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handleMaxPriceChange = selectedOption => {
    setSelectedMaxPrice(selectedOption);
  };

  const formatMileage = value => {
    if (value === undefined || value === null) {
      return ''
    }
    const cleanedValue = value.toString().replace(/,/g, '');
    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleMileageFromChange = (event) => {
    setMileageFrom(event.target.value);
  };

  const handleMileageToChange = (event) => {
    setMileageTo(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (mileageFrom > mileageTo) {
      Notify.failure('Minimum mileage cannot be greater than maximum mileage');
    }
    const newFilters = {
      make: selectedMake?.value,
      maxPrice: selectedMaxPrice?.value,
      minMileage: mileageFrom,
      maxMileage: mileageTo,
    };
    onFilterChange(newFilters);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setSelectedMake(null);
    setSelectedMaxPrice(null);
    setMileageFrom(null);
    setMileageTo(null);
    // handleSearch(event);
  }


  return (
    <FilterForm>
      <Form>
        <SelectContainer>
          <Label>Car brand</Label>
          <Select
            id="nameSelect"
            placeholder="Enter the text"
            value={selectedMake}
            isClearable={true}
            onChange={handleMakeChange}
            options={makeOptions}
            styles={{
              control: styles => ({
                ...styles,
                width: '224px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '1.11',
                fontFamily: 'inherit',
                backgroundColor: '#ffffff',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'inherit',
                };
              },
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </SelectContainer>
        <SelectContainer>
          <Label>Price / 1 hour</Label>
          <Select
            id="priceSelect"
            placeholder="To $"
            isClearable={true}
            value={selectedMaxPrice}
            onChange={handleMaxPriceChange}
            options={priceRangeOptions}
            styles={{
              control: styles => ({
                ...styles,
                width: '125',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '1.11',
                fontFamily: 'inherit',
                backgroundColor: '#ffffff',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'inherit',
                };
              },
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </SelectContainer>
        <MileageContainer>
          <Label>Car mileage / km</Label>
          <MileageBox>
            <LeftInputText>From</LeftInputText>
            <LeftInput type="text" value={formatMileage(mileageFrom)} onChange={handleMileageFromChange} />
            <RightInputText>To</RightInputText>
            <RightInput type="text" value={formatMileage(mileageTo)} onChange={handleMileageToChange} />
          </MileageBox>
        </MileageContainer>
        <Button text="Search" onClick={handleSearch} width="135px" />
        <Button text="Clear" onClick={handleClear} width="135px" />
      </Form>
    </FilterForm>
  );
};

export default FilterBar;
