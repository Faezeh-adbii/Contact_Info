import React from 'react'

function ContactItem({Forms:{Name , Lastname , Email , Phone}}) {
  return (
    <div>
        <p> {Name} </p>
        <p> {Lastname} </p>
        <p> {Email} </p>
        <p> {Phone} </p>
    </div>
  )
}

export default ContactItem