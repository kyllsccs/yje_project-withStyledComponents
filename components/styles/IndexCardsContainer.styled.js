import styled from "styled-components";

export const IndexCardsContainer = styled.div`
    /* background-color: #e1f1f4; */
    /* display: inline-block; */
    display: inline-flex;
    flex-direction: column;
    margin: 2rem 8.5rem;
    max-width: 100vw;
    max-height: 40rem;
    padding: 5px;
    /* justify-items: center; */
    /* align-items: center; */

    a {
        font-size: 3vmin;
        font-weight: bold;
        color: #08484c;
        align-items: flex-start;
        /* outline-style: solid; */
    }

    p {
        font-size: 2.5vmin;
        font-weight: 500;
        max-width: 100%;
        color: gray;
        /* outline-style: solid; */
    }

    img {
        width: auto;
        /* height: 50%; */
    }

    button {
        /* background-color: blue; */
        color: blue;
        font-size: 1.7vmin;
        width: 13rem;
        height: auto;
    }
`;
