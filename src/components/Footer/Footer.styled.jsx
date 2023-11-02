import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  margin-top: 60px;
  bottom: 0;
  position: sticky;
  width: 100%;
  z-index: 1100;
  padding: 24px;
  text-align: center;
  color: ${p => p.theme.colors.secondaryTextColor};

`;

export const FooterLink = styled.a`
  color: ${p => p.theme.colors.secondaryTextColor};

  &:hover {
    color: ${p => p.theme.colors.mainAccentColor};
  }
`;
