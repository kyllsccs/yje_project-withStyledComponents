import Head from "next/head";
import IndexCards from "../components/IndexCards";
// using by Patners style
import { IndexCardsStyledContainer } from "../components/styles/indexCards.styled";
// import cover_img from "../public/image/posts/indexImage/digital_s.jpg";
import cover_logo from "../public/image/posts/indexImage/cover_logo_1.jpg";
import ImageView from "../components/ImageView";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function Home({ posts }) {
    // console.log(posts);
    return (
        <div>
            <Head>
                <title>Y.J.E.Display Tech Co., LTD.</title>
            </Head>
            <IndexCardsStyledContainer>
                <ImageView Photo={cover_logo} />
                {posts.map((post, index) => (
                    <IndexCards key={index} post={post} />
                ))}
                {/* <ImageView Photo={cover_logo_2} /> */}
            </IndexCardsStyledContainer>
        </div>
    );
}

// Server side 的路徑, path = 直接指定要接哪個資料夾, fetch the data.
export async function getStaticProps() {
    // 指定讀取檔案資料夾, 取得資料夾內部資訊, type is Array.
    const files = fs.readdirSync(path.join("Contents/index.posts"));

    // 使用map function來返回每一個markdown裡面的資訊
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        // 讀取檔案, 用同步function, utf-8 指定編碼方式
        const markDownContents = fs.readFileSync(
            path.join("Contents/index.posts", filename),
            "utf-8"
        );
        // console.log(markDownContents);

        // 重新解構, 把data 解構為 frontmatter
        const { data: frontmatter } = matter(markDownContents);

        return {
            slug,
            frontmatter,
        };
    });
    // console.log(posts);
    return {
        props: {
            posts, // 把map 出來的objects 物件, 賦予給props.
        },
    };
}

export default Home;
