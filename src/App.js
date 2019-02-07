import React, { Component } from 'react';
import axios from 'axios'
import './App.css'

import TextChip from './components/textChip'
import ProductTable from './components/productTable'

class App extends Component {

  constructor(props){
    super(props)
    this.fetchData()
  }


  fetchData(){
    const baseUrl = 'https://storage.googleapis.com/dito-questions/events.json'
    axios.get(baseUrl)
      .then(res => console.log('data', res.data))
  }


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
