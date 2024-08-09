import React from 'react'
import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const addPerson =()=>{
    event.preventDefault()
    if(!nameInPhonebook(newName)){
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')}
    else{
      alert(`${newName} is already in the phonebook`)
    }

  }
  const nameInPhonebook = (name)=>{
    if(persons.find(person => person.name === name)){
      return true
    }else{
      return false
    }

  }
  return (
    <div>
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm