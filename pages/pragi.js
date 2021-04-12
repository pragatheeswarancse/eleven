import React from 'react'
import Navbar from '../component/navbar'
import Pragi from '../json/pragi.json'

export default function Csk() {
return(
<div className="pt-24">
    <Navbar />
    <p className="text-center font-bold lg:text-3xl">Chennai Super Kings</p>
    <p className="text-center pt-7 xl:px-96 lg:mx-56">Players</p>
    <div className="pt-8 lg:px-56">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Pragi.map (pragiPlayer =>(
            <div className="rounded border-2 hover:border-green-700">
              <div className="flex py-12 px-12">
               <div className="hidden lg:block">
               </div>
               
                <div className="lg:pl-10">
                <img src={pragiPlayer.status} className="w-10"/>
                    <h1 className="pt-5 font-bold">{pragiPlayer.player}</h1>
                    <p className="lg:pr-24">{pragiPlayer.team}</p>
                    
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
</div>
)
}