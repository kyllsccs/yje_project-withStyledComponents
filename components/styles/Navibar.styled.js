import styled from "styled-components";

export const StyledNav = styled.div`
    margin: 0 3rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
`;

export const StyledLogo = styled.div`
    padding: 1rem;
    font-weight: 800;
    font-size: 1.7rem;

    a {
        color: blue;
        span {
            font-weight: 300;
            font-size: 1.3rem;
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
    padding: 1rem;

    a {
        padding: 0 2rem;
        font-style: italic;
        font-size: 1.2rem;
        color: green;
        &:hover {
            color: red;
        }
    }
`;

export const StyleMenuLink = styled.div``;
