const graphql = require('graphql')

const { GrapQLObjectType, GraphQLString } = graphql;

const Booktype = new GrapQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        genre: { type: GraphQLString}

    })
})