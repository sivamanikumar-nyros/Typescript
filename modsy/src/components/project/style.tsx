import React from "react";
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import $ from "jquery";
import { number, any, array } from "prop-types";

var images = [
  {
    image: "./images/modern-minimal.png",
    imgCaption: "MODERN AND MINIMAL",
    ischeck: false
  },
  {
    image: "./images/rustic-warm.png",
    imgCaption: "RUSTIC AND WARM",
    ischeck: false
  },
  {
    image: "./images/traditional-warm.png",
    imgCaption: "TRADITIONAL AND COMFORTABLE",
    ischeck: false
  },
  {
    image: "./images/urban.png",
    imgCaption: "URBAN AND TRENDY",
    ischeck: false
  },
  {
    image: "./images/dramatic.png",
    imgCaption: "DRAMATIC AND BOLD",
    ischeck: false
  },
  {
    image: "./images/other.png",
    imgCaption: "OTHER",
    ischeck: false
  },
  {
    
  },
  {
    
    imgCaption: "I'm not sure about my style",
    ischeck: false
  },
  {
    
  }
];

export interface Props {
  
}

interface State {
  nextbtn: boolean;
  clickimg: number[];
  isChecked: boolean;
  wizard: boolean;
  images: any[];
  imageswizard: boolean;
  listArray: any[];
  backBtn: boolean;
  current_user: boolean;
}

class Style extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.clickimage = this.clickimage.bind(this);
    this.state = {
      nextbtn: false,
      isChecked: false,
      clickimg: [],
      wizard: false,
      current_user: false,
      listArray: [],
      imageswizard: true,
      backBtn: false,
      images : [
  {
    id: 1,
    image: "./images/modern-minimal.png",
    imgCaption: "MODERN AND MINIMAL",
    ischeck: false
  },
  {
    id: 2,
    image: "./images/rustic-warm.png",
    imgCaption: "RUSTIC AND WARM",
    ischeck: false
  },
  {  
    id: 3,
    image: "./images/traditional-warm.png",
    imgCaption: "TRADITIONAL AND COMFORTABLE",
    ischeck: false
  },
  {
    id: 4,
    image: "./images/urban.png",
    imgCaption: "URBAN AND TRENDY",
    ischeck: false
  },
  { 
    id: 5,
    image: "./images/dramatic.png",
    imgCaption: "DRAMATIC AND BOLD",
    ischeck: false
  },
  {
    id: 6,
    image: "./images/other.png",
    imgCaption: "OTHER",
    ischeck: false
  },
]
    };
  }

  getInitialState() {
    return { nextbtn: false };
  }

  clickimage = (index: number) => {

    var images = this.state.images.filter((item, i) => {
      if (i === index) {
        item.ischeck = !item.ischeck;
        if (item.ischeck === false) {
          var result = this.state.listArray.indexOf(item);

          this.state.listArray.splice(result, 1);

          if (this.state.listArray.length === 0) {
            this.setState({ nextbtn: false });
          } else {
            this.setState({ nextbtn: true });
          }
        } else {
          this.setState({ nextbtn: true });

          if (item.ischeck === true) {
            this.state.listArray.push(item);
            console.log("listarraylength", this.state.listArray.length);
          }
        }
        console.log(this.state.images);

        return item;
      } else {
        return item;
      }
    });
    console.log("Images in listarray" + this.state.listArray);
    this.setState({ images: images });
  };

 
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
    // var m = localStorage.getItem("index")

    // if(!m){
    //   localStorage.setItem("index", "true")
    // }else{
    //   window.location.href = '/room'
    // }
    var x = localStorage.getItem('current_user')
    if(x){
      // alert("dfgdfsh")
      this.setState({current_user: true})
    }
        // this.setState({roomName: "" + x})
    console.log(x)

    var y = sessionStorage.getItem("style")
    

    if(y){

      var jsonObj = JSON.parse(y);
      this.setState({listArray: jsonObj})
      this.setState({ nextbtn: true });
      console.log(this.state.listArray)

      this.state.images.map((item, index)=>{
        jsonObj.map((i: any, k: any)=>{
          if(item.imgCaption === i.imgCaption){
            item.ischeck = true;
            console.log(i)
          }
        })
      })
    }
  }

  renderBack(){
    if (this.state.backBtn){
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/budget'}} />
    }
  }


  imagewizard = () => {
    sessionStorage.setItem("style",JSON.stringify(this.state.listArray))
    this.setState({wizard: true});

    if(this.state.current_user){
      // alert("Already you are a member of this site")
      // this.setState({roomName: "" + x})
    }
  };

  Backbtn = () =>{
    this.setState({backBtn: true})
  }
  
  renderWizard(){
    if(this.state.wizard){
      if(this.state.current_user){
      localStorage.setItem('style',JSON.stringify(this.state.images))
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/recommendation'}} />
      }
      else{
         return <Redirect to={{ pathname: '/account'}} />
      }
    }
  }


  render() {
    const getimages = this.state.images.map((item, index) => {
      // var class_name = this.state.isChecked ? 'selected':'';
      var classname = item.ischeck ? 'selected':[];
      return (
        <div className="col-lg-4" key={index}>
          <div className="image-checkbox">
            {this.renderWizard()}
            <Card className={'shadow-sm mb-3 card-img ' + classname} onClick={() => this.clickimage(index)}>
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
      );
    });

    console.log(getimages);

    return (
      <div className="App-layout " id="room">
      {this.renderBack()}
      <h2 className="Room-header">Which design styles are you drawn to?</h2>
      <p>Understanding your style helps us select pieces you’ll love.</p>
      <br/> 
      <p>Select all that apply</p>
        <div className="row">
          <div className="col-lg-2">
            <div className="row"></div>
          </div>
          <div className="col-lg-8">
            <div className="row">{getimages}</div>
          </div>
          <div className="col-lg-2">
            <div className="row"></div>
          </div>
        </div>
        <br/>
        <div className="footer">
          <div className="row">
          <div className="col-lg-2">
          </div>
            <div className="col-lg-4">
              <div className="container footer home-btn">
                <button onClick={this.Backbtn} className="homebtn" >Back</button>
              </div>
              </div>
              <div className="col-lg-4">
              {this.state.nextbtn ? (
                <button className="nextbtn" onClick={this.imagewizard}>Next
                </button>
                ) : (
                <button className="nextbtn" disabled>
                  Next
                </button>
              )}
            </div>
            <div className="col-lg-2">
          </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Style;