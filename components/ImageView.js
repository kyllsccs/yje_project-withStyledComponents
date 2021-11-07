import Image from "next/image";
import Photo_1 from "../public/image/posts/brand_2.jpg";
import { StyledImageContainer } from "./styles/ImageView.styled";

function ImageView() {
    return (
        <StyledImageContainer>
            <Image src={Photo_1} />
        </StyledImageContainer>
    );
}

export default ImageView;
