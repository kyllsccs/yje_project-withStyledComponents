import styled from "styled-components";

export const MenuCardContainer = styled.div`
    display: block;
    background-color: wheat;
    /* width: 20vw; */
    /* border: solid; */
    margin: 1rem 1rem;

    a {
        font-size: 2rem;
        font-weight: 900;
    }

    p {
        font-size: 1.2rem;
        padding: 0rem 1rem;
    }
`;

export const StyledReadMoreButton = styled.button`
    background-color: white;
    height: 2rem;
    width: 10rem;
    margin: 1rem 1rem;
    cursor: grabbing;

    a {
        text-decoration: none;
        font-size: 1rem;
    }
    &:hover {
        background-color: blue;
        color: white;
    }
`;
