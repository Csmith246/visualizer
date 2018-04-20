import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import Uploader from './Uploader';
import Picker from './Picker';
import LineChart from './LineChart';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jsonData: null,
      canvasSize: [800, 500],
      visualization: "Line"
    };
  }

  getFileInput = (dataFromUploader) => {
    this.setState({ jsonData: dataFromUploader });
  }

  getVisualization = (vis) => {
    console.log(vis);
    this.setState({ visualization: vis });
  }

  render() {
    var pics = {
      'line': './images/lineChart.png',
      'bar': './images/barChart.png',
      'pie': './images/pieChart.png'
    };

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Data Viewer</h2>
          <h4>Visualize your data in the browser!</h4>
          <Picker visCallback={this.getVisualization} pics={pics}/>
        </div>
        <div>
          {/* {
            (this.state.jsonData) ? <BarChart data={this.state.jsonData} size={this.state.canvasSize} /> : <div>Upload a File</div>
          } */}
          {
            (this.state.jsonData) ? (<LineChart data={this.state.jsonData} size={this.state.canvasSize} />) :  <div>Importo some data yo</div>
          }
        </div>
        <div className="App-footer">
          <Uploader dataCallback={this.getFileInput}/>
        </div>
      </div>
    );
  }
}

export default App;
