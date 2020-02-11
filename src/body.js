import React, { Component } from  "react";
import pizza from './assets/choco-pizza.png';

export default class Body extends Component {
    render() {
        return (
            <div> 
                 <h1> Chocolate Pizza</h1> 
                 <h3>Posted on January 2020 /Desserts</h3>
            
                 <img src= { pizza } />
                 <p> 
                 For the fig-swird: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely. 
                 </p>
                 <p>
                 ice acream: In a small over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is jusr barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.
                 </p>
                 <p>
                 Using an ice acream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before
                 </p>
            </div>

        )
    }
}