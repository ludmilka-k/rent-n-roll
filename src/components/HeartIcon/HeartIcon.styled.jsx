import styled from '@emotion/styled';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const BtnHeart = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  background-color: transparent;
`;

export const FillHeart = styled(AiFillHeart )`
  color: ${p => p.theme.colors.mainAccentColor};
`;

export const StrokeHeart = styled(AiOutlineHeart)`
  color: ${p => p.theme.colors.invertTextColor};
`;
