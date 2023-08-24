import { useState } from "react"
import './App.css'

function App(){

    const [weight, setWeight] = useState(0)
    const[height, setHeight] = useState(0)
    const[bmi, setBmi] = useState('')
    const[message, setMessage] = useState('')
    

    function calBmi(e){

        e.preventDefault()
        if(weight==0 || height==0){
            alert('please enter a valid weight and height')
            
        }
        else{
            let bmi = (weight/(height*height)*703)
            setBmi(bmi)
        }

        if(bmi>0 && bmi<25){
            setMessage('you are underweight')
        }
        else if(bmi>=25 && bmi<50){
            setMessage('your weight is ok!!')
        }

        else if(bmi>=50){
            setMessage('you are overweight')
        }
        else{
            setMessage('')
        }
    }

    function reload(){
        setWeight('')
        setHeight('')
        setBmi('')
        setMessage('')
    }



    return(
        <>
        <div id="app">
        <div id="container">
            <h2>BMI CALCULATOR</h2>

            <form>
                <div>
                    <label htmlFor="">Weight (lbs)</label>
                    <input type="number" placeholder="Enter your weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Height (inch)</label>
                    <input type="number" placeholder="Enter your height" value={height} onChange={(event)=>setHeight(event.target.value)}/>
                </div>

                <div>
                    <button className="btn" id="btn-submit" type="submit"  onClick={calBmi}>Submit</button>
                    <button className="btn" id="btn-reload" type="submit" onClick={reload}>Reload</button>
                </div>

                <div id="center">
                    <h3>Your Bmi is : {bmi}</h3>
                    <p>{message}</p>
                </div>
            </form>

        </div>

        </div>
        
        </>
    )
}

export default App