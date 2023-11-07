import styled from '@emotion/styled';

export const LoadMoreBox = styled.div`
  margin-top: 100px;
  text-align: center;
`;

export const LoadMoreBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 12px 24px;
  border: none;
  text-decoration-line: underline;
  background-color: transparent;
  color: ${p => p.theme.colors.mainAccentColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccentColorActive};
  }
`;
