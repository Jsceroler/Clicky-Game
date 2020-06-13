
import React, { Component } from 'react';
import Image from './components/image/Image'
import jojos from './jojo.json'
import Header from './components/header/Header'
import './App.css'

class App extends Component {
  
  state = {
    clicked: [],
    score: 0,
    hScore: 0
   }
  
  updateClicked = name => {
    if(this.state.clicked.indexOf(name)>-1){
      alert("Close. Try again.")
      this.setState({ clicked: [] })
    
      if(this.state.score > this.state.hScore){
        this.setState({ hScore: this.state.score })
      }

      this.setState({ score: 0 })
      
      return;

    } else {
      var score = this.state.score;
      score++;

      if(score > this.state.hScore){
        this.setState({ hScore: score })
      }
      this.setState({ score: score })
    }

    let clicked = this.state.clicked
    clicked.push(name)    
    this.setState({ clicked })
    console.log(this.state.clicked)
  }

  randomImage = () => {
    const newArr = [];
      while(newArr.length !== jojos.length){
        let jojo = jojos[Math.floor(Math.random()*jojos.length)];
        if (newArr.indexOf(jojo)<0){
          newArr.push(jojo)
        }
      }
    return newArr
  }
 
  render() {
    return (
      <div className="body">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>  
        <Header score={this.state.score} hScore={this.state.hScore}/>
          { this.randomImage().map(e => 
              ( 
                <Image  updateClicked={this.updateClicked} 
                        name={e.name} 
                        imgage={e.image}/> 
              ))
          }
      </div>
    );
  }
}

export default App;