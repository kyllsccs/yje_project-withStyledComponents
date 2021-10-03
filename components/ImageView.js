import Image from "next/image";
import Photo_1 from "../image/brand_1.jpg";
// import Photo_1 from "../image/140438.jpg";
import { StyledImageContainer } from "./styles/ImageView.styled";

function ImageView() {
    return (
        <StyledImageContainer>
            <Image src={Photo_1} />
        </StyledImageContainer>
    );
}

export default ImageView;
