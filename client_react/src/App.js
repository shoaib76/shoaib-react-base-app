import React from 'react';
import { client } from './server_config/gql_config';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import { Students } from './components/students';

function App() {
  return (
    < ApolloProvider client={client} >
      <Students />
    </ApolloProvider >
  );
}

export default App;
