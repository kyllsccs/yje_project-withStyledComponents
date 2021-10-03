import {
    StyledNav,
    StyledLogo,
    StyledMenu,
} from "../components/styles/Navibar.styled";
import Link from "next/link";

function Navibar() {
    return (
        <>
            <StyledNav>
                <StyledLogo>
                    <Link href="/">
                        <a>
                            Y.J.E <span> Display Tech</span>
                        </a>
                    </Link>
                </StyledLogo>
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
