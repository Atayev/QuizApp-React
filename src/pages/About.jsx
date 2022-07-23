import React from 'react'
import '../App.css'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
function About() {
  return (
    <div className='App'>
        <Header />
        <div className='about'>
            <h1>This game created by Atayev Ibrahim</h1>
            <a href="https://github.com/Atayev/QuizApp-React">Click to Visit Github Repo</a>
        </div>
        <Footer />
    </div>
 
  )
}

export default About