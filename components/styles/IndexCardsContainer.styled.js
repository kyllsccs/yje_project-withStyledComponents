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
        font-size: 2rem;
        font-weight: bold;
        color: #08484c;
        align-items: flex-start;
        /* outline-style: solid; */
    }

    p {
        font-size: 1.7rem;
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
        background-color: blue;
        color: white;
        font-size: 1.3rem;
        width: 13rem;
        height: auto;
    }

    hr {
        /* display: block; */
        height: 5;
        max-width: 100%;
        border-top: 1px solid blue;
    }
`;
