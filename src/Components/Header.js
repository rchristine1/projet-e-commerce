import React from 'react';
import { Heart } from 'react-bootstrap-icons';
import { Handbag } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

let iconStyles = { fontSize: "1.85em" };

export default function Header(props) {

  return (
    <header className="App-header">
      <div className="container m-0 p-0">
        <div className="row">
          <div className="col-md-3">
            Depuis 2022
          </div>
          <div className="App-header-mainbar col-md-6">
            <h1>Rose Blue Purple <img src="/RBP3.png" alt="Rose" width="75" height="75" />

            </h1>
          </div>
          <div className="col-md-3">
            <div className="container m-0 p-0">
              <div className="row">
                <div className="col-md-12 text-end">
                  <Search className="m-2 text-secondary" style={iconStyles} />
                  {props.isLogged === true ?
                    (<Person className="m-2 text-primary" style={iconStyles} aria-label="Login"
                      onClick={event => props.setCurrentPage({ "login": "null" })}
                    />) :
                    (<Person className="m-2" id="iconLogin" style={iconStyles} aria-label="Login"
                      onClick={event => props.setCurrentPage({ "login": "null" })}
                    />)
                  }
                  <Handbag className="m-2 text-secondary" style={iconStyles} />
                  <Heart className="m-2 text-secondary" style={iconStyles} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App-header-mainbar">
        <div className='container'>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h2 className="fontreenie text-align">Laissez-vous inspirer
                <span>
                  <img src="/vaguerbp.png" alt="vaguerbp" width="50" height="50" />
                </span>
                au gré des couleurs
              </h2>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </header>
  )
}