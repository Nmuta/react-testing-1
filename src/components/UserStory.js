import React from 'react'

const UserStory = ({ updateStatus }) => (
  <div>
    <button data-behavior="deliver" onClick={ () => updateStatus('delivered') }>Deliver</button>
    <button data-behavior="finish" onClick={ () => updateStatus('finished') }>Finish</button>
  </div>
)

export default UserStory