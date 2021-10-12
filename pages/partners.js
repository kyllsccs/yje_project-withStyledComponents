import MenuCard from "../components/MenuCard";
import { PartnersStyledContainer } from "../components/styles/Partners.styled";
import Image from "next/image";
import partner_1 from "../image/partners/ADVANTECH.png";
import fs from 'fs'

function partners({ posts }) {
    console.log(posts);
    return (
        <PartnersStyledContainer>
            <MenuCard
                Photo={partner_1}
                vw="100vw"
                buttonTXT="Link"
                linkto="/image/partners/ADVANTECH.PNG"
            />
        </PartnersStyledContainer>
    );
}

export async function getStaticProps() {
    return {
        props: {
            posts: "my props",
        },
    };
}

export default partners;
