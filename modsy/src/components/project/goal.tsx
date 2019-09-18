import React from "react";
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import { number, any, array } from "prop-types";
import $ from "jquery";

const goals = [
  {
    imgCaption: "I'm redecorating",
    ischeck: false
  },
  {
    imgCaption: "I'm moving",
    ischeck: false
  },
  {
    imgCaption: "I need help with a layout",
    ischeck: false
  },
  {
    imgCaption: "I'm Looking for a few specific pieces(rug,sofa,etc.)",
    ischeck: false
  },
  {
    imgCaption: "I'm moving in with someone",
    ischeck: false
  },
  {
    imgCaption: "Other",
    ischeck: false
  }
];

export interface Props {
  location: object;
  state:object;
}

interface State {
  nextbtn: boolean;
  clickimg: number[];
  isChecked: boolean;
  state: object;
  wizard: boolean;
  images: any[];
  imageswizard: boolean;
  listArray: any[];
  back: boolean;
}

class Goal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      nextbtn: false,
      isChecked: false,
      clickimg: [],
      back: false,
      state: {},
      wizard: false,
      imageswizard: true,
      listArray: [],
      images : [
    {
      imgCaption: "I'm redecorating",
      ischeck: false
    },
    {
      imgCaption: "I'm moving",
      ischeck: false
    },
    {
      imgCaption: "I need help with a layout",
      ischeck: false
    },
    {
      imgCaption: "I'm Looking for a few specific pieces(rug,sofa,etc.)",
      ischeck: false
    },
    {
      imgCaption: "I'm moving in with someone",
      ischeck: false
    },
    {
      imgCaption: "Other",
      ischeck: false
    }
  ]
      
    };
  }

  getInitialState() {
    return { nextbtn: false };
  }

  clickimage = (index: number) => {
    var data = [];
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


  imagewizard = () => {
    sessionStorage.setItem("goal",JSON.stringify(this.state.listArray))
    this.setState({wizard: true});
  };

  Backbtn = () =>{
    this.setState({back: true})
  }

  componentDidMount(){

    var m = localStorage.getItem("index")

    if(!m){
      localStorage.setItem("index", "true")
    }else{
      // sessionStorage.clear();

      window.location.href = '/room'
    }

    var x = sessionStorage.getItem("goal")
    

    if(x){

      var jsonObj = JSON.parse(x);
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
      // jsonObj.map((item,index)=>{
      //   item.ischeck = !item.ischeck;
      // })
    }
    // let search = new URLSearchParams(this.props.location.search);
    // if (x){
    //   this.state.images.map((item, i) => {
    //     x.map((item,index){

    //     })
    //     if(item.image === x){
    //       item.ischeck = true;
    //       // this.setState({redirect: true})
    //       // this.setState({ nextbtn: true });
    //       // console.log(item)
    //     }
    //   })
    //       console.log(this.state.images)


    // }
  }

  renderBack(){
    if (this.state.back){
      localStorage.removeItem('index')
      return <Redirect to={{ pathname: '/room'}} />
    }
  }


  
  renderWizard(){
    if(this.state.wizard){
      localStorage.removeItem('index')
      localStorage.setItem('goal',JSON.stringify(this.state.images))
      return <Redirect to={{ pathname: '/furniture'}} />
    }
  }

  render() {
    const getimages = this.state.images.map((item, index) => {
      var classname = item.ischeck ? 'selected':[];
      return (
        <div className="col-lg-4 getgoals" key={index}>
          <div className="image-checkbox">
            {this.renderWizard()}
            <Card className={'shadow-sm p-3 mb-3 bg-white rounded card-img card_img ' + classname } onClick={() => this.clickimage(index)} >
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
    });

    console.log(getimages);

    return (
      <div className="App-layout " id="room">
      {this.renderBack()}
      <h2 className="Room-header">Why do you want to redesign your space?</h2>
      <p>No project is too big or too small! We’re here to help you create a </p> 
      <p>space you love.</p>
        <br/>
        <p>Select all that apply</p><br/>
        <div className="row">
          
          <div className="col-lg-2">
            <div className="row"></div>
          </div>
          <div className="col-lg-8 ">
            <div className="row">{getimages}</div>
          </div>
          <div className="col-lg-2">
            <div className="row"></div>
          </div>
        </div>
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

export default Goal;