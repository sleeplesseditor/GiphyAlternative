import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { uploadWidget } from '../utils/WidgetHelper';
import '../App.css';
import Create from './Create';

const cloudKey = require('../config/keys').cloudName;
const uploadPresetKey = require('../config/keys').uploadPreset;

class Nav extends Component {
    uploadGif() {
        let cloudinarySettings = {
            cloud_name: `${cloudKey}`,
            upload_preset: `${uploadPresetKey}`,
            tags: ['cliphy'],
            sources: ['local', 'url', 'google_photos', 'facebook'],
            client_allowed_formats: ['gif'],
            keep_widget_open: true,
            theme: 'minimal'
        }

        uploadWidget(cloudinarySettings, (res) => {
            console.log(res);
        });
    }

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
                                <Link to="/create">Create Gif</Link>
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
                                            <button className="btn btn-raised btn-sm btn-default" onClick={() => login()}>Log In</button>
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