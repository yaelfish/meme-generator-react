import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact activeClassName="active-link" className="navbar-brand" to="/">Meme Generator</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-link active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-link active" className="nav-link" to="/meme">Memes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
