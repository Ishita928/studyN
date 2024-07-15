import React from 'react'
import HighlightText from './HighlightText'

const Quote = () => {
  return (
    <div className='mx-auto w-[80%] text-3xl  '>
      We are passionate about revolutionizing the way we learn. Our innovative platform
      <HighlightText text={"combines technology"}/>
      <span className='text-brown-500'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <span  className='text-brown-500 flex items-center justify-center'>
      {" "}
        unparalleled educational experience.
      </span>
    </div>
  )
}

export default Quote
