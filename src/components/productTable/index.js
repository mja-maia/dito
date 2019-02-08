import React from 'react'
import { mapObjIndexed, values } from 'ramda'

import './index.css'


class ProductTable extends React.Component{
  render(){
    return (
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Camisa Azul</td>
              <td>100,00</td> 
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable