import React, {useState} from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Navbar() {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="flex flex-wrap  justify-between px-2 py-1 navbar-expand-lg ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
            <a
              className="text-sm flex  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
             <img src="./img/ipl.png" className="w-16"/>
            </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border  border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_20" data-name="Rectangle 20" width="28" height="29" transform="translate(875 1280)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
  </defs>
  <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-875 -1280)" clip-path="url(#clip-path)">
    <g id="menu" transform="translate(875 1280.5)">
      <g id="Menu-2" data-name="Menu">
        <path id="Path_10" data-name="Path 10" d="M.875,6.125h26.25a.875.875,0,0,0,0-1.75H.875a.875.875,0,0,0,0,1.75Z"/>
        <path id="Path_11" data-name="Path 11" d="M27.125,13.125H.875a.875.875,0,1,0,0,1.75h26.25a.875.875,0,0,0,0-1.75Z"/>
        <path id="Path_12" data-name="Path 12" d="M27.125,21.875H.875a.875.875,0,0,0,0,1.75h26.25a.875.875,0,0,0,0-1.75Z"/>
      </g>
    </g>
  </g>
</svg>

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className={router.pathname == "/" ? "text-blue-500" : "text-black"}>
                <Link href="/">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:text-blue-500"
                >
                  <p className="ml-2">Home</p>
                </a>
                </Link>
              </li>
              <li className={router.pathname == "/team" ? "text-blue-500" : "text-black"}>
              <Link href="/team">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:text-blue-500"
                >
                  <p className="ml-2">Team</p>
                </a>
                </Link>
              </li>
              <li className={router.pathname == "/fixture" ? "text-green-500" : "text-black"}>
              <Link href="/fixture">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:text-blue-500"
                  
                >
                 <p className="ml-2">Fixture</p>
                </a>
                </Link>
              </li>
              <li className={router.pathname == "/stats" ? "text-green-500" : "text-black"}>
              <Link href="/stats">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:text-blue-500"
                >
                 <p className="ml-2">Stats</p>
                </a>
                </Link>
              </li>
              <li className={router.pathname == "/gaming" ? "text-green-500" : "text-black"}>
              <Link href="/gaming">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:text-blue-500"
                >
                 <p className="ml-2">Result</p>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}