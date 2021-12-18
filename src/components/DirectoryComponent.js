import React, { Component } from "react";
//basic structure for a react component:
class Directory extends Component {
  constructor(props) {
    super(props); //for inheriting from the parent class
    this.state = {
      //this sets the state and must contain an object. you can create an empty object and come back later to fill it .
      //storing data for different campsites. becasue each campsite has different info associated with it, an array of objects is the best way to represent that.
    };
  }
  //   below you'll see a pair of curlies - this is how javascript is used in React, inside there is a variable called "directory"
  //   if you give react an array of elements to render, it will just pull out the elements and render them, it just knows what to do.
  //  the array we want to use is in the state above, so we can use this.state.campsite to call that array, then use .map() to iterate through the array. "campsite" is the parameter name for the current item, and the return here is only a return for the arrow function.
  render() {
    const directory = this.state.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col">
          <img src={campsite.image} alt={campsite.name} />
          <h2>{campsite.name}</h2>
          <p>{campsite.description}</p>
        </div>
      );
      //   this map method, will go through the this.state.campsite array, and create a new array that contains this same set of JSX elements, but using a different campsite for each item. That whole array will be rendered inside the Bootstrap row, below where we used the {directory}.
      // To render an array of elements like this, React wants you to add a unique key attribute to the topmost element in each array item. That helps React keep track of this list and render items to it more efficiently - that's where the unique ID in each object can be useful.
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
