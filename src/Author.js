import React, { Component } from "react";
import vanPic from './assets/van-pic.png';

export default class Author extends Component {
    render() {
        return(
            <div>
                <img src={ vanPic }/>
                <h4>Vanessa Stevenson</h4>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <button>Share Recipe</button>
                <hr></hr>
            </div>

           
        );
    }
}