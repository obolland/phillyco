import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const AddButton = styled(CustomButton)`
  margin-left: 0;
  width: 80%;
  opacity: 1;

  @media screen and (max-width: 400px) {
    width: 90%;
  }
  `

export const ModalText = styled.div`
  display: flex;
  width: 60%;
  margin-left: 15px;
  `