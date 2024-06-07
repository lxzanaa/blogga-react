import React from 'react'
import img from '../img/home/Subtract.svg'

export default function Footer() {
    return (
        <div>
            <footer className="md:pb-[100px] pb-14">
                <div className="max-w-[970px] py-20 px-5 mx-auto relative bg-[#232E52] text-center rounded-xl">
                    <img className="absolute left-0 top-0" src={img} alt="Decoration" />
                    <h2 className="text-white font-bold text-2xl md:text-3xl mb-2 md:mb-3">Subscribe to my blog.</h2>
                    <p className="text-[#EDFCF2] text-base md:text-lg mb-10">I post fresh content every week.</p>
                    <form className="flex flex-col md:flex-row items-center max-w-[400px] w-full mx-auto ">
                        <input
                            className="w-full py-4 px-5  md:rounded-s-lg bg-white md:mb-0 mb-4 text-[#11111899] placeholder:text-[#11111899] outline-none border-none"
                            placeholder="Email address" required type="email" />
                        <button className="w-full md:w-auto py-4 px-8  md:rounded-e-lg bg-[#8CEEAD] uppercase text-[#232E52] font-semibold">SUBSCRIBE</button>
                    </form>
                </div>
            </footer>

            <div className="max-w-[970px] w-full mx-auto">
                <p className="text-[#232E52] font-medium text-xs text-center mb-10 pt-10 border-t">Copyright 2021 - Elikem Daniels</p>
            </div>
        </div>
    )
}
