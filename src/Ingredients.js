import React, { Component } from "react";
import list from './assets/list-bg.png';


export default class Background extends Component {
    render() {
        return (
            <div>
                <img src= { list }/>
            </div>
        );
    }
}
export  class Ingredients extends Component  {
    render () {
        return (
            <div>
                <ul className={'ingredients-list'}>
                    <li>1 1/2 cups milk </li>
                    <li>1/2 cup cascarpone</li>
                    <li>1/2 tsp pink salt</li>
                    <li>1 lb Black Mission Figs</li>
                    <li>1/2 cup brown sugar </li>
                    <li>2-4 tbs water</li>
                    <li> 1 1/2 cups heavy cream</li>
                    <li>4/3 granulated sugar</li>
                    <li> 2 egg yolks</li>
                    <li>1 lemon, juiced</li>
                    <li>2 tbsp butter</li>
                    <li> 1 cup hiney roasted pecans, roughly chopped</li>
                </ul>
                <hr></hr>
            </div>
            
        );
    }
}