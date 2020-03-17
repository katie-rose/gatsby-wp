import React from 'react';
import PrimaryLayout from '../layouts/primarylayout';
import Post from '../components/Post';
import { graphql } from 'gatsby';

export default ({ data }) => {
  console.log(data);
  return (
    <PrimaryLayout column='col-xs-6'>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}
    </PrimaryLayout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
      }
    }
  }
`;
