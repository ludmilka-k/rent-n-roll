import styled from '@emotion/styled';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export const FilterForm = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 924px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: ${p => p.theme.colors.labelColor};
  margin-bottom: 8px;
`;
export const MileageContainer = styled.div`
  display: flex;
  flex-direction: column;`;
export const MileageBox = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;
export const LeftInput = styled.input`
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  text-indent: 75px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  border-radius: 14px 0 0 14px;

  &:focus {
    outline-color: ${p => p.theme.colors.mainAccentColor};
  }
`;
export const LeftInputText = styled.p`
  position: absolute;
  top: 14px;
  left: 24px;
  z-index: 6;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${p => p.theme.colors.primaryTextColor};
`;
export const  RightInput = styled.input`
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
  border-radius: 0 14px 14px 0;
  text-indent: 40px;

  &:focus {
    outline-color: ${p => p.theme.colors.mainAccentColor};
  }
`;
export const  RightInputText = styled.p`
  position: absolute;
  right: 130px;
  top: 14px;
  z-index: 6;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${p => p.theme.colors.primaryTextColor};
`;



