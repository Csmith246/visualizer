import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import Uploader from './Uploader';
import Picker from './Picker/Picker.js';
import LineChart from './LineChart';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jsonData: null,
      canvasSize: [800, 500],
      chartType: null
    };
  }

  getFileInput = (dataFromUploader) => {
    this.setState({ jsonData: dataFromUploader });
  }

  getChartType = (type) => {
    console.log(type);
    this.setState({ chartType: type });
  }

  render() {
    var pics = {
      'line': 'lineChart',
      'bar': 'barChart',
      'pie': 'pieChart'
    };

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Data Viewer</h2>
          <h4>Visualize your data in the browser!</h4>
          <Picker chartTypeCallback={this.getChartType} pics={pics}/>
        </div>
        <div className="App-body">
          {( ()=>{ // Immediately invoked function expression - do this to write sophisticated if-else logic in JSX
            if(!this.state.chartType){
              return <div className="alertMsg">Choose a Chart Type</div>;
            }else if(!this.state.jsonData){
              return <div className="alertMsg">Upload a File</div>
            }else{
              console.log("IN THE SWITCH");
              switch (this.state.chartType){
                case "barChart":  return <BarChart data={this.state.jsonData} size={this.state.canvasSize} />;
                case "lineChart": return <LineChart data={this.state.jsonData} size={this.state.canvasSize} />;
                case "pieChart":  return <LineChart data={this.state.jsonData} size={this.state.canvasSize} />;
                default:          return <div>Error... yo</div>;
              }
            }
          }) ()}
        </div>
        <div className="App-footer">
          <Uploader dataCallback={this.getFileInput}/>
        </div>
      </div>
    );
  }
}

export default App;
