import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import img1 from '../img/home/1.png';
import img2 from '../img/home/2.png';
import img3 from '../img/home/3.png';
import img4 from '../img/home/4.png';
import img5 from '../img/home/5.png';
import img6 from '../img/home/6.png';
import img7 from '../img/home/7.png';
import img8 from '../img/home/8.png';
import img9 from '../img/home/9.png';

const data = [
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img1
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img2
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img3
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img4
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img5
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img6
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img7
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img8
    },
    {
        category: "Design tools",
        date: "August 13, 2021",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        description: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        imgSrc: img9
    },
];

export default function Index() {
    return (
        <div>
            <Header />
            <div className="max-w-[1420px] lg:rounded-b-xl mx-auto bg-[#232E52]">
                <section className="pt-10 md:pt-[86.5px] pb-36">
                    <div className="max-w-[970px] mx-auto px-5">
                        <p className="text-white font-semibold text-base uppercase">👋 HELLO</p>
                        <h1 className="text-white font-bold md:text-[52px] text-4xl md:leading-[62.4px]">Insights about my personal and work
                            life, and the
                            in-betweens</h1>
                    </div>
                </section>
            </div>

            <section className="md:pt-[100px] pt-16 pb-[70px]">
                <div className="max-w-[970px] mx-auto px-5">
                    <h2 className="text-[#232E52] font-bold text-4xl pb-5 border-b mb-10">Design Tools</h2>
                    {data.slice(0, 3).map((item, index) => (
                        <div key={index} className="md:flex items-center justify-between pb-12 border-b mb-6">
                            <div>
                                <div className="flex items-center mb-6">
                                    <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">{item.category}</button>
                                    <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{item.date}</p>
                                </div>
                                <h3 className="text-[#232E52] font-bold text-2xl md:text-3xl mb-3">
                                    <NavLink to={`/article/${index}`}>{item.title}</NavLink>
                                </h3>
                                <p className="text-[#232E52] text-base md:text-lg md:mb-0 mb-10">{item.description}</p>
                            </div>
                            <div>
                                <img className="w-full" src={item.imgSrc} alt="Article" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="md:py-[70px] py-10">
                <div className="max-w-[970px] mx-auto px-5">
                    <h2 className="text-[#232E52] font-bold text-4xl pb-5 border-b mb-10">Weekly Updates</h2>
                    {data.slice(3, 6).map((item, index) => (
                        <div key={index} className="md:flex items-center justify-between pb-12 border-b mb-6">
                            <div>
                                <div className="flex items-center mb-6">
                                    <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">{item.category}</button>
                                    <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{item.date}</p>
                                </div>
                                <h3 className="text-[#232E52] font-bold text-2xl md:text-3xl mb-3">
                                    <NavLink to={`/article/${index + 3}`}>{item.title}</NavLink>
                                </h3>
                                <p className="text-[#232E52] text-base md:text-lg md:mb-0 mb-10">{item.description}</p>
                            </div>
                            <div>
                                <img className="w-full" src={item.imgSrc} alt="Article" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="md:pb-[100px] pb-16">
                <div className="max-w-[970px] mx-auto px-5">
                    <h2 className="text-[#232E52] font-bold text-4xl pb-5 border-b mb-10">Around the web</h2>
                    {data.slice(6, 9).map((item, index) => (
                        <div key={index} className="md:flex items-center justify-between pb-12 border-b mb-6">
                            <div>
                                <div className="flex items-center mb-6">
                                    <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">{item.category}</button>
                                    <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{item.date}</p>
                                </div>
                                <h3 className="text-[#232E52] font-bold text-2xl md:text-3xl mb-3">
                                    <NavLink to={`/article/${index + 6}`}>{item.title}</NavLink>
                                </h3>
                                <p className="text-[#232E52] text-base md:text-lg md:mb-0 mb-10">{item.description}</p>
                            </div>
                            <div>
                                <img className="w-full" src={item.imgSrc} alt="Article" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
