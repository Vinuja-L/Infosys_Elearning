import React from 'react'
import { dashboard } from '../hiru/dummydata'
const Dashboard = () => {
  return (
    <div>
        
        <section className='dashboard'>
            <div className='container grid2'>
            {dashboard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className='outline-btn'>Let's Go</button>
            </div>
          ))}
            </div>
        </section>
        
    </div>
  )
}

export default Dashboard