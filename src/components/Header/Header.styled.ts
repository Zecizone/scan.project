import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .card {
        background-color: #D9D9D9;
        border-radius: 5px;
        padding: 10px 8px;
        text-align: right;
    }

    .login {
        display: flex;
    }

    .loginName {
        font-size: 14px;
    }

    p {    
        color: rgba(117, 117, 117, 0.4);
        font-size: 10px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        letter-spacing: 0.1em; 
        word-wrap: break-word;

        &.icompany {
            span {
                color: black;
                font-size: 14px;
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                letter-spacing: 0.14em;
                word-wrap: break-word;
            }
        }

        &.lcompany {
            span {
                color: #8AC540;
                font-size: 14px;
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                letter-spacing: 0.14em;
                word-wrap: break-word;
            }
        }
    }
`;
