import styled from "styled-components";

export const ProductListPageStyled = styled.div`
    max-width: 85vw;
    margin: auto;
    font-size: 110%;

    button {
        font-size: 110%;
    }
`;

export const MarkdownContainer = styled.div`
    div pre {
        font-size: 110%;
        background: #f4f4f4;
        padding: 20px;
        margin: 20px 0;
        line-height: 2.3;
    }

    div ul,
    div ol {
        font-size: 110%;
        line-height: 2.3;
        font-weight: bold;
        margin: 10px 0;
    }

    div table {
        border-collapse: collapse;
        /* border-collapse: center; */
        /* max-width: 500rem */
    }
    div tr {
        font-size: 110%;
        border-bottom: solid 1px black;
        border-top: solid 1px black;
    }
    div td {
        font-size: 110%;
        border-right: solid 1px black;
        border-left: solid 1px black;
    }

    div th {
        border-right: solid 1px black;
        border-left: solid 1px black;
    }
    div tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;
