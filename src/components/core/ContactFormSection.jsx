import React from 'react'
import ContactUsForm from '../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto flex flex-col gap-6 '>
      <h1 className='text-3xl bg-pink-500 rounded-lg w-[50%] p-2 ml-[6rem]  text-center'> 
        Get in Touch
      </h1>
      <p className='text-xl text-blue-400'>
        We'd love to here for you, Please fill out this form.
      </p>
      <div>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection
