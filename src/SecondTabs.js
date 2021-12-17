import React, { Component } from 'react';

class SecondTabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.text}</a>
            </li>
        );
    }
}

export default SecondTabs;