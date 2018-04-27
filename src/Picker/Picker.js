import React, { Component } from 'react';
import './Picker.css';
import barChart from '../images/barChart.png';
import lineChart from '../images/lineChart.png';
import pieChart from '../images/pieChart.png';


class Picker extends Component{
    constructor(props){
        super(props);

        this.state = {chartType: null};

        // bind functions
        this.generatePics = this.generatePics.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.selectedPicStyle = {"border": "5px solid red"};
    }


    handleClick(e, selectedChartType){
        if(selectedChartType !== this.state.chartType){
            this.setState({
                chartType: selectedChartType
            });
            this.props.chartTypeCallback(selectedChartType);
        }
    }


    generatePics(){
        var dirtyWay = { // Using this to wire up the imported pics to the string names for them. Pretty inelegant 
            "lineChart":lineChart,
            "barChart":barChart,
            "pieChart":pieChart,
        };
        var picJSX = [];
        var count = 0;
        for(var graph in this.props.pics){
            let chartType = this.props.pics[graph];
            let picURL = dirtyWay[chartType];
            picJSX.push(<img key={count} className="pic" id={"pic" + count} style={chartType===this.state.chartType ? this.selectedPicStyle : null} 
                            onClick={this.handleClick.bind(this, count, chartType)} src={picURL} width={90} height={70}/>);
            count++;
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