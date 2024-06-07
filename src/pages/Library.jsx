import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import book1 from '../img/books/1.png';
import book2 from '../img/books/2.png';
import book3 from '../img/books/3.png';
import book4 from '../img/books/4.png';
import book5 from '../img/books/5.png';
import book6 from '../img/books/6.png';
import book7 from '../img/books/7.png';
import book8 from '../img/books/8.png';
import book9 from '../img/books/9.png';
import book10 from '../img/books/10.png';
import book11 from '../img/books/11.png';
import book12 from '../img/books/12.png';
import book13 from '../img/books/13.png';
import book14 from '../img/books/14.png';
import book15 from '../img/books/15.png';
import book16 from '../img/books/16.png';
import book17 from '../img/books/17.png';
import book18 from '../img/books/18.png';

const booksData = [
  { year: 2020, books: [book1, book2, book3, book4] },
  { year: 2019, books: [book5, book6, book7, book8] },
  { year: 2018, books: [book9, book10, book11] },
  { year: 2017, books: [book12, book13, book14, book15, book16, book17, book18] },
];

export default function Library() {
  return (
    <div>
      <Header />

      <div className="max-w-[1420px] lg:rounded-b-xl mx-auto bg-[#232E52]">
        <section className="pt-10 md:pt-[86.5px] pb-36">
          <div className="max-w-[970px] mx-auto px-5">
            <p className="text-white font-semibold text-base uppercase">👋 HELLO</p>
            <h1 className="text-white font-bold md:text-[52px] text-4xl md:leading-[62.4px] mb-5">
              Insights about my personal and work life, and the in-betweens
            </h1>
            <p className="text-white/80 md:text-3xl text-xl">
              When products are made for you, you never realise how their design can be exclusionary towards people of color.
            </p>
          </div>
        </section>
      </div>

      <section className="pt-[100px] pb-10">
        <div className="max-w-[970px] px-5 mx-auto">
          <h2 className="text-[#232E52] font-bold text-4xl mb-5">Books I’ve read</h2>
          {booksData.map((data, index) => (
            <div className="mb-20" key={index}>
              <p className="text-[#232E52] font-semibold text-base mb-10">{data.year}</p>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-10 effect_container">
                {data.books.map((book, idx) => (
                  <a className="hover_effect" href="#" key={idx}>
                    <img className="max-w-[212px] w-full mx-auto" src={book} alt="book" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
