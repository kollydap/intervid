import React from 'react'
import '../styles/CreateAccount.css'

function CreateAccount() {
  return (
    <div className='createacc'>
        <div>
            <strong>Create an account <span>and get started</span></strong>
        </div>
        <form>
            <input placeholder='Firstname'/>
            <input placeholder='Lastname'/>
            <input placeholder='Phone'/>
            <input placeholder='Email Address'/>
            <input placeholder='Company name'/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default CreateAccount