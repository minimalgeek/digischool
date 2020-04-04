import React from "react";
import School from "../school/School";

export default class SchoolWrapper {
    constructor(props) {
        this.state = {
            isWhiteBoardOpen: false,
            userName: 'Jozsef'
        }
    }

    toggleWhiteBoard = () => {
        const {isWhiteBoardOpen} = this.state;
        this.setState({
            isWhiteBoardOpen: isWhiteBoardOpen ? false : true,
        });
    }

    
    // Username will be extracted from user object.
    render() {
        const {isWhiteBoardOpen, userName} = this.state;
        return ({
            isWhiteBoardOpen ?
                <WhiteBoard toggleWhiteBoard={this.toggleWhiteBoard} userName={userName/> :
                <School toggleWhiteBoard={this.toggleWhiteBoard}/>
            });
    }
}