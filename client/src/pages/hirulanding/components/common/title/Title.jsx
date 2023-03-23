import React from 'react'

const Title = ({ subtitle, title }) => {
  return (
    <div>
        <div id='headings'>
           <h2>{subtitle}</h2>
           <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Title