import React, {Component} from 'react';
import './App.css';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';
import {select} from 'd3-selection';
import {csvParse} from 'd3-dsv';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.createBarChart = this.createBarChart.bind(this);
        this.formatData = this.formatData.bind(this);
        this.state = {csvData:null}
    }

    componentDidMount() {
        this.createBarChart();
    }

    componentDidUpdate() {
        this.createBarChart();
    }

    formatData(){
        var file = this.props.data.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            let data = event.target.result;
            // The file's text will be printed here
            console.log(event.target.result);
            let resJson = csvParse(data);
            console.log(resJson);
            this.setState({ csvData: resJson });
            this.createBarChart();
        };

        reader.readAsText(file);
    }

    createBarChart() {

        console.log("In BarChart update", this.state.csvData); //THIS IS COMING UP AS NULL
        // IT SHOULD BE THE CSVDATA IN JSON FORM.... FIX DIS!



        // csvParse() FILE IS COMING THORUGH!!!! NOW HOW DO WE PROCESS IT??? const node =
        // this.node; const dataMax = max(this.props.data); const yScale = scaleLinear()
        //     .domain([0, dataMax])     .range([0, this.props.size[1]]); select(node)
        //   .selectAll('rect')     .data(this.props.data)     .enter()
        // .append('rect'); select(node)     .selectAll('rect')
        // .data(this.props.data)     .exit()     .remove(); select(node)
        // .selectAll('rect')     .data(this.props.data)     .style('fill', '#fe9922')
        //   .attr('x', (d,i) => i * 25)     .attr('y', d => {this.props.size[1] +
        // yScale(d)})     .attr('height', d => yScale(d))     .attr('width', 25);

    }

    render() {
        return <svg ref={node => this.node = node} width={500} height={500}></svg>
    }
}
export default BarChart