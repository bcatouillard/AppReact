import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

function AppRouter(){
    return(
        <Router>
        <nav className="navbar navbar-expand-sm bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Accueil</Link></li>
                    <li className="nav-item"><Link to="/films" className="nav-link">Films</Link></li>
                </ul>
        </nav>

            <Route path="/"  exact component={Accueil} />
            <Route path="/films" component={Films} />
        </Router>
    );
}

function Accueil(){
    return (
        <div>
        <h1>Accueil</h1>
        </div>
    );
}

function Films(){
    return(
        <div>
        <h1>Liste des films : </h1>
        </div>
    );
}

function App(){
    return(
        AppRouter()
    );
}

export default AppRouter;

ReactDOM.render(<App />, document.getElementById('root')
);