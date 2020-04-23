import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import memeService from './services/memeService';
import Navbar from './cmps/Navbar';
import Home from './pages/Home';
import MemeDetails from './pages/MemeDetails';
import MemeApp from './pages/MemeApp';

const history = createBrowserHistory();

function App() {

  const [memes, setMemes] = useState([]);

  useEffect(() => {
    (async function () {
      const memesToRender = await memeService.getMemes();
      setMemes(memesToRender);
    })()
  }, []);

  return (
    <Router history={history}>
      <div>
        <Navbar/>
        <Switch>
          <Route exact component={Home} path="/meme-generator-react" />
          <Route exact component={Home} path="/" />
          <Route exact render={() => <MemeApp memes={memes}/>} path="/meme" />
          <Route exact render={() => <MemeDetails memes={memes} />} path="/meme/:id/edit" />
          <Route exact component={MemeDetails} path="/meme/:id" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
