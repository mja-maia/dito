import React, { Component } from 'react';
import EventService  from "./service";

import './App.css'

import PurchaseEvent from './components/purchaseEvent'
import {
  mapObjIndexed,
  values,
  filter
} from 'ramda'


import { groupBy, pipe, prop, find } from 'ramda'

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      events: []
    }

    this.eventsByTransactionsId = this.eventsByTransactionsId.bind(this)
  }

  componentDidMount(){
    EventService.fetchData().then(response => {
      this.setState({
        ...this.state,
        events: response.data.events
      })
    })
  }


  eventsByTransactionsId(){
    // const getTransactionId = (item) => item.custom_data.find(x => x.key === 'transaction_id').value
    const getTransactionId = pipe(
      //pegar custom data,
      prop('custom_data'),
      //fazer find por transaction_id,
      find(x => x.key === 'transaction_id'),
      //pegar o value
      prop('value')
    )
    const result = groupBy(getTransactionId, this.state.events)
    return result
  }

  dataFormatter(event){
    const buyEvent = event.find(e => e.event === 'comprou')
    const products = event.filter(e => e.event === 'comprou-produto')
    console.log('array', Object.assign({}, buyEvent, products))

  }

  render() {
    return (
      <div className="App">
       {values(mapObjIndexed((eventData, transactionId) => {
        return(
          <div key={transactionId}>
            < PurchaseEvent eventData={eventData}/>
          </div>
        )
       },this.eventsByTransactionsId()))}
      </div>

      
    );
  }
}

export default App;
