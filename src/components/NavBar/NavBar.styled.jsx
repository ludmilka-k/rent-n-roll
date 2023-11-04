import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //top: 0;
  //left: 0;
  //position: sticky;
  //z-index: 1100;
  min-height: 64px;
  padding: 12px 24px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
  0 4px 5px 0 rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Logo = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: ${p => p.theme.colors.mainAccentColorActive};

  @media screen and (max-width: 768px) {
   display: none;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 20px;
  font-weight: 500;
  color: ${p => p.theme.colors.primaryTextColor}; // #212121;
  transition: color 1s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.mainAccentColor}; //#3E85F3;
  }

  &.active {
    color: ${p => p.theme.colors.mainAccentColorActive}; //#2B78EF;

  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
