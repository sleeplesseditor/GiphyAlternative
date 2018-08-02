import React, { Component } from 'react';
import { Link} from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { uploadWidget } from '../utils/WidgetHelper';

import '../App.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            GiphyAlternative
                        </Link>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">All Gifs</Link>
                            </li>
                            <li>
                                <Link to="/">Create Gif</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                {
                                    (isLoggedIn()) ? <button type="button" className="btn btn-raised btn-sm btn-default">Upload Gif</button> : ''
                                }
                            </li>
                            <li>
                                {
                                    (isLoggedIn()) ?
                                        (
                                            <button type="button" className="btn btn-raised btn-sm btn-danger" onClick={() => logout()}>Log Out</button>
                                        ) : (
                                            <button type="button" className="btn btn-raised btn-sm btn-default" onClick={() => login()}>Log In</button>
                                        )
                                }
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
        )
    }
}

export default Nav;