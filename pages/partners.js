import MenuCard from "../components/MenuCard";
import { PartnersStyledContainer } from "../components/styles/Partners.styled";
import Image from "next/image";
import partner_1 from "../image/partners/ADVANTECH.png";
import fs from "fs";
import path from "path";

function partners({ posts }) {
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

// Server side 的路徑, path = 直接指定要接哪個資料夾
export async function getStaticProps() {
    const files = fs.readdirSync(path.join("Contents/partners.posts"));

    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        // 讀取檔案, 用同步function, utf-8 指定編碼方式
        const markDownContents = fs.readFileSync(
            path.join("Contents/partners.posts", filename),
            "utf-8"
        );

        console.log(markDownContents);

        return {
            slug,
            markDownContents,
        };
    });

    return {
        props: {
            posts: { posts }, // Props 物件裡面的 posts 可被當成props傳入
        },
    };
}

export default partners;
