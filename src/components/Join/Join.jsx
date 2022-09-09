import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
import './Join.css'
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'your_template_id', form.current, 'your_user_id')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
  }
    return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>Level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form action={form} className="email-container">
                <input type="email" name="user_email" placeholder='Enter your email'/>
                <div className="btn btn-j">Join now</div>
            </form>
        </div>
    </div>
  )
}

export default Join
