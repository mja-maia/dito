import React from 'react'
import './index.css'

class ProductTable extends React.Component{
  render(){
    const { products } = this.props
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
            {
              products.map((product, key) => {
                return (
                  <tr key={key}>
                    <td>{product.product_name}</td>
                    <td>{`R$ ${product.product_price}`}</td> 
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable