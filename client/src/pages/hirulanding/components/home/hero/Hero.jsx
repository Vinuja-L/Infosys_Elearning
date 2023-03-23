import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'


const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='row'>
                    <Title subtitle='WELCOME TO EDULAB PRO' title="Best Online Education" />
                   <p>“You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.”</p>
                   <div className='button'>
                    <button className='primary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    
                   </div>
                </div>
            </div>
        </section>
        <div className='marigin'></div>
    </>
  );
}

export default Hero