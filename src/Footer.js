import React, { Component } from "react";
import footerLogo from './assets/small-logo.png';
export default class Footer extends Component {
    render(){
        return(
            <div>
                <img src={ footerLogo }/>
                <p>Delicious &copy; 2013 &bull; All Rights Reserved.</p>
        <p>Proudly published with Ghost</p>
            </div>
        );
    }
}