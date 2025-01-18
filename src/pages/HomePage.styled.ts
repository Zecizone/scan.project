import styled from "styled-components";

export const StyledHero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px 0;

    h1 {
        font-size: 60px;
        font-weight: 900;
        line-height: 72px;
    }

    p {
        font-family: "Inter";
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 70px;
    }

    a {
        width: fit-content;
        background: #5970FF;
        border-radius: 5px;
        color: #fff;
        font-size: 22px;
        font-family: "Inter";
        font-weight: 500;
        padding: 15px 60px;
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 740px;
`;

export const HeroIcon= styled.div`
    flex-grow: 1;
    max-width: 100%;
    height: auto;
    flex-shrink: 0;

    img {
        display: inline-flex;
        flex-grow: 1;
        flex-shrink: 0;
        max-width: 100%;
        height: 100%;
    }
`;

export const HomePage = styled.div`
    
`;