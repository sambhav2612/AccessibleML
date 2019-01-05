import React, { Component } from 'react';
import Button from '../Components/button';
import logo from '../logo.svg';
import '../Styles/App.css';
import CreatePost from './CreatePost';
import ListPosts from './ListPosts';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="submit" label="Accessible ML"/>
      </div>
    );
  }
}

export default App;
