import { CardsContainer } from "./styles/Cards.styled";
import Image from "next/image";

export default function Cards({ post }) {
    return (
        <CardsContainer>
            <img src={post.frontmatter.cover_image} alt="" />
            <h3>{post.frontmatter.website}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                quia a cumque omnis est esse quo ab saepe nihil facilis eius
                quaerat explicabo vitae, repellat quas debitis error ullam
                tempore!
            </p>
        </CardsContainer>
    );
}
