import Head from 'next/head'
import TeamName from '../json/team.json'
import Navbar from '../component/navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="font-bold text-3xl text-center">Team</div>
      <div className="pt-8 lg:px-56">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TeamName.map (iplTeam =>(
          <a href={iplTeam.id}>
            <div className="rounded border-2 hover:border-green-700">
              <div className="flex py-12 px-12">
               <div className="hidden lg:block">
               </div>
                <div className="lg:pl-10">
                <img src="./img/ipl.png" className="w-16"/>
                      <div>
                    <h1 className="pt-5 font-bold">{iplTeam.team}</h1>
                    <img src="./img/trophy.svg" className="w-10"/>
                    <p className="lg:pr-24">{iplTeam.trophy}</p>
                    </div>
                </div>
            </div>
            </div>
            </a>
            ))}
            </div>
            </div>
        
          <div>
          <a className="border flex flex-row"></a>
          </div>
        
    </div>
  )
}
