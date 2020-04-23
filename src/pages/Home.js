import React from 'react';
import { Link } from 'react-router-dom';
import welcomePic from '../assets/images/meme-welcome.jpeg'

export default function Home(props) {

    return (
        <div className="container home">
            <img
                src={welcomePic}
                alt='Welcome meme'
                className="welcome-pic"
            />
            <h1 className="card-text">Welcome to <br></br>Meme Genarator</h1>
            <Link to="/meme" className="btn btn-primary">Start creating your memes</Link>
        </div>
    )
}
