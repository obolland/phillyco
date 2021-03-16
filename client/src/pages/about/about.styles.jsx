import styled from 'styled-components';

export const AboutPageContainer = styled.div`
    min-height: 100vh;
`

export const AboutPageImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 4vw;
`

export const Title = styled.h1`
  z-index: 10;
  color: white;
  font-size: 88px;
  top: 25vw;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  @media screen and (max-width: 700px){
      font-size: 78px;
    }

  @media screen and (max-width: 580px){
      font-size: 48px;
    } 
`

export const MainText = styled.div`
  font-size: 22px;
  text-align: center;
  //border-bottom: solid black 1px;
  padding-bottom: 20px;
`

export const MainTextTitle = styled.h1`
  text-align: center;
  font-size: 48px;
  border-top: solid black 1px;
  padding-top: 3vw;
`