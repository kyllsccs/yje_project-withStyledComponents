import styled from "styled-components";

export const StyledNav = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    max-height: 6vh;
`;

export const StyledLogo = styled.div`
    padding: 1rem 0.7rem;
    font-weight: 1200;
    cursor: grabbing;

    &:hover {
        background-color: #3d4347;
    }

    a {
        font-size: 1.5rem;
        color: #0000ff;
        text-decoration: none;
        span {
            font-weight: 800;
            font-size: 1.2rem;
            /* font-style: italic; */
            color: white;
            &:hover {
                background-color: #3d4347;
            }
        }
        &:hover {
            color: red;
            background-color: #3d4347;
        }
    }
`;

export const StyledMenu = styled.section`
    display: flex;
    padding: 1rem 0;

    a {
        padding: 0.3rem;
        /* font-style: italic; */
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        color: white;
        &:hover {
            background-color: navy;
        }
    }
`;

export const StyledMenuSelect = styled.select`
    background-color: black;
    width: 10vw;
    height: 3rem;
    color: white;
    cursor: grabbing;

    li {
        cursor: grabbing;
        font-size: 1.8rem;
        color: white;
        background: black;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;
