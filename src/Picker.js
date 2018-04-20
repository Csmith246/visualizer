import React, { Component } from 'react';
import './App.css';
import require from 'file-loader';


class Picker extends Component{
    constructor(props){
        super(props);
        this.generatePics = this.generatePics.bind(this);
    }

    generatePics(){
        var picJSX = [];
        for(var graph in this.props.pics){
            picJSX.push(<img key={graph} src={require(this.props.pics[graph])}  />);
        }
        return picJSX;
    }
// onClick={this.props.visCallback(graph)}//
    render(){
        return(
            <div className="graphPicker">{this.generatePics()}</div>
        )
    }
}
export default Picker;