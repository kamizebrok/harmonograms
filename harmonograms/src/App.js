/* npm start */
/*npx json-server --watch data/db.json --port 8000*/
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;
import React, { useState } from 'react';
import HomeStats from './HomeStats';
import SubjectDetails from './SubjectDetails';

function App() {

  const [no, setNo] = useState('1')


  return (
    <Router>
      <div className="App">
        <Navbar setNo={setNo}/>
        <main>
          {}
        </main>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home no={no}/>
              <HomeStats />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/subjects/:id">
              <SubjectDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;