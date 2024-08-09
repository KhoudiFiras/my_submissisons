import React from 'react'
import { useState } from 'react'


const Filter = (props) => {
  return (
    <div>
        <form action="">
            <div>filter shown with <input value={props.searchTerm} onChange={props.handleSearchChange}/></div>
        </form>
    </div>
  )
}

export default Filter