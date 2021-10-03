import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: start;
`;

export const StyledFootInfo = styled.image`
    width: 40vw;
    /* max-height: 100vh; */
    padding: 1rem 2rem;

    p {
        padding: 0rem 1rem;
        font-size: 1.2rem;
        color: white;
    }
`;

export const StyledFootQuickLink = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30vw;
    color: white;
    padding: 1.9rem;

    span {
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
    }

    a {
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        text-decoration: none;
        cursor: grab;
        &:hover {
            color: red;
        }
    }
`;

export const StyledFootContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30vw;
    color: white;
    padding: 1.9rem;

    span {
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
    }
`;
