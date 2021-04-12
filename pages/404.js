import React from 'react'
import Link from 'next/link'
import Navbar from '../component/navbar'

export default function ErrorPage() {
return (
    <div>
        <Navbar />
    

<div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
    <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20">
            <img src="./img/ipl.png" className="w-16"/>
        <span className="fontColor  text-xl px-3 py-2 rounded-md text-sm font-bold">Potter<span
            className="text-blue-700">Eleven</span></span>
            </div>
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
                <h1 className="uppercase text-3xl lg:text-5xl fontColor  text-xl px-3 py-2 rounded-md text-sm font-bold mb-10">You seem to be lost!</h1>
                <p className="font-medium">The page you're looking for isn't available.</p>
                <p className="font-medium">Try searching again or use the Go Back button below.</p>
            </div>
            <div className="mb-20 md:mb-0">
                <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-600 hover:text-blue-700 font-medium border-none bg-blue-100 px-6 py-2 rounded">
                <Link href="/" className="mdi mdi-arrow-left mr-2">Go Home </Link></button>
            </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
            <img src="./error.gif" />
        </div>
    </div>
    <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
    <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
</div>
</div>
)}