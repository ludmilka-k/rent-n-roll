import styled from '@emotion/styled';


export const Card = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;
export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 274px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryTextColor};
`;
export const Model = styled.span`
  color: ${p => p.theme.colors.mainAccentColor};
`;
export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryTextColor};
`;
export const DescriptionBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  margin-bottom: 28px;
  width: fit-content;
  overflow: hidden;
`;
export const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${p => p.theme.colors.secondaryTextColor};

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2)};
    margin-right: 4px;
    padding-right: 4px;
  }
`;
