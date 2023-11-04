import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterStyled = styled.footer`
  //margin-top: 60px;
  //bottom: 0;
  //position: sticky;
  //z-index: 1100;
  width: 100%;
  padding-bottom: 24px;
  text-align: center;
  color: ${p => p.theme.colors.secondaryTextColor};

`;

export const FooterLink = styled(Link)`
  color: ${p => p.theme.colors.secondaryTextColor};

  &:hover {
    color: ${p => p.theme.colors.mainAccentColor};
  }
`;
