import {
    AboutPageContainer,
    StyledInfoGroup,
} from "../components/styles/About.styled";
import MenuCard from "../components/MenuCard";
import Image from "next/image";
import Photo_logo from "../public/image/posts/Logo.jpg";
import ImageView from "../components/ImageView";

const card_contents = `
Where can I get some?
There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected 
humour, or randomised words which don't look even slightly believable. 
If you are going to use a passage of Lorem Ipsum, you need to be sure 
there isn't anything embarrassing hidden in the middle of text. All the 
Lorem Ipsum generators on the Internet tend to repeat predefined chunks 
as necessary, making this the first true generator on the Internet. It 
uses a dictionary of over 200 Latin words, combined with a handful of 
model sentence structures, to generate Lorem Ipsum which looks reasonable. 
The generated Lorem Ipsum is therefore always free from repetition, injected 
humour, or non-characteristic words etc.
`;

function about() {
    return (
        <AboutPageContainer>
            <StyledInfoGroup>
                <ImageView />
            </StyledInfoGroup>
            <StyledInfoGroup>
                <MenuCard
                    title="Y.J.E Develope"
                    contents={card_contents}
                    linkto="/"
                    buttonTXT="Back"
                    vw="10vw"
                    PhotoShow="off"
                    ButtonShow="off"
                    Photo={Photo_logo}
                />
            </StyledInfoGroup>
        </AboutPageContainer>
    );
}

export default about;
