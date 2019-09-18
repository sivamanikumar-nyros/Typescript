import React from "react";
import 'rc-slider/assets/index.css';
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import $ from "jquery";
// import Room from "./room";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import axios from 'axios';

interface State{
	roomName: string;
  current_user: string;
  current_img: string;
  goal_page: any[];
  furniture_page: string;
  budget_page: string;
  style_page: any[];
}

interface Props{

}


class Recommendation extends React.Component<Props, State> {
	constructor(props: Props) {
    super(props);
    this.state = {
    	roomName: "",
      current_img: '',
      current_user: "",
      goal_page: [],
      furniture_page: '',
      budget_page: '',
      style_page: []
    }
}
	componentDidMount(){

    var m = localStorage.getItem("index")

    if(!m){
      localStorage.setItem("index", "true")
    }else{
      // window.location.href = '/room'
    }
    // axios.get("http://10.90.90.117:5000/api/v1/projects").then(res=>{
    //   var m = sessionStorage.getItem("index")

    // if(!m){
    //   sessionStorage.setItem("index", "true")
    // }else{
    //   window.location.href = '/room'
    // }

    // var m = sessionStorage.getItem("index")

    // if(m){
      
    //   sessionStorage.removeItem("index");
    // }else{
    //   sessionStorage.setItem("index", "true")
    //   window.location.href = '/room'
    // }

		var r = sessionStorage.getItem('room')
    this.setState({roomName: "" + r})
		console.log(r)

    var z = sessionStorage.getItem('image')
    this.setState({current_img: "" + z})

    var y = localStorage.getItem("current_user")
    this.setState({current_user: "" + y})

    var g = sessionStorage.getItem('goal')
     if (g){

    var JsonGoal = JSON.parse(g)
      this.setState({goal_page: JsonGoal})
    }
    // this.setState({goal_page: '' + g})

    var f = sessionStorage.getItem('furniture')
    this.setState({furniture_page: '' + f})

    var b = sessionStorage.getItem('budget')
    this.setState({budget_page: '' + b})

    var c = sessionStorage.getItem('style')
    if (c){

    var JsonStyle = JSON.parse(c)
    this.setState({style_page: JsonStyle})
    }
    // JSON.stringify(c)

    setTimeout(function(){
       sessionStorage.clear();
     },4000)
    setTimeout(function(){
       localStorage.clear();
     },4000)
    // })
	}


  render() {
   
   localStorage.getItem('images');
   localStorage.getItem('current_user')
   localStorage.getItem('goal')
   localStorage.getItem('furniture')
   localStorage.getItem('budget')
   localStorage.getItem('style')

    return (

      <div className="container " id="room">
        <h2 className="Final-header">Thanks for telling us about </h2>
        <h2 className="Final-header">your <span className="final-span">{this.state.roomName}</span> project! </h2>
        <h2 className="Final-header"><span><img src={this.state.current_img} /></span>
        <span className="final-span">{this.state.current_user}</span></h2>
        
        <div className="finalPage">
          <h2 className="Final-header">
            Goal Page
          </h2>
        <div className="row">
        {
          this.state.goal_page.map((item: any,index: any)=>{
            return (
              <div className="col-lg-4 getgoals" key={index}>
                <div className="image-checkbox">
                  <Card className={'shadow-sm p-3 mb-3 bg-white rounded card-img card_img ' } >
                  <p className="image-caption">{item.imgCaption}</p>
                  <img
                    key={index}
                    data-value={item}
                    className="img-responsive wizard_imagecap"
                  />
                  </Card>
                </div>
              </div>
            );
          })
        }
        </div>
        </div>
        <br/>
        <div className="row">
          <p className="col-lg-4">
            <b className="sliderName">0</b> value is equal to => I'm designing the wholeroom....................
            <img src="./images/starting.png" width="344px" height="223px"/> 
          </p><hr/>
          <p className="col-lg-4">
            <b className="sliderName">50</b> value is equal to => I'm designing around a few pieces I already own
            <img src="./images/medium.png" width="344px" height="223px"/>
          </p><hr/>
          <p className="col-lg-4">
            <b className="sliderName">100</b> value is equal to => I want to put the finishing touches on my room
            <img src="./images/final.png" width="344px" height="223px"/>
          </p><hr/>
        </div>
        <br/>
        <div className="Final-header">
          
        Furniture Page Value:
          <span className="final-span">{this.state.furniture_page}</span>
        </div>
        <div className="finalPage">
        <br/>
        <div className="row">
          <div className="col-lg-4">
            <b className="sliderName">0</b> value is equal to => $2500 or less
          </div><hr/>
          <div className="col-lg-4">
            <b className="sliderName">25</b> value is equal to => $5000
          </div><hr/>
          <div className="col-lg-4">
            <b className="sliderName">50</b> value is equal to => $7500
          </div><hr/>
        </div>
        <br/>
        <div className="row">
          <div className="col-lg-6">
          <b className="sliderName">75</b> value is equal to => $10000</div>
          <div className="col-lg-6"><b className="sliderName">100</b> value is equal to => $25000 Above</div>
        </div>
        <br/>
          <p className="Final-header">
        Budget Page Value:
          <span className="final-span">{this.state.budget_page}</span>
        </p>
        </div>
          <h2 className="Final-header">
            Style Page
          </h2>
            
          <div className="row">
            {
              this.state.style_page.map((item: any, index: any)=>{
                return(
                    <div className="col-lg-2" key={index}>
                    <div className="image-checkbox">
                      <Card className={'shadow-sm mb-3 card-img '}>
                      <img
                        key={index}
                        data-value={item}
                        src={item.image}
                        className="img-responsive wizard_image"
                        
                      />
                      <div className="labelcontainer">{item.imgCaption}</div>
                      </Card>
                    </div>
                  </div>

                  )
              })
            }
            </div>
        <br/>
        <div className="container footer home-btn">
          <Link to="/"><button className="homebtn">Home</button></Link>
        </div><br/>
      </div>
    );
  }
}

export default Recommendation;