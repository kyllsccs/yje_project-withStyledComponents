import Image from "next/image";
import Photo_1 from "../public/image/posts/contact_cover.jpg";
import { StyledImageContainer } from "./styles/ImageView.styled";

function ImageView(props) {
    return (
        <StyledImageContainer>
            <Image src={props.Photo} />
        </StyledImageContainer>
    );
}

ImageView.defaultProps = {
    Photo: Photo_1,
};

export default ImageView;
