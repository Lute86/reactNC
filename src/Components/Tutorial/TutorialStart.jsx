import React from 'react'
import SwitchButton from '../Buttons/SwitchButton'

function TutorialStart({toggleSwitch}) {
  return (
    <div className='tutorial-switch'>
      <h3>Presiona el botón para empezar</h3>
      <SwitchButton onToggle={toggleSwitch}/>    
    </div>
  )
}

export default TutorialStart