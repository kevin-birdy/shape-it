import React from 'react';
import Layout from '../components/layout';
import IdeaView from '../components/IdeaItem';
import { graphql } from 'gatsby';

const IdeaTemplate = (props) => {
    console.log(props.data);
    return (
        <Layout>
           <IdeaView 
                ideaTitle={props.data.idea.title} 
                ideaExplanation={props.data.idea.explanation} 
            />  
        </Layout>
    )
};

// bookId comes from page context in gatsby-node
export const query = graphql`
    query IdeaQuery($ideaId: String!) {
            idea(id: {eq: $ideaId}){
              title
              explanation
            }
          }
`;

export default IdeaTemplate;