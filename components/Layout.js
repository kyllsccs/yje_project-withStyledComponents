import Navibar from "./Navibar";
import { StyledLayout } from "../components/styles/Layout.styled";

function Layout({ children }) {
    return (
        <StyledLayout>
            <Navibar />
            <div>{children}</div>
        </StyledLayout>
    );
}

export default Layout;
