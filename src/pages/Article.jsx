import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import data from '../data';

export default function Article() {
  const { id } = useParams();
  const article = data[parseInt(id, 10)]; // Ensure the id is an integer

  if (!article) {
    return (
      <div>
        <Header />
        <div className="max-w-[970px] mx-auto px-5 flex gap-20 py-20">
          <h1 className="text-[#232E52] font-bold text-4xl">Article Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-[970px] mx-auto px-5 flex gap-20 py-20">
        <div>
          <h1 className="text-[#232E52] font-bold text-4xl">{article.title}</h1>
          <div className="flex items-center my-4">
            <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">{article.category}</button>
            <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{article.date}</p>
          </div>
          <p className="text-[#232E52] text-base md:text-lg">{article.description}</p>
        </div>
        <div>
          <img className="w-full mt-6" src={article.imgSrc} alt="Article" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
