import Navibar from "./Navibar";
import Footerbar from "./Footerbar";
import { StyledLayout } from "../components/styles/Layout.styled";

function Layout({ children }) {
    return (
        <StyledLayout>
            <Navibar />
            <div>{children}</div>
            <Footerbar />
        </StyledLayout>
    );
}

export default Layout;
