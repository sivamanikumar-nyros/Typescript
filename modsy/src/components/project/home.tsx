import React from "react";
import 'rc-slider/assets/index.css';
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Navbar } from 'reactstrap';
import $ from "jquery";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface State{
	
}

interface Props{

}


class Home extends React.Component<Props, State> {
	constructor(props: Props) {
    super(props);
    this.state = {
    	
    }
}
	

  render() {
   
   

    return (
      <div className="homepage" >
        <div className="row jumbotron first-block">
          
          <div className="col-lg-5 home-left-heading">
            <h1 className="homepage-heading">
              Designs You Don’t Have To Imagine 
            </h1>
            <div className="home-header-txt">
            <p className="home-left-paragraph">See your exact room, expertly</p><p className="home-left-paragraph"> designed in 3D, with 
            furniture</p> <p className="home-left-paragraph">from brands both well-known</p><p className="home-left-paragraph"> and unique, that you can buy</p>
            <p className="home-left-paragraph">on the spot.</p></div><br/>
            <div className="container footer home-btn">
                <Link to="/room"><button className="projectbtn">Start Your Project</button></Link>
              </div>
          </div>
          <div className="col-lg-7 Home-headerimg">
           <img src={"/images/Homebackground.png"} />
          </div>

        </div>
        <div className="jumbotron">
          <h2 className="section-header">
            HOW IT WORKS
          </h2>

          <div className="row">
            
            <div className="col-lg-4 element-heading"><img src={"/images/show-us-your-space.svg"} /></div>
            <div className="col-lg-4"><img src={"/images/about-your-project.svg"} /></div>
            <div className="col-lg-4"><img src={"/images/get-custom-designs.svg"} /></div>
          </div>
        
          <div className="row">
            
            <div className="col-lg-4 element-heading"><span className="homepage-middle-heading">1</span> Show Us Your Space<p>Take a few photos and measurements of your</p> 
            <p>space (clutter and all).</p></div>
            <div className="col-lg-4"><span className="homepage-middle-heading">2</span> Tell Us About Your Project
            <p>Take our Style Quiz and tell us more about your </p><p>project needs, existing furniture, and budget.</p></div>
            <div className="col-lg-4"><span className="homepage-middle-heading">3</span> Get Custom Design Plans
            <p>Modsy Designers create 2 custom design plans of </p><p>your room in 3D.</p></div>
          </div>
          <br/>
          <div className="row">

            <div className="col-lg-2"></div>
            <div className="col-lg-4"><img src={"/images/revise-your-designs.svg"} /></div>
            <div className="col-lg-4"><img src={"/images/shop-with-confidence.svg"} /></div>
            <div className="col-lg-2"></div>

          </div>
          <div className="row">

            <div className="col-lg-2"></div>
            <div className="col-lg-4 element-heading"><span className="homepage-middle-heading">4</span> Let's Revise Your Designs<p>Work with our design team or our 3D Style Editor </p> 
            <p>to fine tune your designs until they’re just right.</p></div>
            <div className="col-lg-4"><span className="homepage-middle-heading">5</span> Shop With Confidence
            <p>Shop directly from your design plans in one easy  </p><p>checkout and earn exclusive discounts.</p></div>
            <div className="col-lg-2"></div>

          </div>
          <div className="background-image">
            <div className="row">
              <div className="col-lg-4">
                <h1 className="design-stories-heading">
                  You’ll Be Happy You’re Home
                </h1>
                <div className="container footer home-btn">
                  <Link to="/room"><button className="projectbtn">Start Your Project</button></Link>
                </div>
              </div>
              <div className="col-lg-8 background-img"><img src={"/images/background-image.jpg"} height="475px" /></div>
            </div>
          </div>
        </div>
        <div className="home-page-footer container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <img src={"/images/footer-logo.svg"} />
            </div>
            <div className="col-lg-2">
              <h6>MODSY</h6>
              <p className="footer-links">Style Quiz</p>
              <p className="footer-links">Blog</p>
              <p className="footer-links">Refer a Friend</p>
              <p className="footer-links">Gift Cards</p>
            </div>
            <div className="col-lg-2">
              <h6>ABOUT</h6>
              <p className="footer-links">Careers</p>
              <p className="footer-links">Our Story</p>
            </div>
            <div className="col-lg-2">
              <h6>SUPPORT</h6>
              <p className="footer-links">FAQs</p>
              <p className="footer-links">Contact Us</p>
              <p className="footer-links">Terms Of Service</p>
              <p className="footer-links">Privacy</p>
            </div>
            <div className="col-lg-2">
              <h6>FOLLOW US</h6>
              <p className="footer-links">Facebook</p>
              <p className="footer-links">Twitter</p>
              <p className="footer-links">Instagram</p>
              <p className="footer-links">Pinterest</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
          // <Carousel>
          //   <div>
          //     <div className="row">
          //       <div className="col-lg-6">
          //         <img src={"/images/bedroom.png"} />
          //       </div>
          //       <div className="col-lg-6">
          //         <img src={"/images/bedroom.png"} />
          //       </div>
          //     </div>
              
          //   </div>
          //   <div className="row">
          //     <div className="col-lg-6">
          //       <img src={"/images/entry-room.png"} />
          //     </div>
          //     <div className="col-lg-6">
          //       <img src={"/images/entry-room.png"} />
          //     </div>
          //   </div>
          //   <div>
          //     <img src={"/images/nursery-room.png"} />
          //   </div>
          // </Carousel>


