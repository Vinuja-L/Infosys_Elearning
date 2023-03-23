import React from 'react'
import { useLocation } from 'react-router-dom'

const Back = ({ title }) => {
    const Location = useLocation()
  return (
    <>
        <section className='back'>
          <h2>Home / {Location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>  
        </section>
        <div className='marigin'></div>
    </>
  )
}

export default Back