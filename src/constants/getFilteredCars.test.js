import {getFilteredCars} from './getFilteredCars';

test("Passes a car successfully", () => {
  const payload = [{mileage: 10, rentalPrice: "20$"}];
  const filter = {minMileage: 5, maxMileage: 15, price: 40};
  expect(getFilteredCars(payload, filter))
    .toEqual(payload);
});

test("Handle undefined mileage as no limit", () => {
  const payload = [{mileage: 10, rentalPrice: "20$"}];
  const filter = {price: 40};
  expect(getFilteredCars(payload, filter))
    .toEqual(payload);
});

test("Handle null mileage as no limit", () => {
  const payload = [{mileage: 10, rentalPrice: "20$"}];
  const filter = {minMileage: null, maxMileage: null,  price: 40};
  expect(getFilteredCars(payload, filter))
    .toEqual(payload);
});

test("Divert a car with non-conforming mileage", () => {
  const payload = [{mileage: 10, rentalPrice: "20$"}];
  const filter = {minMileage: 15, maxMileage: 40, price: 40};
  expect(getFilteredCars(payload, filter))
    .toEqual([]);
});
