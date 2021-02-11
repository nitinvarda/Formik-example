import React from 'react'

export default function BasicForm() {
    return (
       
            <form>
                <label>Name</label>
                <input type="text" id="name" name="name"/>
                <label>Email</label>
                <input type='email' id="email" name="email" />
                <label>Phone</label>
                <input type="number" id="phone" name="phone"/>
            </form>
        
    )
}
