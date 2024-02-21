import React from 'react'
import { useState } from 'react'
import './bmi.css'
import logo from '../assets/logo.png'

const Bmi = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
   
    let calcBmi = (event) => {
      event.preventDefault()
   
      if (weight === 0 || height === 0) {
        alert('Please enter a valid weight and height')
      } else {
        let bmi = (weight / (height * height) * 703)
        setBmi(bmi.toFixed(1))
   
        // Logic for message
   
        if (bmi < 25) {
          setMessage('You are underweight')
        } else if (bmi >= 25 && bmi < 30) {
          setMessage('You are a healthy weight')
        } else {
          setMessage('You are overweight')
        }
      }
    }
   
   
    let reload = () => {
        setWeight(0)
        setHeight(0)
        setBmi('')
        setMessage('')
    //   window.location.reload()
    }

  return (
    <div className="bmi">
    <img src={logo} alt="logo" width={"380px"} height={"130px"}/>
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      {/* onSubmit={calcBmi} */}
      <form>
        <div>
          <label>Weight (lbs)</label>
          <input type='number' name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (in)</label>
          <input type='number' name="height" value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit' name='submit' onClick={calcBmi}>Submit</button>
          <button className='btn btn-outline' name='reload' onClick={reload} >Reload</button>
        </div>
      </form>
 
      {message?.length > 0 && <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>}
      <div className="copyright">
            <p className="p-text">@2024 CreatorSpaceSaurabh</p>
            <p className="p-text">All rights reserved</p>
          </div>
    </div>
    
  </div>
  );
}

export default Bmi