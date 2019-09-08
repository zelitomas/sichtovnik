import React, { Component } from 'react';

class ExternalLink extends Component{
    handleClick = () => {
        window.open(this.props.href);
    };

    render = () => {
        return (<a href='#replaceme' onClick={this.handleClick}>{this.props.children}</a>)
    }
}

export default ExternalLink;