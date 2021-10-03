import Image from "next/image";
import Link from "next/link";
import {
    MenuCardContainer,
    StyledMenuCardPhoto,
    StyledReadMoreButton,
} from "../components/styles/MenuCard.styled";
import Photo from "../image/4537032.jpg";

function MenuCard(props) {
    return (
        <MenuCardContainer>
            <Image src={Photo} />
            <a>{props.title}</a>
            <p>{props.contents}</p>
            <Link href={props.linkto}>
                <StyledReadMoreButton>{props.buttonTXT}</StyledReadMoreButton>
            </Link>
        </MenuCardContainer>
    );
}

export default MenuCard;
