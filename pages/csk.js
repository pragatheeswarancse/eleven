import React from 'react'
import Navbar from '../component/navbar'
import Chennai from '../json/csk.json'

export default function Csk() {
return(
<div className="pt-24">
    <Navbar />
    <p className="text-center font-bold lg:text-3xl">Chennai Super Kings</p>
    <p className="text-center pt-7 xl:px-96 lg:mx-56">Players</p>
    <div className="pt-8 lg:px-56">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Chennai.map (CskPlayer =>(
            <div className="rounded border-2 hover:border-green-700">
              <div className="flex py-12 px-12">
               <div className="hidden lg:block">
               </div>
               
                <div className="lg:pl-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path id="Path_13" data-name="Path 13"
                            d="M1866,3333a10,10,0,1,0,10,10A10,10,0,0,0,1866,3333Zm-4,15.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,1862,3348.5Zm1.5-9.5a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,1863.5,3339Zm6.5,9.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,1870,3348.5Z"
                            transform="translate(-1856 -3333)" fill="#ff8329" />
                    </svg>
                    <h1 className="pt-5 font-bold">{CskPlayer.player}</h1>
                    <p className="lg:pr-24">{CskPlayer.status}</p>
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
</div>
)
}