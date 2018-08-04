import { Component } from 'react'
import { setAccessToken, setIdToken } from '../utils/AuthService';

class Callback extends Component {
    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href="/";
    }
    
    render() {
        return null;
    }
}

export default Callback;