import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '../Components/button';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const addMutation = gql`
  mutation addPost($uri: String!) {
    createPost(uri: $imageUrl) {
      id
      uri
    }
  }
`

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uri: ''
        }
    }

    _onChange(e) => {
        this.setState(
            uri: e.target.value
        );
    }

    render() {
        return (
            <div className='w-100 pa4 flex justify-center'>
                <div style={{ maxWidth: 400 }} className=''>
                    <input
                        className='w-100 pa3 mv2'
                        value={this.state.uri}
                        placeholder='Article URI'
                        onChange={_onChange(e)}
                    />
                    {this.state.uri &&
                        <Button class='pa3 bg-black-10 bn dim ttu pointer' label="Post Link" onClick={this.handlePost}></Button>
                    }
                </div>
            </div>
        );
    }

    handlePost = () => {
        const { uri } = this.state;
        this.props.addPost({ uri })
            .then(() => {
            this.props.router.push('/')
        });
    }
}

export default graphql(addMutation, {
  props: ({ ownProps, mutate }) => ({
    addPost: ({ uri }) =>
      mutate({
        variables: { uri },
      })
  })
})(withRouter(CreatePost));