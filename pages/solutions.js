import SolutionCards from "../components/SolutionCards";
import { SolutionStyledContainer } from "../components/styles/Solution.styled";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function solutions({ posts }) {
    return (
        <SolutionStyledContainer>
            <h1>Solutions</h1>
            {posts.map((post, index) => (
                <SolutionCards post={post} />
            ))}
        </SolutionStyledContainer>
    );
}

export async function getStaticProps() {
    // read file folder
    const files = fs.readdirSync(path.join("Contents/solution.posts"));

    // read filename
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");

        const markDownContents = fs.readFileSync(
            path.join("Contents/solution.posts", filename),
            "utf-8"
        );
        // console.log(markDownContents);

        const { data: frontmatter } = matter(markDownContents);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}

export default solutions;
