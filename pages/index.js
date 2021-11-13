import styled from "styled-components";
import ImageView from "../components/ImageView";
import MenuCard from "../components/MenuCard";
import {
    StyledIndexCard,
    StyledIndexContainer,
} from "../components/styles/Index.styled";
import cover_img from "../public/image/posts/digital_s.jpg";

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;

const card_contents = `
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
`;

export default function Home() {
    return (
        <StyledIndexContainer>
            <ImageView Photo={cover_img} />
            <StyledIndexCard>
                <MenuCard
                    title="Frameless Muti-touch Monitor"
                    contents={card_contents}
                    buttonTXT="Get More..."
                    linkto="/about"
                    vw="20vw"
                    PhotoShow="on"
                    ButtonShow="on"
                />
                <MenuCard
                    title="Aluminum Frame Monitor"
                    contents={card_contents}
                    buttonTXT="Get More..."
                    linkto="/"
                    vw="20vw"
                    PhotoShow="on"
                    ButtonShow="on"
                />
                <MenuCard
                    title="Multi-Mounting type Monitor"
                    contents={card_contents}
                    buttonTXT="Get More..."
                    linkto="/"
                    vw="20vw"
                    PhotoShow="on"
                    ButtonShow="on"
                />
                <MenuCard
                    title="High Brightness Display / Kits"
                    contents={card_contents}
                    buttonTXT="Get More..."
                    linkto="/"
                    vw="20vw"
                    PhotoShow="on"
                    ButtonShow="on"
                />
            </StyledIndexCard>
        </StyledIndexContainer>
    );
}
