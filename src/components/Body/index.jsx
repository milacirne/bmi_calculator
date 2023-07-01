import styles from './Body.module.css';

import { useState } from "react"

const Body = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState('');
    
    const calculateBMI = (event) => {
        event.preventDefault();
        const bmi = Math.floor(weight / (height * height));
        let classification;

        if (bmi < 16) {
            classification = "Severe Thinness"
        } else if (bmi >= 16 && bmi < 17) {
            classification = "Moderate Thinness"
        } else if (bmi >= 17 && bmi < 18.5) {
            classification = "Mild Thinness"
        } else if (bmi >= 18.5 && bmi < 25) {
            classification = "Normal"
        } else if (bmi >= 25 && bmi < 30) {
            classification = "Overweight"
        } else if (bmi >= 30 && bmi < 35) {
            classification = "Obese Class I"
        } else if (bmi >= 35 && bmi < 40) {
            classification = "Obese Class II"
        } else {
            classification = "Obese Class III"
        }
    
        setBmiResult (
            <div className={styles.result}>
                <p>Your BMI is <b>{bmi}</b>.</p>
                <p><b>Classification:</b> {classification} </p>
            </div>
        )
    }

    return (
        <div className="container">
            <header>
                <h1 className={styles.title}>BMI Calculator</h1>
            </header>
            <form className={styles.form}>
                {/* //////////////////////////////// WEIGHT //////////////////////////////// */}
                <label className={styles.measurements} htmlFor="weight">Weight:</label>
                <div className={styles.fullInput}>
                    <input type="text" placeholder='Ex: 60' onBlur={event => setWeight(parseFloat(event.target.value))} />
                    <span>kg</span>
                </div>
                {/* //////////////////////////////// HEIGHT //////////////////////////////// */}
                <label className={styles.measurements} htmlFor="height">Height:</label>
                <div className={styles.fullInput}>
                    <input type="text" placeholder='Ex: 1.65' onBlur={event => setHeight(parseFloat(event.target.value.replace(',', '.')))} />
                    <span>m</span>
                </div>
                {/* //////////////////////////////// BUTTON //////////////////////////////// */}
                <button type="submit" onClick={calculateBMI} >Calculate</button>
                {bmiResult}
            </form>
        </div>
    )
}

export default Body;