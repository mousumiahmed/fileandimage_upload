import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      files:""
    }
  }
  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])
 
  }
  
  render(){
    console.log(this.state.selectedFile)
    console.log(this.state.imagePreviewUrl)
    return (
      <div className="App">
         <input type="file" name="avatar" onChange={this.fileChangedHandler} />
         {/* <button type="button" onClick={this.submit} > Upload </button> */}
         <img src={this.state.imagePreviewUrl}/>
      </div>
    );

  }
  
}

export default App;
