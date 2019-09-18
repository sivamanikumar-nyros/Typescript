import React from "react";
import 'rc-slider/assets/index.css';
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import * as $ from "jquery";
import Slider, { createSliderWithTooltip } from 'rc-slider';

export interface Props {
  
}

interface State {
  slider: number;
  nextbtn: boolean;
  wizard: boolean;
  back: boolean;
}

class Furniture extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);

    this.state = {
     slider: 0,
     nextbtn: false,
     wizard: false,
     back: false,
    };
  }

  imagewizard = () => {
    sessionStorage.setItem("furniture",JSON.stringify(this.state.slider))
    this.setState({wizard: true});
  };

  Back = () =>{
    this.setState({back: true})
  }

   renderWizard(){
    if(this.state.wizard){
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/budget'}} />
    }
  }

  renderBack(){
    if (this.state.back){
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/goal'}} />
    }
  }

  onSliderChange = (value: number) =>{
    localStorage.setItem('furniture',JSON.stringify(this.state.slider))
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
    
    // var m = localStorage.getItem("index")

    // if(!m){
    //   localStorage.setItem("index", "true")
    // }else{
    //   localStorage.removeItem("index");
    //   window.location.href = '/room'
    // }
    var x = sessionStorage.getItem("furniture")
    if(x){
      var sliderValue = JSON.parse(x)
      this.setState({slider: sliderValue})
    }

  }
  
  render() {
    
    return (
      <div className="App-layout " id="room">
      {this.renderWizard()}
      <h2 className="Room-header">How finished is your space?</h2>
      <p>Whether your room is completely empty or you're just looking for </p> 
      <p>those last pieces to bring your space together, we can help! </p><br/>
      {

        ( this.state.slider === 0 ) ?
        <img src="./images/starting.png" width="344px" height="223px"/>
        : null
      }

      {

        ( this.state.slider === 50 ) ?
        <img src="./images/medium.png" width="344px" height="223px"/>
        : null
      }
      {

        ( this.state.slider === 100 ) ?
        <img src="./images/final.png" width="344px" height="223px"/>
        : null
      }
      <div>...</div>
      <Slider dots step={50} value={this.state.slider} onChange={this.onSliderChange}/><br/>
      <div className="row " id="slider-markers">
        <div className="col-lg-4">|</div>
        <div className="col-lg-4">|</div>
        <div className="col-lg-4">|</div>
      </div>
        <div className="row furniture-slider">
          <div className="col-lg-4 slider-heading">
              Starting from scratch
              <p>I'm designing the whole </p>
              <p>room</p>
          </div>
          <div className="col-lg-4 slider-heading">
              Somewhere in between
              <p>I'm designing around a few </p>
              <p>pieces I already own</p>
          </div>
          <div className="col-lg-4 slider-heading">
              Mostly furnished
              <p>I want to put the finishing</p>
              <p>touches on my room</p>
          </div>
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

export default Furniture;