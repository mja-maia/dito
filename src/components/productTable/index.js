import React from 'react'
import './index.css'


class ProductTable extends React.Component{
  render(){
    return (
      <div className="tableWrapper">
        <table>
          <tr>
            <th>Produto</th>
            <th>Preço</th> 
          </tr>
          <tr>
            <td>Camisa Azul</td>
            <td>100,00</td> 
          </tr>
          <tr>
            <td>Calça Rosa</td>
            <td>150,00</td> 
          </tr>
        </table>
      </div>
    )
  }
}

export default ProductTable