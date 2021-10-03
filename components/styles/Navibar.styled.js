import styled from "styled-components";

export const StyledNav = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: space-between;
`;

export const StyledLogo = styled.div`
    padding: 1rem 1rem;
    font-weight: 1200;

    a {
        font-size: 2rem;
        color: #0000ff;
        text-decoration: none;
        a {
            font-weight: 800;
            font-size: 1.5rem;
            /* font-style: italic; */
            color: white;
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
        padding: 0.7rem;
        /* font-style: italic; */
        font-weight: 600;
        font-size: 1.2rem;
        text-decoration: none;
        color: white;
        &:hover {
            color: red;
        }
    }
`;
