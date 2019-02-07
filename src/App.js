import React, { Component } from 'react';
import './App.css'

import TextChip from './components/textChip'
import ProductTable from './components/productTable'

class App extends Component {
  render() {
    return (
      <div className="App">
       < TextChip
       bgColor = "#d6d6d6"
       textColor = "#a2a2a2"
       text = "02/01/2019 13:57"
       width = "140px" / >

        < TextChip
        bgColor = "#f5bb4e"
        textColor = "#ffffff"
        text = "R$ 250,00"
        width = "90px" / >

        <ProductTable/>
      </div>

      
    );
  }
}

export default App;
