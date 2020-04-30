import React, { Component } from "react";
import fbIcon from './assets/fb-icon.png';
import tWIcon from './assets/twit-icon.png';
import gPIcon from './assets/gp-icon.png';
import instaIcon from './assets/insta-icon.png';
import flicIcon from './assets/flic-icon.png';
import pintIcon from './assets/pint-icon.png';
import rssIcon from './assets/rss-icon.png';
import mailIcon from './assets/mail-icon.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img src = { this.props.logo} />
                <img src = { this.props.otherLogo} />
            
                <ul>
                    <li><img src= { fbIcon } /> </li>
                    <li><img src = { tWIcon } /> </li>
                    <li><img src = { gPIcon } /> </li>
                    <li><img src = { instaIcon } /> </li>
                    <li><img src = { flicIcon } /> </li>
                    <li><img src = { pintIcon } /> </li>
                    <li><img src = { rssIcon } /> </li>
                    <li><img src = { mailIcon } /> </li>
                </ul> 
            </div>
            
        );
    }
}