import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncExp } from './components/IncExp';
import { TransList } from './components/TransList';
import { AddTrans } from './components/AddTrans';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <IncExp />
          <TransList />
          <AddTrans />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
