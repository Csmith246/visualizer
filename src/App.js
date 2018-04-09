import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import Uploader from './Uploader';
import Picker from './Picker';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
    };
  }

  getFileInput = (fileFromUploader) => {
    this.setState({ file: fileFromUploader });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Data Viewer</h2>
          <h4>Visualize your data in the browser!</h4>
          <Picker />
        </div>
        <div>
          <BarChart data={this.state.file} size={[500,500]} />
        </div>
        <div className="App-footer">
          <Uploader fileCallback={this.getFileInput}/>
        </div>
      </div>
    );
  }
}

export default App;
