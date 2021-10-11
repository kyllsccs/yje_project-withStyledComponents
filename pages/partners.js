import MenuCard from "../components/MenuCard";
import { PartnersStyledContainer } from "../components/styles/Partners.styled";
import Image from "next/image";
import partner_1 from "../image/partners/ADVANTECH.png";

function partners() {
    return (
        <PartnersStyledContainer>
            <MenuCard
                Photo={partner_1}
                vw="100vw"
                buttonTXT="Link"
                linkto="/image/partners/ADVANTECH.PNG"
            />
            <MenuCard Photo={partner_1} vw="100vw" buttonTXT="Link" />
            <MenuCard Photo={partner_1} vw="100vw" buttonTXT="Link" />
            <MenuCard Photo={partner_1} vw="100vw" buttonTXT="Link" />
            <MenuCard Photo={partner_1} vw="100vw" buttonTXT="Link" />
        </PartnersStyledContainer>
    );
}

export default partners;
