import React, { Component } from 'react';

import {
  groupBy,
  pipe,
  prop,
  filter,
  find,
  mapObjIndexed,
  values,
  map,
  reduce
} from 'ramda'


import eventService  from "./service";
import PurchaseEvent from './components/purchaseEvent'

import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      events: []
    }

    this.eventsByTransactionsId = this.eventsByTransactionsId.bind(this)
  }

  componentDidMount(){
    eventService.fetchData().then(response => {
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

    const rawStore = event.find(e => e.event === 'comprou')
    const store = {
      revenue: rawStore.revenue,
      timestamp: rawStore.timestamp,
      storeName: rawStore.custom_data.find(data => data.key === 'store_name').value
    }

    const products = pipe(
      filter(e => e.event === 'comprou-produto'),
      map(p => reduce((acc, productEvent) => ({
        ...acc,
        [productEvent.key]: productEvent.value
      }), {}, p.custom_data)),
    )(event)

    const result = {
      store,
      products
    }
    return result
  }

  render() {
    return (
      <div className="App with-timeline">
        {
          values(mapObjIndexed((event, transactionId) => {
            const eventData = this.dataFormatter(event)
            return (
              <div key={transactionId} className="timeline-item" >
                <PurchaseEvent
                  eventData={eventData}
                />
              </div>
            ) 
          }, this.eventsByTransactionsId()))
        }
      </div>
    );
  }
}

export default App;
