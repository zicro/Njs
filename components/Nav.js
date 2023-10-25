import Link from "next/link";

const Nav = () => {
    return (
        <nav>
             <Link href="/" passHref>
                Home
            </Link>
            <Link href="/about" passHref>
                About
            </Link>
            <Link href="/test" passHref>
                Test Page
            </Link>
        </nav>
    );
}

export default Nav;