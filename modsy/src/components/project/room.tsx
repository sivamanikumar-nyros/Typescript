import React from "react";
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import $ from "jquery";
import ls from 'local-storage';
import { number, any, array } from "prop-types";
import axios from 'axios';


var images = [
  {  id: "1",
    image: ("./images/living-room.png"),
    imgCaption: "Living Room",
    ischeck: false
  },
  {
     id: "2",
    image: "./images/openliving-room.png",
    imgCaption: "Openliving Room",
    ischeck: false
  },
  {id: "3",
    image: "./images/bedroom.png",
    imgCaption: "BedRoom",
    ischeck: false
  },
  {id: "4",
    image: "./images/office-room.png",
    imgCaption: "Office Room",
    ischeck: false
  },
  {id: "5",
    image: "./images/dining-room.png",
    imgCaption: "Dining Room",
    ischeck: false
  },
  {id: "6",
    image: "./images/entry-room.png",
    imgCaption: "Entryway Room",
    ischeck: false
  },
  {id: "7",
    image: "./images/nursery-room.png",
    imgCaption: "Nursery Room",
    ischeck: false
  },
  {id: "8",
    image: "./images/kids-bedroom.png",
    imgCaption: "Kids-BedRoom",
    ischeck: false
  },
  {id: "9",
    image: "./images/studio-room.png",
    imgCaption: "Studio Room",
    ischeck: false
  }
];

export interface Props {
  images: any[];
}

interface State {
  nextbtn: boolean;
  clickimg: number[];
  isChecked: boolean;
  wizard: boolean;
  images: any[];
  redirect: boolean;
  imageswizard: boolean;
  listArray: any[];
  finalImage: string;
  finalArray: any;
  selected_item: string;
}

export class Room extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.clickimage = this.clickimage.bind(this);
    this.state = {
      nextbtn: false,
      isChecked: false,
      clickimg: [],
      wizard: false,
      redirect: false,
      imageswizard: true,
      listArray: [],
      selected_item: '',
      finalArray:'',
      finalImage: '',
      images : [
    {  id: 1,
      image: ("./images/living-room.png"),
      imgCaption: "LIVING ROOM",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {
       id: 2,
      image: "./images/openliving-room.png",
      imgCaption: "OPEN LIVING / DINING ROOM",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 3,
      image: "./images/bedroom.png",
      imgCaption: "BEDROOM",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 4,
      image: "./images/office-room.png",
      imgCaption: "OFFICE",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 5,
      image: "./images/dining-room.png",
      imgCaption: "DINING ROOM",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 6,
      image: "./images/entry-room.png",
      imgCaption: "ENTRYWAY",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 7,
      image: "./images/nursery-room.png",
      imgCaption: "NURSERY",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 8,
      image: "./images/kids-bedroom.png",
      imgCaption: "KID'S BEDROOM",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    },
    {id: 9,
      image: "./images/studio-room.png",
      imgCaption: "STUDIO",
      logoimg: ("./images/modsyLogo.jpg"),
      ischeck: false
    }
  ]

    };
  }

  getInitialState() {
    return { nextbtn: false };
  }

  // compondentDidMount(){
  // var x = localStorage.getItem("room")            
  // if (x) {
  //   this.setState({'selected_item': x})

  // }                                                                                
  // //   // var x = localStorage.getItem('current_user')
  // //   // if(x){
  // //   //   // alert("dfgdfsh")
  // //   //   this.setState({roomName: "" + x})
  // //   // }
  // //   //     // this.setState({roomName: "" + x})
  // //   // console.log(x)

  //   axios.get("http://10.90.90.117:5000/api/v1/projects").then(res=>{
  //   //   console.log(res)
  //   // localStorage.setItem("current_user", res.data.email)
  //   // })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  // }


//   componentDidMount(){
//   axios.get('http://10.90.90.117:5000/api/v1/projects')
//   .then(json => console.log(json) ,res=>{
//     console.log("om" + res.data)
//   })
// }

  // componentDidMount(){
  //   axios.get("http://10.90.90.117:5000/api/v1/projects").then(res =>{
  //     var x = localStorage.getItem('room')
  //       this.setState({roomName: "" + x})
  //     console.log("god" + x)
  //   })
  // }




                                                                                                                                                                                                                                                                                                                                    
  clickimage = (index: number) => {
    
    var images = this.state.images.filter((item, i) => {
      if (i === index) {
        item.ischeck = !item.ischeck;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        if (item.ischeck === true) {
          var result = this.state.listArray.indexOf(item);

          this.state.listArray.splice(result, 1);
          // this.state.finalArray.push(item.imgCaption);
          this.setState({finalArray: item.imgCaption,finalImage: item.image })
          // this.state.selected_item.push(item.imgCaption);
          sessionStorage.setItem("image", item.image);
          sessionStorage.setItem("room", item.imgCaption);

          // if (this.state.finalArray.length === 0){
          //   this.setState.({ nextbtn: false });            
          // }                                                                                                                                                                                                                                                                                

          if (this.state.listArray.length === 1) {
            // this.setState({ nextbtn: false });
          } else {
            this.setState({ nextbtn: true });
          }
        } else {
          this.setState({ nextbtn: false });

          // if (item.ischeck === true) {
          //   this.state.listArray.push(item);
          //   // console.log("listarraylength", this.state.listArray.length);
          // }
          
        }
        console.log("ssssssssssss" + this.state.finalArray);

        return item;
      } else {
        item.ischeck = false;
        return item;
      }
    });
    // console.log("Images in listarray" + this.state.listArray);
    this.setState({ images: images });
  };


  componentDidMount(){

    var m = localStorage.getItem("index")

    if(!m){
      localStorage.setItem("index", "true")
    }else{
      // sessionStorage.clear();
      // window.location.href = '/room'
    }
    var x = sessionStorage.getItem("image")
    // let search = new URLSearchParams(this.props.location.search);
    console.log("gggggggg", x)
    if (x){
      this.state.images.map((item, i) => {
        if(item.image === x){
          item.ischeck = true;
          this.setState({redirect: true})
          this.setState({ nextbtn: true });
          // console.log(item)
        }
      })
          console.log(this.state.images)


    }
    var r = sessionStorage.getItem("room")
    // let search = new URLSearchParams(this.props.location.search);
    console.log("rrrrrr", r)
    if (r){
      this.state.images.map((item, i) => {
        if(item.imgCaption === r){
          item.ischeck = true;
          this.setState({redirect: true})
          this.setState({ nextbtn: true });
          // console.log(item)
        }
      })
          console.log(this.state.images)


    }
  }

  imagewizard = () => {
    this.setState({wizard: true})
  };

  renderWizard(){
    if(this.state.wizard){
      localStorage.removeItem('index')
      localStorage.setItem('room', this.state.finalArray )
      localStorage.setItem('image', this.state.finalImage )
      return <Redirect to={{ pathname: '/goal'}} />
    }
  }
  render() {
    // const getimages = this.state.images.map((item, index) => {
    //   const classname = item.ischeck ? 'selected':[];
    
    //   return (
    //     <div className="col-lg-4" key={index}>
    //       <div className="image-checkbox">
    //       {this.renderWizard()}
    //         <Card className={'shadow-sm mb-3 card-img ' + classname} onClick={() => this.clickimage(index)}>
    //         <img
    //           key={index}
    //           data-value={item}
    //           src={item.image}
    //           className="img-responsive wizard_image"
              
    //         />
    //         <div className="labelcontainer">{item.imgCaption}</div>
    //         </Card>
    //       </div>
    //     </div>
    //   );
    // });
    // console.log(getimages);
    return (
      <div className="App-layout" id="room">
      <h2 className="Room-header">Which room are you designing?</h2>
      <p>Designing multiple spaces? Pick the room you want to start with! We'll follow up</p> 
      <p>with additional details once you purchase the multi-room package.</p><br/>
        <div className="row">
          
          <div className="col-lg-2">
            <div className="row"></div>
          </div>
          <div className="col-lg-8">
            <div className="row">
            {
              this.state.images.map((item, index) => {
                const classname = item.ischeck ? 'selected':[];

                return(
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
                )
              })
            }
            </div>
          </div>
          <div className="col-lg-2">
            <div className="row"></div>
          </div>
        </div>
        <div className="container section-heading">
          <a href="https://help.modsy.com/supported-room-types-rJYoX3F5Z"> Don't see your room? </a>
        </div>
        <br/>
        <div className="footer">
          <div className="row">
          <div className="col-lg-2">
          </div>
            <div className="col-lg-4">
              <div className="container footer home-btn">
                <Link to="/"><button className="homebtn">Home</button></Link>
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

export default Room;