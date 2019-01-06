// this is a reusable navbar component

import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import CustomButton from './button';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../../Routes';

class Navbar extends Component {
  state = {
      activeItem: null,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Router>
    <div className="container">
      <Menu stackable size='large'>
        <Menu.Item header>Accessible ML</Menu.Item>
            <Menu.Menu position='right'>
                 <Menu.Item
                    name='create'
                    id='navbar-create'
                    active={activeItem === 'create'}
                    onClick={this.handleItemClick}
                ><Link to='/create'>Create</Link></Menu.Item>
                <Menu.Item
                    name='feed'
                    id='navbar-feed'
                    active={activeItem === 'feed'}
                    onClick={this.handleItemClick}
                ><Link to='/feed'>Feed</Link></Menu.Item>
                <Menu.Item
                    name='about'
                    id='navbar-about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                ><Link to='/about'>About Us</Link></Menu.Item>
                <Menu.Item
                    name='signin'
                    id='navbar-signin'
                    active={activeItem === 'signin'}
                    onClick={this.handleItemClick}
                >
                <CustomButton label="Signin" icon="signin" labelPosition="left" />
                </Menu.Item>
                <Menu.Item
                    name='signup'
                    id='navbar-signup'
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                >
                <CustomButton label="Signup" icon="signup" labelPosition="left" />
                </Menu.Item>
            </Menu.Menu>
      </Menu>
      </div>

      <Routes />
      </Router>
    )
  }
}

export default Navbar;