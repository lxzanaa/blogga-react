import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import book1 from '../img/books/1.png'
import book2 from '../img/books/2.png'
import book3 from '../img/books/3.png'
import book4 from '../img/books/4.png'
import book5 from '../img/books/5.png'
import book6 from '../img/books/6.png'
import book7 from '../img/books/7.png'
import book8 from '../img/books/8.png'
import book9 from '../img/books/9.png'
import book10 from '../img/books/10.png'
import book11 from '../img/books/11.png'
import book12 from '../img/books/12.png'
import book13 from '../img/books/13.png'
import book14 from '../img/books/14.png'
import book15 from '../img/books/15.png'
import book16 from '../img/books/16.png'
import book17 from '../img/books/17.png'
import book18 from '../img/books/18.png'



export default function Library() {


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
