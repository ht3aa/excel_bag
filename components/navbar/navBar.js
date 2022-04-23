import navBarStyles from "../../styles/Navbar.module.css";
import toggleHamAnimation from "./hamAnimationController";
import { useRef, useState, useEffect } from "react";
import Link from "next/dist/client/link";
import Image from "next/image";


export default function NavBar() {
    const [showMobileNavigationList, setShowMobileNavigationList] = useState(false);
    const hamContainerRef = useRef();
    const ulListRef = useRef();

    function toggleHamAndShowHam() {
        toggleHamAnimation(hamContainerRef.current);
        setShowMobileNavigationList(!showMobileNavigationList);
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const aboutUs = document.getElementById("aboutUs");
            if(aboutUs && parseInt(screen.width) > 650) {
                if(window.scrollY + 50 > aboutUs.offsetTop ) {
                    ulListRef.current.children[0].children[0].classList.add("navigationActive");  
                    ulListRef.current.children[1].children[0].classList.remove("navigationActive");    
                } else if(window.scrollY < aboutUs.offsetTop) {
                    ulListRef.current.children[1].children[0].classList.add("navigationActive"); 
                    ulListRef.current.children[0].children[0].classList.remove("navigationActive");  
                }
            }
        })
    }, [])
    return (
        <div className={navBarStyles.navbar}>
            <div className={navBarStyles.logoBox}>
                <Image src="/university.png" alt="Logo" width={50} height={50}/> 
                <p>كلية الأمام الكاظم/قسم هندسة تقنيات الحاسوب</p>       
            </div>
            <ul ref={ulListRef} className={navBarStyles.navigationList}>
                <Link href='/#aboutUs'><li><p className={navBarStyles.navigationListParagraph}>من نحن</p></li></Link>
                <Link href='/'><li><p className={navBarStyles.navigationListParagraph}>الصفحة الرئيسية</p></li></Link>
            </ul>
            <div ref={hamContainerRef} className="ham_Container" onClick={toggleHamAndShowHam}>
                    <div className="circle"></div>
                    <div className="ham_4">
                        <div className="middleBar"></div>
                    </div>
                <div className="hide"></div>
            </div>
            {showMobileNavigationList && <nav className={navBarStyles.mobileNavigationList}>
                <ul className={navBarStyles.mobileNavigationListUl}>
                    <Link href='/'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>الصفحة الرئيسية</p></li></Link>
                    <Link href='/#aboutUs'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>من نحن</p></li></Link>
                </ul>
            </nav>}
        </div>
    )
}