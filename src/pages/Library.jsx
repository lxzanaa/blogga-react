import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import data from '../data';

export default function Library() {
  const { id } = useParams();
  const card = data.find(item => item.id === parseInt(id, 10));

  if (!card) return <div>Loading...</div>;

  return (
    <div>
      <Header />

      <div className="max-w-[1420px] lg:rounded-b-xl mx-auto bg-[#232E52]">
        <section className="pt-10 md:pt-[86.5px] pb-36">
          <div className="max-w-[970px] mx-auto px-5">
            <h2 className="text-white font-semibold text-base uppercase">👋 HELLO</h2>
            <h1 className="text-white font-bold md:text-[52px] text-4xl md:leading-[62.4px] mb-5">
              {card.title}
            </h1>
            <p className="text-white/80 md:text-3xl text-xl">
              {card.description}
            </p>
          </div>
        </section>
      </div>

      <section className="pt-[100px] pb-10">
        <div className="max-w-[970px] px-5 mx-auto">
          <h2 className="text-[#232E52] font-bold text-4xl mb-5">Books I’ve read</h2>
          <div className="flex items-center mb-6">
            <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">{card.category}</button>
            <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{card.date}</p>
          </div>
          <img className="w-full" src={card.img} alt="Card" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
