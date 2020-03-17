import React from 'react';
import PrimaryLayout from '../layouts/primarylayout';
import Post from '../components/Post';

export default () => (
  <PrimaryLayout column='col-xs-6'>
    <Post
      title='This is our first post'
      excerpt='We are writing something to be displayed.'
    />
    <Post
      title='This is our second post'
      excerpt='We are writing something to be displayed.'
    />
    <Post
      title='This is our third post'
      excerpt='We are writing something to be displayed.'
    />
  </PrimaryLayout>
);
