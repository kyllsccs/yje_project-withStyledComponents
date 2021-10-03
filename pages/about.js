import { AboutPageContainer } from "../components/styles/About.styled";
import MenuCard from "../components/MenuCard";

function about() {
    return (
        <AboutPageContainer>
            <div>About us</div>
            <MenuCard
                title="ABout us"
                contents="Hello"
                linkto="/"
                buttonTXT="Back"
            />
        </AboutPageContainer>
    );
}

export default about;
