import React, { Component } from 'react'
import bella from './bell(a).png'
import bellb from './bell(b).png'
export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Subscribe to my channel to never miss a video!',
         sub: 'Subscribe',
         imageURL: bella
      }
    }

    styles = {
    color: 'red',
    fontFamily: 'cursive'
  }
  
    Buttonchange = () =>{
        this.setState({
            message: 'Hit the bell icon to get notifications!',
            sub: 'Subscribed'
        })};

    imageChange = () =>{
        this.setState({
            imageURL: bellb,
            message: 'Thank you for pressing the bell icon!',
        })
    }

  render() {
    return (
      <div className='App'><h3 style={this.styles}>{this.state.message}</h3>
      <button onClick={this.Buttonchange}>{this.state.sub}</button>
      <p>
        <img 
        style={{width:"30px", height:"30px"}}
        src={this.state.imageURL}
        onClick={this.imageChange} 
        alt='bell' width='50px' height='50px'/>
      </p>

      </div>
      
    )
  }
}

export default NewComp