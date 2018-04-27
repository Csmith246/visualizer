import React, {Component} from 'react';
import './App.css';
import * as d3Scale from 'd3-scale';
import * as d3Arr from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';
import * as d3Select from 'd3-selection';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.createBarChart = this
            .createBarChart
            .bind(this);
    }

    componentDidMount() {
        this.createBarChart();
    }

    componentDidUpdate() {
        this.createBarChart();
    }

    createBarChart() {

        console.log("In BarChart update", this.props.data);

        var svg = d3.select("svg"),
            margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;

        var x = d3Scale
                .scaleBand()
                .rangeRound([0, width])
                .padding(0.1),
            y = d3Scale
                .scaleLinear()
                .rangeRound([height, 0]);

        var g = svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain(this.props.data.map(function (d) {
            return d.letter;
        }));

        y.domain([0, d3Arr.max(this.props.data, function (d) {
                return d.frequency;
            })
        ]);

        g
            .append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3Axis.axisBottom(x));

        g
            .append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(y).ticks(10, "%"))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");

        g
            .selectAll(".bar")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return x(d.letter);
            })
            .attr("y", function (d) {
                return y(d.frequency);
            })
            .attr("width", x.bandwidth())
            .attr("height", function (d) {
                return height - y(d.frequency);
            });

    }

    render() {
        return (
            <svg ref={node => this.node = node} width={500} height={500}></svg>
        )
    }
}
export default BarChart