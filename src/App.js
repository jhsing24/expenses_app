import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncExp } from './components/IncExp';
import { TransList } from './components/TransList';
import { AddTrans } from './components/AddTrans';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncExp />
        <TransList />
        <AddTrans />
      </div>
    </div>
  );
}

export default App;
