import React from 'react'
import { find } from 'ramda'

import TextChip from './../textChip'
import ProductTable from './../productTable'

import './index.css'

export default props => {
  const { eventData } = props
  return (
    <div>
      {
        eventData.map(event => {
          if (event.event === 'comprou') {
            return (
              < div className = "purchaseEventTitle" >
                  < TextChip
                  bgColor = "#d6d6d6"
                  textColor = "#a2a2a2"
                  text = {event.timestamp}
                  width = "140px" / >

                < TextChip
                  bgColor = "#f5bb4e"
                  textColor = "#ffffff"
                  text = {
                    `R$ ${event.revenue}`
                  }
                  width = "90px" / >

                <span> Pátio Savassi </span>
              </div>
            )
          }
        })
      }
      <ProductTable/>
    </div>
  )
}