// @flow

import React, { Component } from 'react';
import CustomButton from '../Components/button';
import Navbar from '../Components/navbar';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return(
            <div className='pa3 bg-black-05 ma3'>
                <div className='pt3'>
                    {this.props.post.uri}&nbsp;
                    <span className='red f6 pointer dim' onClick={this.handleClick}>Open</span>
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.props.refresh();
    }
}

export default Post;