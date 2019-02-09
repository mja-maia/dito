import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})




describe('test App Component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow( <App/> )
    expect(wrapper.exists()).toBe(true)
  })

  it('test dataFormatter function', () => {

    const wrapper = shallow( < App / > )
    const inputData = [
      {
        event: "comprou-produto",
        timestamp: "2016-09-22T13:57:32.2311892-03:00",
        custom_data: [{
            key: "product_name",
            value: "Camisa Azul"
          },
          {
            key: "transaction_id",
            value: "3029384"
          },
          {
            key: "product_price",
            value: 100
          }
        ]
      }, {
        event: "comprou",
        timestamp: "2016-09-22T13:57:31.2311892-03:00",
        revenue: 250,
        custom_data: [{
            key: "store_name",
            value: "Patio Savassi"
          },
          {
            key: "transaction_id",
            value: "3029384"
          }
        ]
      }, {
        event: "comprou-produto",
        timestamp: "2016-09-22T13:57:33.2311892-03:00",
        custom_data: [{
            key: "product_price",
            value: 150
          },
          {
            key: "transaction_id",
            value: "3029384"
          },
          {
            key: "product_name",
            value: "Calça Rosa"
          }
        ]
      }
    ]

    const expectData = {
      "products": [{
        "product_name": "Camisa Azul",
        "product_price": 100,
        "transaction_id": "3029384"
      }, {
        "product_name": "Calça Rosa",
        "product_price": 150,
        "transaction_id": "3029384"
      }],
      "store": {
        "revenue": 250,
        "storeName": "Patio Savassi",
        "timestamp": "2016-09-22T13:57:31.2311892-03:00"
      }
    }
    const result = wrapper.instance().dataFormatter(inputData)
    expect(result).toEqual(expectData)
  })
})
