import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import data from '../data';

export default function Category() {
    return (
        <div>
            <Header />
            <div className="max-w-[1420px] md:rounded-b-xl mx-auto bg-[#232E52]">
                <div className="overlay"></div>
                <section className="pt-10 md:pt-[86.5px] pb-36">
                    <div className="max-w-[970px] mx-auto px-5">
                        <button className="text-white font-semibold text-sm uppercase py-2 px-3 border rounded-md mb-7">Design tools</button>
                        <h1 className="text-white font-bold md:text-[52px] text-4xl md:leading-[62.4px]">Insights about my personal and work life, and the in-betweens</h1>
                    </div>
                </section>
            </div>

            <section className="md:pt-[100px] pt-16 pb-7 md:pb-[70px]">
                <div className="max-w-[970px] mx-auto px-5 text-center">
                    <h2 className="text-left text-[#232E52] font-bold text-4xl pb-5 border-b mb-10">Design Tools</h2>
                    {data.slice(0, 6).map((card, index) => (
                        <div key={index} id="card" className="md:flex items-center text-left justify-between pb-12 border-b mb-6">
                            <div>
                                <div className="flex items-center mb-6">
                                    <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">
                                        {card.category}
                                    </button>
                                    <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{card.date}</p>
                                </div>
                                <h3 className="text-[#232E52] font-bold text-2xl md:text-3xl mb-3">
                                    <Link to={`/article/${index}`}>{card.title}</Link>
                                </h3>
                                <p className="text-[#232E52] text-base md:text-lg md:mb-0 mb-10">
                                    {card.description.split('<br />').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br className="md:block hidden" />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                            <div>
                                <img className="w-full" src={card.imgSrc} alt="picture" />
                            </div>
                        </div>
                    ))}
                    <button className="text-[#232E52] font-medium text-sm px-5 py-2.5 bg-[#EBF2FE] rounded-lg">More articles</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
