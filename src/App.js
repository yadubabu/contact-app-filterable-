import React, { useEffect } from 'react';
import { useState } from 'react';

const App =()=>{
  const [input,setInput]=useState('');
  const contacts=['Adom','Anne','Alane','Abe',
                  'Bob','Bebe','Brad','Botson',
                  'Charles','Ceves','Cathy','carle'];
   useEffect(()=>{
     fetchContacts();
   },[]);
    
 const fetchContacts=()=>{
      if(input){
        const search=input.toUpperCase();
      return contacts.filter(name=>name.toUpperCase().match(`${search}`)).map(contact=>(
        <li className='ui header'>{contact}</li>
      ))
    }else{
      return contacts.map(contact=>{
        return (
          <div className='ui container'>
            <ul className='ui content'>
              <li className='ui header'>{contact}</li>
            </ul>
          </div>
        )
      })
        
      }
    
}
    return(
     <div className='ui container'>
       <center><h1>My Contacts</h1></center>
       <form className='ui form' >
         <input type='text' 
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Search for Input'
        />
      </form>
        {fetchContacts()}
      </div>
    )
    }

export default App;