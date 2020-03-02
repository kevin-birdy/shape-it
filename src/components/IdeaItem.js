import React from 'react';
import styled from 'styled-components';

const IdeaItemWrapper = styled.section`
    border: 1px solid #ddd;
    padding: 24px;
    background: white;
    margin-bottom: 24px;
`;

const IdeaItem = ({ideaTitle, ideaExplanation, children}) => (
    <IdeaItemWrapper>
        <h2>
            {ideaTitle}
        </h2>
        <p>
            {ideaExplanation}
        </p>
        <div>
            {children}
        </div>
    </IdeaItemWrapper>
)

export default IdeaItem;