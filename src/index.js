import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Accueil <span class="sr-only"></span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Films</a></li>
                </ul>
            </div>
        </nav>
    )
}

function App(){
    return(
        Navbar()
    );
}

ReactDOM.render(<App />, document.getElementById('root')
);
