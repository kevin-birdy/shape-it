const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const ideaTemplate = path.resolve('src/templates/ideaTemplate.js');

    return graphql(`
    {
        allIdea {
            edges {
                node {
                id
                }
            }
            }
        }
    `).then((result) => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allIdea.edges.forEach(idea => {
            createPage({
                path: `/ideas/${idea.node.id}`,
                component: ideaTemplate,
                context: {ideaId: idea.node.id}
            })
        })

    })
}