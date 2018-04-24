import React, { Component } from 'react';
import './Picker.css';
//import require from 'file-loader';
import barChart from '../images/barChart.png';
import lineChart from '../images/lineChart.png';
import pieChart from '../images/pieChart.png';


class Picker extends Component{
    constructor(props){
        super(props);
        this.generatePics = this.generatePics.bind(this);
    }

    generatePics(){
        var dirtyWay = {
            "lineChart":lineChart,
            "barChart":barChart,
            "pieChart":pieChart,
        };
        var picJSX = [];
        for(var graph in this.props.pics){
            let required = this.props.pics[graph];
            picJSX.push(<img key={graph} className="pic" src={dirtyWay[required]} width={90} height={70}/>);
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