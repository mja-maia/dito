import React from 'react'

import TextChip from './../textChip'
import ProductTable from './../productTable'

import formatDate from './../../utils/formatDate'

import './index.css'

export default props => {
  const { eventData } = props
  return (
    <div>
      < div className = "purchaseEventTitle" >
          < TextChip
          bgColor = "#d6d6d6"
          textColor = "#a2a2a2"
          text = {formatDate(eventData.store.timestamp)}
          width = "140px" / >

        < TextChip
          bgColor = "#f5bb4e"
          textColor = "#ffffff"
          text = {
            `R$ ${eventData.store.revenue}`
          }
          width = "90px" / >

        <span> {eventData.store.storeName} </span>
      </div>

      <ProductTable products={eventData.products}/>
    </div>
  )
}