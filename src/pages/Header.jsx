import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const headerMobileRef = useRef(null);
    const menuCloseRef = useRef(null);
    const hamburgerRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const headerMobile = headerMobileRef.current;
        const menuClose = menuCloseRef.current;
        const hamburger = hamburgerRef.current;
        const overlay = overlayRef.current;
        const body = document.body;

        const openMenu = () => {
            headerMobile.classList.remove('-left-full');
            headerMobile.classList.add('left-0');
            overlay.classList.add('active');
            body.style.overflow = 'hidden';
            body.classList.add('h-screen');
        };

        const closeMenu = () => {
            headerMobile.classList.remove('left-0');
            headerMobile.classList.add('-left-full');
            overlay.classList.remove('active');
            body.style.overflow = 'auto';
            body.classList.remove('h-screen');
        };

        hamburger.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        return () => {
            hamburger.removeEventListener('click', openMenu);
            menuClose.removeEventListener('click', closeMenu);
            overlay.removeEventListener('click', closeMenu);
        };
    }, []);

    return (
        <div>
            <div className="max-w-[1420px] lg:mt-8 lg:rounded-t-xl mx-auto bg-[#232E52]">
            <header className="pt-10 pb-[86.5px]">
                <div className="max-w-[1240px] px-5 mx-auto flex items-center justify-between">
                    <Link to="/">
                        <svg width="100" height="18" viewBox="0 0 100 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 17.7073V0.268292H7.78049C9.76423 0.268292 11.2358 0.674797 12.1951 1.4878C13.1707 2.30081 13.6585 3.41463 13.6585 4.82927V4.92683C13.6585 6.91057 12.6748 8.1626 10.7073 8.68293C13.0325 9.07317 14.1951 10.4309 14.1951 12.7561V12.8537C14.1951 16.0894 12.0813 17.7073 7.85366 17.7073H0ZM4.87805 14.3659H6.95122C8.49594 14.3659 9.26829 13.6911 9.26829 12.3415V12.2439C9.26829 10.9106 8.44715 10.2439 6.80488 10.2439H4.87805V14.3659ZM4.87805 7.19512H6.78049C7.56098 7.19512 8.11382 7.05691 8.43902 6.78049C8.76423 6.50406 8.92683 6.04878 8.92683 5.41463V5.31707C8.92683 4.71545 8.7561 4.27642 8.41463 4C8.07317 3.72358 7.52846 3.58536 6.78049 3.58536H4.87805V7.19512Z" fill="white" />
                            <path d="M15.8222 17.7073V0.268292H20.8466V13.8293H27.432V17.7073H15.8222Z" fill="white" />
                            <path d="M36.8175 14.0732C38.0532 14.0732 39.0288 13.626 39.7443 12.7317C40.4597 11.8374 40.8175 10.6098 40.8175 9.04878V8.85366C40.8175 7.30894 40.4516 6.10569 39.7199 5.2439C39.0044 4.36585 38.0288 3.92683 36.7931 3.92683C35.5573 3.92683 34.5817 4.35772 33.8662 5.21951C33.1508 6.0813 32.7931 7.30081 32.7931 8.87805V9.07317C32.7931 10.6341 33.1589 11.8618 33.8906 12.7561C34.6223 13.6341 35.5979 14.0732 36.8175 14.0732ZM36.7199 18C33.9394 18 31.7199 17.1789 30.0614 15.5366C28.4028 13.8943 27.5736 11.748 27.5736 9.09756V8.90244C27.5736 6.28455 28.4435 4.15447 30.1833 2.51219C31.9394 0.853658 34.1427 0.0243903 36.7931 0.0243903C39.4923 0.0243903 41.7036 0.821138 43.4272 2.41463C45.167 3.99187 46.037 6.11382 46.037 8.78049V8.97561C46.037 11.6748 45.1833 13.8537 43.476 15.5122C41.7849 17.1707 39.5329 18 36.7199 18Z" fill="white" />
                            <path d="M55.972 18C53.0777 18 50.8256 17.187 49.2159 15.561C47.6224 13.935 46.8256 11.7805 46.8256 9.09756V8.90244C46.8256 6.26829 47.6874 4.13008 49.411 2.4878C51.1346 0.829268 53.3216 0 55.972 0C58.1996 0 60.0695 0.536585 61.5817 1.60976C63.0939 2.66667 63.9313 4.26829 64.0939 6.41463H59.1427C58.8988 4.7561 57.85 3.92683 55.9964 3.92683C54.7606 3.92683 53.7931 4.37398 53.0939 5.26829C52.3947 6.1626 52.0452 7.39837 52.0452 8.97561V9.17073C52.0452 10.6992 52.3622 11.9187 52.9964 12.8293C53.6468 13.7398 54.6874 14.1951 56.1183 14.1951C57.2565 14.1951 58.1021 13.9512 58.6549 13.4634C59.224 12.9593 59.533 12.3252 59.5817 11.561H56.3135V8.07317H64.5086V10.2195C64.5086 12.5285 63.7687 14.4065 62.2891 15.8537C60.8094 17.2846 58.7037 18 55.972 18Z" fill="white" />
                            <path d="M74.4381 18C71.5438 18 69.2917 17.187 67.682 15.561C66.0885 13.935 65.2917 11.7805 65.2917 9.09756V8.90244C65.2917 6.26829 66.1535 4.13008 67.8771 2.4878C69.6007 0.829268 71.7877 0 74.4381 0C76.6657 0 78.5356 0.536585 80.0478 1.60976C81.56 2.66667 82.3974 4.26829 82.56 6.41463H77.6088C77.3649 4.7561 76.3161 3.92683 74.4625 3.92683C73.2267 3.92683 72.2592 4.37398 71.56 5.26829C70.8608 6.1626 70.5112 7.39837 70.5112 8.97561V9.17073C70.5112 10.6992 70.8283 11.9187 71.4625 12.8293C72.1129 13.7398 73.1535 14.1951 74.5844 14.1951C75.7226 14.1951 76.5681 13.9512 77.121 13.4634C77.6901 12.9593 77.999 12.3252 78.0478 11.561H74.7795V8.07317H82.9746V10.2195C82.9746 12.5285 82.2348 14.4065 80.7551 15.8537C79.2755 17.2846 77.1698 18 74.4381 18Z" fill="white" />
                            <path d="M82.3422 17.7073L87.9276 0.268292H94.391L99.9276 17.7073H94.6349L93.7081 14.4634H87.9276L87.0008 17.7073H82.3422ZM90.83 4.31707L88.9032 11.0244H92.7325L90.83 4.31707Z" fill="white" />
                        </svg>
                    </Link>
                    <div>
                        <ul className="md:flex hidden items-center gap-10">
                            <li><Link className="text-white font-medium text-lg" to="/category">Design Tools</Link></li>
                            <li><Link className="text-white font-medium text-lg" to="/category">Daily Updates</Link></li>
                            <li><Link className="text-white font-medium text-lg" to="/single">Tutorials</Link></li>
                            <li><Link className="text-white font-medium text-lg" to="/library">Library</Link></li>
                        </ul>
                    </div>
                    <Link className="text-white md:block hidden text-sm py-2.5 px-5 bg-opacity-10 bg-white rounded-lg hover:opacity-70 transition-all" to="#">Subscribe</Link>
                    <button className="hamburger md:hidden block text-white" ref={hamburgerRef}>
                        <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="41" y2="1" stroke="currentColor" strokeWidth="2" />
                            <line y1="11" x2="41" y2="11" stroke="currentColor" strokeWidth="2" />
                            <line y1="22" x2="41" y2="22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </div>

                <div className="header_mobile fixed -left-full top-0 w-full transition-all z-50 p-8 bg-[#232E52]" ref={headerMobileRef}>
                    <div className="flex items-start justify-between">
                        <button className="menu_close flex justify-center items-center text-white w-10 h-10 border rounded-md" ref={menuCloseRef}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 11L8 7M8 7L4 3M8 7L12 3M8 7L4 11" stroke="currentColor" strokeWidth="1.225" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <ul className="text-right flex flex-col gap-6 mb-11">
                            <li><Link className="text-white font-medium text-2xl" to="/category">Design Tools</Link></li>
                            <li><Link className="text-white font-medium text-2xl" to="/category">Daily Updates</Link></li>
                            <li><Link className="text-white font-medium text-2xl" to="/single">Tutorials</Link></li>
                            <li><Link className="text-white font-medium text-2xl" to="/library">Library</Link></li>
                        </ul>
                    </div>
                    <Link className="text-white flex justify-center text-sm py-2.5 px-5 bg-opacity-10 bg-white rounded-lg hover:opacity-70 transition-all" to="#">Subscribe</Link>
                </div>
                <div className="overlay fixed inset-0 bg-black opacity-50 z-40 hidden" ref={overlayRef}></div>
            </header>
            <div className="overlay fixed inset-0 bg-black opacity-50 z-40 " ref={overlayRef}></div>
            </div>
        </div>
    );
}
