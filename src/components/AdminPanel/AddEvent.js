import React from 'react'
import { Category } from '../../data/Data'

const AddEvent = () => {
    const handleAddEvent = () => {
        fetch("http://localhost:4000/addCategory", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(Category)
        })
    }
    return (
        <div>
            <button onClick={handleAddEvent}>Add Event</button>
        </div>
    )
}

export default AddEvent
