import { FooterStyled, FooterLink } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <p>&#169; Rent'n'Roll Ukraine. All rights reserved. 2023</p>
      <FooterLink href="https://github.com/ludmilka-k/rent-n-roll" target="_blank" rel="noreferrer">Developed with 💙💛</FooterLink>
    </FooterStyled>
  );
};

export default Footer;
