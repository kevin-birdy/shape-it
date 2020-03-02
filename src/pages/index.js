import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IdeaItem from "../components/IdeaItem";
import styled from 'styled-components';

const LinkButton = styled.div`
  text-align: right;
  a {
    padding: 12px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    
    
    &:hover{
      background: indigo;
    }
  } 


`

const IndexPage = (props) => {
  return (
  <Layout>
    {props.data.allIdea.edges.map(edge => (
      <IdeaItem 
        key={edge.node.id}
        ideaTitle={edge.node.title}
        ideaExplanation={edge.node.explanation}
      >
      <LinkButton>
        <Link to={`/ideas/${edge.node.id}`}>
          Join the conversation!
        </Link>
      </LinkButton>
      </IdeaItem>
    ))
  }

  </Layout>
  );
}

export const query = graphql`
  {
    allIdea {
      edges {
        node {
          title
          explanation
        }
      }
    }
  }

`;

export default IndexPage
