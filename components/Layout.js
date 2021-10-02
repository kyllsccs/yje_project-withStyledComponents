import Navibar from "./Navibar";

function Layout({ children }) {
    return (
        <>
            <Navibar />
            <div>{children}</div>
        </>
    );
}

export default Layout;
