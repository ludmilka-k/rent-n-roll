import styled from '@emotion/styled';
export const List = styled.ul`
  margin-bottom: 40px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 925px) {
    grid-template-columns: repeat(3, 1fr);
  }


  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 29px;
    grid-row-gap: 40px;
  }
`;
