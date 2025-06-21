// import React from 'react'
import { useState, useEffect } from 'react';

export default function SelectContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function theContact() {
        try {
        const response = await fetch(`
            https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}
            `);
        const result = await response.json();
        setContact(result);
        } catch (error) {
        console.error(error);
        }
    }
    if(selectedContactId){
        theContact();
    }}, [selectedContactId]);

    useEffect(()=>{
        console.log(contact);
    }, [contact])

    return (
        <div>
            {contact ? (
                <div> 
                    <h1>{contact.name}</h1>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <button onClick={()=> setSelectedContactId(null)}>
                        Back to List
                    </button>
                </div>
            ) : (
                <p>Select a contact to view</p>
            )}
        </div>
    )
}