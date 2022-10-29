import React from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ({ label }) => {
  return (
    <div className='container__switch'>
        <dir className='toggle-switch'>
            <input type="checkbox" className='checkbox' name={label} id={label} />
            <label htmlFor={label} className="label">
                <span className='inner'></span>
                <span className='switch'></span>
            </label>
        </dir>
    </div>
  )
}

export default ToggleSwitch