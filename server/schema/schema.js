const graphql = require('graphql')
const _=require('lodash')

const { GrapQLObjectType, GraphQLString, GraphQLSchema } = graphql;


//dummy data

let books  = [
    { name:'Name of the Wine', genre:'Fantasy', id:'1'},
    { name:'The Final Empire', genre:'Fantasy', id:'2'},
    { name: 'The Long Earth',  genre:'Sci-Fi',id: '3'}
]
const BookType = new GrapQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        genre: { type: GraphQLString}

    })
})

const RootQuery = new GrapQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent,args){
                // code to get data from db / other source
               return _.find(books,{id:args.id})
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery
})

