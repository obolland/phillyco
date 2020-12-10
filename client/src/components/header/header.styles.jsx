  
import styled, {css}from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 10vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid black;

    @media screen and (max-width: 800px) {
      height: 12vw;
      padding: 10px;
      margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 23%;

  @media screen and (max-width: 800px) {
      width: 20%;
    }  

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 2vw;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
      width: 80%;
    }
`;

export const OptionLink = styled(Link)`
  padding: 0 2.3vw;
  cursor: pointer;
`;


export const SocialMedia = styled.div`
  padding: 0px 2.3vw;
  padding-top: 0.5vw;
  font-size: 1.7em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.visibility &&
    css`
      @media screen and (max-width: 469px) {
      display: none;
    }
    `};
`
