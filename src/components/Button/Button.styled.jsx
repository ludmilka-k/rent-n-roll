import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  //width: 100%;
  padding: 12px;
  text-align: center;
  border: none;
  border-radius: 8px;
  color: ${p => p.theme.colors.invertTextColor};
  background-color: ${p => p.theme.colors.mainAccentColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.mainAccentColorActive}
  }
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.28;
  color: ${p => p.theme.colors.invertTextColor};
`;
