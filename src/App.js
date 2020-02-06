import React from 'react';
import Page from './page';
import './scss/reset.scss';
import './scss/global.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { Header } from './components';
import client from './http';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Header />
        <Page />
      </ApolloProvider>
    </div>
  );
}

export default App;
