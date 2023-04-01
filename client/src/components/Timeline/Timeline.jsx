import React from 'react'
import "./Timeline.css"
import { Tcard } from './Tcard'
export const Timeline = () => {
  return (
    <div><a href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'></a>
    
    <ul class="timeline">
    
       <Tcard/>
       <Tcard/>
       <Tcard/>
       <Tcard/>
        

        {/* tcard component for generating cards in time line */}

     
    
       

      
    </ul>
    </div>
  )
}
