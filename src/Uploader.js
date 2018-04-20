import React, {Component} from 'react';
import './App.css';
import {csvParse} from 'd3-dsv';

class Uploader extends Component {
    constructor(props){
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(e){
        // console.log("In Upload Event");
        // console.log(this.fileInput.files);

        e.preventDefault();

        var file = this.fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            let data = event.target.result;
            // The file's text will be printed here
            // console.log(event.target.result);
            let resJson = csvParse(data);
            // console.log(resJson);
            this.props.dataCallback(resJson);
        }.bind(this);
        reader.readAsText(file);
    }

    render(){
        // can use onchange event method in file input tag, if necessary
        return(
            <form onSubmit={this.handleUpload}>
                <input type="file" ref = {input => {this.fileInput = input}}/> 
                <input type="submit" value="Upload"/>
            </form>
        )
    }

}

export default Uploader;