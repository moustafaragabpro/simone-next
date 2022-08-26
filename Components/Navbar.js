import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="logo">
                <Image src="/images/logo/logo-light.png" width={100} height={30} alt="Logo"/>
            </div>
            <div className="nav-links">
                <ul>
                <li>
                    <Link href="#home" className="active">Home</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#services">Services</Link>
                </li>
                <li>
                    <Link href="#resume">Resume</Link>
                </li>
                <li>
                    <Link href="#portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="#client">Client</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
                </ul>
            </div>
            <div></div>
        </div>
     );
}
 
export default Navbar;