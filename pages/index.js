import styled from "styled-components";
import ImageView from "../components/ImageView";
import { StyledIndexContainer } from "../components/styles/Index.styled";

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
    return (
        <StyledIndexContainer>
            <ImageView />
        </StyledIndexContainer>
    );
}
