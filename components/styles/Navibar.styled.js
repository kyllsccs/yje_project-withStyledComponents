import styled from "styled-components";

export const StyledNav = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
`;

export const StyledLogo = styled.div`
    padding: 1.2rem 0;
    font-weight: 800;

    a {
        font-size: 2rem;
        color: blue;
        text-decoration: none;
        a {
            font-weight: 300;
            font-size: 1.5rem;
            font-style: italic;
            color: gray;
        }
        &:hover {
            color: red;
        }
    }
`;

export const StyledMenu = styled.div`
    display: flex;
    padding: 1rem 0;

    a {
        padding: 1rem 0.2rem 1rem 1rem;
        font-style: italic;
        font-weight: 600;
        font-size: 1.2rem;
        text-decoration: none;
        color: #0307be;
        &:hover {
            color: red;
        }
    }
`;
