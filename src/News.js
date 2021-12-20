import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td width="5%"><i className="fa fa-bell-o"></i></td>
                <td>{this.props.title}</td>
                <td className="level-right"><a className="button is-small is-primary" href={this.props.link}>Read More</a></td>
            </tr>
        );
    }
}

export default News;