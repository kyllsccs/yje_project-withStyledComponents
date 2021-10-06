import {
    StyledNav,
    StyledLogo,
    StyledMenu,
    StyledMenuSelect,
} from "../components/styles/Navibar.styled";
import Link from "next/link";

function Navibar() {
    const link2 = (a, b) => {
        return;
        <Link href={a}>b</Link>;
    };
    return (
        <>
            <StyledNav>
                <Link href="/">
                    <StyledLogo>
                        <a>
                            Y.J.E <span> Display Tech</span>
                        </a>
                    </StyledLogo>
                </Link>
                <StyledMenu>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                    <Link href="/">
                        <a>Solutions</a>
                    </Link>
                    <Link href="/">
                        <a>Contact</a>
                    </Link>
                </StyledMenu>
            </StyledNav>
        </>
    );
}

export default Navibar;
