import Link from "next/link";
import style from "@/styles/index.module.css"
const Nav = () => {
    return (
        <nav>
             <Link className={style['lnk-ss']} href="/" passHref>
                Home
            </Link>
            <Link className={style['lnk-ss']} href="/about" passHref>
                About
            </Link>
            <Link className={style['lnk-ss']} href="/test" passHref>
                Test Page
            </Link>
        </nav>
    );
}

export default Nav;