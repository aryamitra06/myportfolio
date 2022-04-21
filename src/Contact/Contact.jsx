import React from 'react'
import '../Contact/Contact.css'
import brandimage from '../Assets/image.jpg'
function Contact() {
    return (
        <>
            <div className="contact-body">
                <div className="contact-intro">
                    <img src={brandimage} alt="contact avatar" />
                    <p>Let's Connect.</p>
                    <span>Have a discuss!</span>
                </div>
                <div className="contact-form">
                    <form action="https://formspree.io/f/mleaaezd" method="post">
                        <input type="text" name="name" required placeholder='Name' />
                        <input type="email" name="email" required placeholder='Email' />
                        <textarea type="text" name="message" rows="6" required placeholder='Message'></textarea>
                        <button type='submit'>Send <i className="fas fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact