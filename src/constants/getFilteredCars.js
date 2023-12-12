export const getFilteredCars = (payload, filters) => {
  const parsePrice = str => parseInt(str.replace(/\D/g, ''), 10);
  return payload
    .filter(({ mileage }) =>
      (!filters.minMileage || mileage >= filters.minMileage)
      &&
      (!filters.maxMileage || mileage <= filters.maxMileage)
    )
    .filter(({ rentalPrice }) =>
      !filters.maxPrice || parsePrice(rentalPrice) <= filters.maxPrice
    );
};
