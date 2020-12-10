import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 50px;
    width: 99%;
    display: flex;
    margin: auto;
    padding: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
    margin-top: 50px;
`;

export const SocialContainer = styled.div`
    width: 33.3%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    span {
        font-size: 1.4em;
    }

    @media screen and (max-width: 800px){
        width: 20%
    }
`;

export const TheCreatorContainer = styled.span`
    width: 33.3%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        font-size: 0.9rem;
        width: 40%;
    }
`

export const CopyrightContainer = styled.span`
    width: 33.3%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px){
        font-size: 0.9rem;
        width: 40%;
    }
`