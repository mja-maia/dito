import React from 'react'
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
            <tr>
              <td>Calça Rosa</td>
              <td>150,00</td> 
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable