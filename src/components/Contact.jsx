import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
    <main>
        <h1>Contact us</h1>
        <form>
            <div>
               <label>Name</label>
               <input type="text" required placeholder='abc'/>
            </div>
            <div>
               <label>Email</label>
               <input type="email" required placeholder='abc@xyz.com'/>
            </div>
            <div>
               <label>Message</label>
               <input type="text" required placeholder='Ask quieries'/>
            <button type="submit">Send</button>
            </div>
        </form>
    </main>
    </div>
  )
}

export default Contact