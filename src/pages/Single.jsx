import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import bg from '../img/single/bg.png';
import build from '../img/single/1.png';
import btn from '../img/single/btn.svg';
import data from '../data';

export default function Single() {
  return (
    <div>
      <Header />
      <div className="max-w-[1420px] lg:rounded-b-xl mx-auto bg-[#232E52]">
        <section className="pt-10 md:pt-[86.5px] pb-36">
          <div className="max-w-[970px] mx-auto px-5">
            <div className="flex items-center">
              <Link className="mr-[30px]" to="/">
                <img className="flex -translate-y-[14px]" src={btn} alt="back button" />
              </Link>
              <button className="text-white font-semibold text-sm uppercase py-2 px-3 border rounded-s-md mb-7">Tutorials</button>
              <button className="text-[#232E52] bg-white font-semibold text-sm uppercase py-2 px-3 border rounded-e-md mb-7">August 13, 2021</button>
            </div>
            <h1 className="text-white font-bold md:text-[52px] text-4xl md:leading-[62.4px]">
              Insights about my personal and work life, and the in-betweens
            </h1>
          </div>
        </section>
      </div>

      <div className="bg-fixed bg-cover h-[400px] lg:h-screen max-w-[1420px] mx-auto" style={{ backgroundImage: `url(${bg})` }}></div>

      <section className="md:pt-[100px] py-10 md:pb-[70px]">
        <div className="max-w-[970px] px-5 mx-auto md:pb-[120px] pb-10 border-b">
          <p className="max-w-[680px] mx-auto mb-10">
            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
            Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
            forswear forever. <br /><br />
            Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely
            the symptom of a worse problem to take into consideration. <br /><br />
            The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint
            you may slap on your face to impress the new boss is your business. But what about your daily bread?
          </p>
          <img className="max-w-[780px] w-full mx-auto" src={build} alt="build" />
          <span className="text-[#232E52] text-xs py-3.5 px-5 max-w-[780px] w-full mx-auto bg-[#EBF2FE] flex rounded-b-xl uppercase mb-10">
            Image caption or credit
          </span>
          <p className="max-w-[680px] mx-auto mb-10">
            The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint
            you may slap on your face to impress the new boss is your business. But what about your daily bread? Not
            so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the
            symptom of a worse problem to take into consideration. <br /><br />
            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
            Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
            forswear forever.
          </p>
          <div className="shadow_club max-w-[780px] mx-auto mb-10 text-[#232E52] text-xl md:text-2xl p-4 md:p-12 rounded-xl bg-[#EBF2FE]">
            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
            Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
            forswear forever.
          </div>
          <p className="max-w-[680px] mx-auto">
            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
            Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
            forswear forever. <br /><br />
            The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint
            you may slap on your face to impress the new boss is your business. But what about your daily bread? Not
            so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the
            symptom of a worse problem to take into consideration.<br /><br />
            Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely
            the symptom of a worse problem to take into consideration.<br /><br />
            Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
            Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
            forswear forever.
          </p>
        </div>
      </section>

      <section className="md:pt-[100px] py-10 md:pb-[70px]">
        <div className="max-w-[970px] mx-auto px-5">
          <h2 className="text-[#232E52] font-bold text-4xl mb-10">Other interesting posts</h2>

          {data.slice(0, 3).map((card, index) => (
            <div key={index} id="card" className="md:flex items-center justify-between pb-12 border-b mb-6">
              <div>
                <div className="flex items-center mb-6">
                  <button className="py-2 px-3 text-[#232E52] font-semibold text-sm uppercase bg-[#EBF2FE]">
                    {card.category}
                  </button>
                  <p className="py-2 px-3 text-[#232E52] font-normal text-sm uppercase">{card.data}</p>
                </div>
                <h3 className="text-[#232E52] font-bold text-2xl md:text-3xl mb-3">
                  <Link to="#">{card.title}</Link>
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
