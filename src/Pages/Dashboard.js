// @flow

import React, { Component } from 'react';
import CustomButton from '../Components/button';
import Navbar from '../Components/navbar';
import ListPosts from './ListPosts';
import CreatePost from './CreatePost';
import { Grid } from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Grid divided='vertically'></Grid>
      </div>
    );
  }
}

export default Dashboard;
