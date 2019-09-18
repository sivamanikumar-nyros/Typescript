import React from "react";
import 'rc-slider/assets/index.css';
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Navbar } from 'reactstrap';
import $ from "jquery";
import Slider, { createSliderWithTooltip } from 'rc-slider';

interface State{
	
}

interface Props{

}


class Header extends React.Component<Props, State> {
	constructor(props: Props) {
    super(props);
    this.state = {
    	
    }
}
	

  render() {
   
   

    return (
      <div className="container-fluid " id="room">
      <nav className="navbar navbar-expand-lg fixed-top">
      <a className="navbar-brand logo-img" href="#"></a>
      <Button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </Button>
      <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Pricing</a>
      </li>
      </ul>
      <Button className="nextbtn">
      Start Your Project
      </Button>
      <Button className="nextbtn">
      Login
      </Button>
      </div>
      </nav>
      </div>
    );
  }
}

export default Header;
