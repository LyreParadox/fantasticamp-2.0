import "./App.css";
// Note that these imports are importing named modules, and with no ./ or folder listed they're using WebPack (which is a module bundler) behind-the-scenes to go to the node.modules folder and just find the module there in react.js - Becasue of this functionality, you have to make it very clear to webpack when you're NOT asking it to find stuff for you, but specifying the folder you want.
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponent";
import "./App.css";
import { CAMPSITES, Campsites } from "./shared/campsites"; // imports the campsites array, after deleting it from DirectoryComponent
//the IMPORT & EXPORT keywords allow files to share data with each other. This shared data can be objects, primitives, and functions (including classes(which are technically syntactic sugar for functions)). There are two kinds of EXPORTS: named & default. There can only be one default export (it's kinda in the name), while a file can have many named exports.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} />
      </div>
    );
  }
}

export default App;
//change this default export into a named export:
// export { App };
// this function(class) is the default export for this entire file. Because this file contains at least one export, it is considered a MODULE. In contrast, index.js is not a module - it has no export.
