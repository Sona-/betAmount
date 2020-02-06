import ApolloClient from 'apollo-boost';
// import { gql } from "apollo-boost";


const client = new ApolloClient({
    uri: 'http://gambilife.com/graphql',
});
export default client;
