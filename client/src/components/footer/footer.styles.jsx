import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    height: 50px;
    width: 99%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
    margin-top: 50px;
`;

export const OptionsContainer = styled.div`
    //text-align: center;
    @media screen and (max-width: 800px){
        text-align: center;
        font-size: 0.9rem;
    }
`

export const OptionLink = styled(Link)`

    @media screen and (max-width: 800px){

    }
`;

export const TheCreatorContainer = styled.div`
    //text-align: center;
    @media screen and (max-width: 800px){
        text-align: center;
        font-size: 0.9rem;
    }
`

export const CopyrightContainer = styled.div`
    //text-align: center;
    @media screen and (max-width: 800px){
        text-align: center;
        font-size: 0.9rem;
    }
`