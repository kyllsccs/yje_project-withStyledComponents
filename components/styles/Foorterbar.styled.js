import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: start;
    max-width: 100vw;
    height: auto;
`;

export const StyledFootInfo = styled.section`
    width: 30vw;
    height: 50vh;
    padding: 1rem 2rem;

    p {
        padding: 0rem 1rem;
        font-size: 1vmin;
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
        font-size: 2.3vmin;
        font-weight: 600;
    }

    a {
        color: white;
        font-size: 2vmin;
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
        font-size: 2.3vmin;
        font-weight: 600;
    }

    li {
        font-size: 2vmin;
        a {
            color: gold;
            font-size: 2vmin;
        }
    }
`;
