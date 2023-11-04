import styled from '@emotion/styled';


export const ImageBox = styled.div`
  margin-bottom: 14px;

`;
export const Image = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;
export const  Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${p => p.theme.colors.primaryTextColor};
  margin-bottom: 8px;
`;
export const Model = styled.span`
  color: ${p => p.theme.colors.mainAccentColor};
`;
export const DescriptionBox  = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;
export  const  Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${p => p.theme.colors.secondaryTextColor};

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2)};
    margin-right: 4px;
    padding-right: 4px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: ${p => p.theme.colors.primaryTextColor};
  margin-bottom: 24px;
`;
export const Heading = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: ${p => p.theme.colors.primaryTextColor};
  margin-top: 24px;
  margin-bottom: 8px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const ConditionBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.24px;
  gap: 8px;
  margin-bottom: 24px;
`;
export const ConditionItem = styled.li`
  padding: 7px 14px;
  border-radius: 36px;
  color: ${p => p.theme.colors.helperColor};
  background-color: ${p => p.theme.colors.helperBGColor};
`;
export const Span = styled.span`
  font-weight: 600;
  color: ${p => p.theme.colors.mainAccentColor};
`;



