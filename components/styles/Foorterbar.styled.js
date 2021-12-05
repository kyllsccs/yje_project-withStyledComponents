import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: start;
`;

export const StyledFootInfo = styled.section`
    width: 30vw;
    max-height: 50vh;
    padding: 1rem 2rem;

    p {
        padding: 0rem 1rem;
        font-size: 0.9rem;
        color: white;
    }
`;

export const StyledFootQuickLink = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40vw;
    color: white;
    padding: 2rem;

    span {
        color: white;
        font-size: 1.4rem;
        font-weight: 600;
    }

    a {
        color: white;
        font-size: 1.2rem;
        /* font-weight: 600; */
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
    width: 60vw;
    color: white;
    padding: 1.9rem;

    a {
        color: white;
        font-size: 1.4rem;
        font-weight: 600;
    }

    li {
        font-size: 1.2rem;
        a {
            color: gold;
            font-size: 1.2rem;
        }
    }
`;
