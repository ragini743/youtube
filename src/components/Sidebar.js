import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
const Sidebar = () =>{
    const isMenuOpen = useSelector((store) =>store.app.isMenuOpen)

    // early return pattern
    if(!isMenuOpen) return null ;

    return( 
        <div className="m-1 p-2.5 border-r-2 md:col-span-2">
            <h1 className="text-justify bold px-4 font-bold"><Link to="/">Home</Link></h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
            <h1 className="text-justify bold px-4 font-bold">Shorts</h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
            <h1 className="text-justify bold px-4 font-bold">Subscriptions</h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
            <h1 className="text-justify bold px-4 font-bold">Your videos</h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
            <h1 className="text-justify bold px-4 font-bold">Watch Later</h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
            <h1 className="text-justify bold px-4 font-bold">History</h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
            <h1 className="text-justify bold px-4 font-bold">Library</h1>
            <ul>
                <li className="px-4">music</li>
                <li className="px-4">sport</li>
                <li className="px-4">gaming</li>
                <li className="px-4">movies</li>
                <li className="px-4">stories</li>
            </ul>
        </div>
    )
}
export default Sidebar