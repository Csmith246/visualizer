import React, { Component } from 'react';
import * as d3Scale from 'd3-scale';
import * as d3Arr from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';
import * as d3Select from 'd3-selection';


class LineChart extends Component{
    constructor(props){
        super(props);
        this.createLineChart = this.createLineChart.bind(this);
    }

    componentDidMount(){
        this.createLineChart(this.props.data);
    }

    componentDidUpdate(){
        this.createLineChart(this.props.data);
    }


    createLineChart(data){

        console.log("Confirm we have data", data);

        var svg = d3Select.select("svg"),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = svg.attr("width") - margin.left - margin.right,
            height = svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        

        var x = d3Scale.scaleLinear()
            .rangeRound([0, width]);
        
        var y = d3Scale.scaleLinear()
            .rangeRound([height, 0]);
        
        var xData = "id";
        var yData = "delay";

        var line = d3Shape.line()
            .x(function(d) { return x(d[xData]); })
            .y(function(d) { return y(d[yData]); });
        
        x.domain(d3Arr.extent(data, function(d) { return d[xData]; }));
        y.domain(d3Arr.extent(data, function(d) { return d[yData]; }));
        
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3Axis.axisBottom(x))
            .select(".domain")
            .remove();
        
        g.append("g")
            .call(d3Axis.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text(yData);
        
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);

    }

    render(){
        return(
            <svg ref={node => this.node=node}
                width={1200} height={700}>
            </svg>
        );
    }
}
export default LineChart;