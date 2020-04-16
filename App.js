import React from 'react'
import Navigation from './navigation/Navigation'
import {ApolloProvider} from 'react-apollo'
import {client} from './helpers/apollo'

export default class App extends React.Component {
  render() { 
    return <ApolloProvider client={client}><Navigation/></ApolloProvider>
  }
}