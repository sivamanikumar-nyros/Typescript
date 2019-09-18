import React from "react";
import 'rc-slider/assets/index.css';
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import $ from "jquery";
import Slider, { createSliderWithTooltip } from 'rc-slider';

interface State {
  slider: number;
  nextbtn: boolean;
  wizard: boolean;
  back: boolean;
}

export interface Props {
  
}

class Budget extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);

    this.state = {
     slider: 0,
     nextbtn: false,
     wizard: false,
     back: false
    };
  }

  imagewizard = () => {
    sessionStorage.setItem("budget",JSON.stringify(this.state.slider))
    this.setState({wizard: true});
  };
  Back = () =>{
    this.setState({back: true})
  }

  renderWizard(){
    if(this.state.wizard){
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/style'}} />
    }
  }

  renderBack(){
    if (this.state.back){
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/furniture'}} />
    }
  }

  onSliderChange = (value: number) =>{
    localStorage.setItem('budget',JSON.stringify(this.state.slider))
    console.log(value)
    this.setState({slider: value})
  }

  componentDidMount(){
    var m = localStorage.getItem("index")

    if(!m){
      localStorage.setItem("index", "true")
    }else{
      // sessionStorage.clear();

      window.location.href = '/room'
    }

    // var m = sessionStorage.getItem("index")

    // if(m){
      
    //   sessionStorage.removeItem("index");
    // }else{
    //   sessionStorage.setItem("index", "true")
    //   window.location.href = '/room'
    // }
    var x = sessionStorage.getItem("budget")
    if(x){
      var sliderValue = JSON.parse(x)
      this.setState({slider: sliderValue})
    }

  }

  render() {
    
    return (
      <div className="App-layout " id="room">
      {this.renderWizard()}
      <h2 className="Room-header">What is your overall budget for this project?</h2>
      <p>We source from over 100 retailers, allowing us to discover and  </p> 
      <p>suggest products that will meet your budget </p>
      <br/><p>Select an option below</p>

      <div className="row" id="slider-markers">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">$2500 or less</div>
        <div className="col-lg-2">$5000</div>
        <div className="col-lg-2">$7500</div>
        <div className="col-lg-2">$10000</div>
        <div className="col-lg-2">$25000 Above</div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row" id="slider-markers">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">|</div>
        <div className="col-lg-2">|</div>
        <div className="col-lg-2">|</div>
        <div className="col-lg-2">|</div>
        <div className="col-lg-2">|</div>
        <div className="col-lg-1"></div>
      </div>
      <Slider dots step={25} value={this.state.slider} onChange={this.onSliderChange}/><br/>
        <div className="row" id="slider-markers">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">{

          ( this.state.slider === 0 ) ?
            <h3 className="budget-sliders">$2500 or less</h3>
          : null
        }</div>
          <div className="col-lg-2">{

          ( this.state.slider === 25 ) ?
            <h3 className="budget-sliders">$5000</h3>
          : null
        }</div>
          <div className="col-lg-2">{

          ( this.state.slider === 50 ) ?
          <h3 className="budget-sliders">$7500</h3>
          : null
        }</div>
          <div className="col-lg-2">{

          ( this.state.slider === 75 ) ?
          <h3 className="budget-sliders">$10000</h3>
          : null
        }</div>
          <div className="col-lg-2">{

          ( this.state.slider === 100 ) ?
          <h3 className="budget-sliders">$25000 Above</h3>
          : null
        }</div>
          <div className="col-lg-1"></div>
      </div>
      {this.renderBack()}
        <div className="footer">
          <div className="row">
          <div className="col-lg-2">
          </div>
            <div className="col-lg-4">
              <div className="container footer home-btn">
                <button onClick={this.Back} className="homebtn" >Back</button>
              </div>
              </div>
              <div className="col-lg-4">
                <button className="nextbtn" onClick={this.imagewizard}>Next
                </button>
            </div>
            <div className="col-lg-2">
          </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Budget;
