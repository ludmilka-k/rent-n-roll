import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Banner from '../../images/banner.webp'

export const SectionHero = styled.section`
`;
export const Section = styled.section`
  padding: 40px 20px;
  overflow-y: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 700px;
  gap: 120px;
  padding: 0;
  margin: 0;
  //overflow-y: hidden;
`;

export  const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  color: ${p => p.theme.colors.mainAccentColor};
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 140px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.28;
  background-color: ${p => p.theme.colors.mainAccentColor};
  color: ${p => p.theme.colors.invertTextColor};
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus{
    background-color: ${p => p.theme.colors.mainAccentColorActive}
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.primaryTextColor};
  text-align: center;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  padding: 12px;
`;

export const ItemTitle = styled.h3`
  margin-bottom: 8px;
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const ItemDescription = styled.p`
  color: ${p => p.theme.colors.primaryTextColor};
`;
