import React, { Component } from 'react';

class TopTabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="navbar-item" href={this.props.link}>
                {this.props.text}
            </a>
        );
    }
}

export default TopTabs;