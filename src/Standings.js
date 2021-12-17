import React, { Component } from 'react';

class Standings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <a> {this.props.position} / {this.props.club} / {this.props.pi} / {this.props.gd} / {this.props.points}</a>
            </li>
        );
    }
}

export default Standings;