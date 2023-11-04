import styled from '@emotion/styled';
import {MdClose} from 'react-icons/md';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  color: ${p => p.theme.colors.secondaryTextColor};
  backdrop-filter: blur(1px);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  border-radius: 14px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${p => p.theme.colors.invertTextColor};

  @media screen and (min-width: 768px) {
    width: 540px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
`;

export const CloseIcon = styled(MdClose)`
  color: ${p => p.theme.colors.primaryTextColor};
`;
