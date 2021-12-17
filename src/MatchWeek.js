import React, { Component } from 'react';

class MatchWeek extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <p>{this.props.date}</p>
                <a><b>{this.props.teamOne}</b>  {this.props.time}  <b>{this.props.teamTwo}</b></a>
            </li>
        );
    }
}

export default MatchWeek;


