import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
//basic structure for a react component:
class Directory extends Component {
  constructor(props) {
    super(props); //for inheriting from the parent class
    this.state = {
      selectedCampsite: null, //will keep track of whatever campsite was last selected by the user.

      //this sets the state and must contain an object. you can create an empty object and come back later to fill it .
      //storing data for different campsites. because each campsite has different info associated with it, an array of objects is the best way to represent that. Later we deleted the array of objects that was here and put it in its own file ./src/shared/campsites.js
    };
  }

  onCampsiteSelect(campsite) {
    //this will change the value of the selected campsites property of "state". Will update the campsite property to the campsite object that's passed into this method. In React, you never want to update the state directly:
    // this.state.selectedCampsite = campsite; DON'T DO THIS, never use the assignment operator (=) to change the state. You can only use it to initially set the state in the constructor. Use setState() so that React can correctly update the DOM, using = will break it.
    this.setState({ selectedCampsite: campsite });
  }

  //   below you'll see a pair of curlies - this is how javascript is used in React, inside there is a variable called "directory"
  //   if you give react an array of elements to render, it will just pull out the elements and render them, it just knows what to do.
  //  the array we want to use is in the state above, so we can use this.state.campsite to call that array, then use .map() to iterate through the array. "campsite" is the parameter name for the current item, and the return here is only a return for the arrow function.

  renderSelectedCampsite(campsite) {
    if (campsite) {
      //first, check to see if the campsite has an object in it.
      return (
        //then, return a card that includes the campsite image, name , and description
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    //this will return if the campsite is null, or undefined or otherwise falsy
    return <div />;
  }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        //now, whenever someone clicks on a card, that campsite gets set as the selected campsite in the local state:
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            {" "}
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
      //   this map method, will go through the this.state.campsite array, and create a new array that contains this same set of JSX elements, but using a different campsite for each item. That whole array will be rendered inside the Bootstrap row, below where we used the {directory}.
      // To render an array of elements like this, React wants you to add a unique key attribute to the topmost element in each array item. That helps React keep track of this list and render items to it more efficiently - that's where the unique ID in each object can be useful.
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampsite)}
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
