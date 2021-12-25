import styled from "styled-components";

export const CardsContainer = styled.div`
    /* background-color: #e1f1f4; */
    display: inline-block;
    margin: 1rem;
    max-width: 30vw;
    max-height: 20rem;
    padding: 5px;

    h3 {
        align-items: flex-end;
    }

    img {
        width: 30%;
        height: 20%;
    }

    dt {
        margin: 6px 0 6px 0;
        padding: 1px 0 1px 0.5rem;
        cursor: pointer;
        border-bottom: 1px blue solid;
        border-left: 0.3rem blue solid;
        width: 100%;

        &:hover {
            background-color: #badbed;
        }
    }
`;
