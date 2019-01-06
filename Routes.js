/*
    All the routes come here. Add any route and link it here to access it.
    Use Actions.routename() to access any route.
*/

/* Do not remove the below line. */
import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './src/Pages/Dashboard';
import AboutUs from './src/Pages/AboutUs';
import ListPosts from './src/Pages/ListPosts';
import CreatePost from './src/Pages/CreatePost';
import Post from './src/Pages/Post';
import Page404 from './src/Pages/404';

const Routes = () => (
  <Route path="/" component={Dashboard} />
        <Route path="/about" component={AboutUS} />
        <Route path="/feed" component={ListPosts} />
        <Route path="/create" component={CreatePost} />
        <Route path="/post/:id" component={Post} />
        <Route component={Page404} />
);

export default Routes;