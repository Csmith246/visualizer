import React, {Component} from 'react';
import './App.css';

class Uploader extends Component {
    constructor(props){
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(e){
        console.log("In Upload Event");
        console.log(this.fileInput.files);
        this.props.fileCallback(this.fileInput);
        e.preventDefault();
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