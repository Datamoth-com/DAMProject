import React from 'react'
import "./TransHist.css"
import { TransHistCard } from '../../TransHistCard/TransHistCard'


export const TransHist = () => {
  return (
    <div className='d-flex flex-wrap'>

      <TransHistCard/>
      <TransHistCard/>
      <TransHistCard/>
  
  </div>
  )
}

export default TransHist