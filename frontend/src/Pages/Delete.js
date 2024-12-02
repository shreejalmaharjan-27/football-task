import React, { useState } from 'react';
import useTitle from '../Components/SetTitle';
import axios from 'axios';
import Input from '../Components/Input';

const Delete =()=>{
    const [message, setMessage] = useState('');


    function call_delete(e){
        
        e.preventDefault();

        const {teamName} = e.target.elements;
        const data = {
            teamName: teamName.value,
        }
        // Set message before delete request
        setMessage("It is being deleted...");
        
        
        // Delete Request
        axios.delete(`/api/teams/${teamName.value}`)
        .then(response => {
            console.log("Record deleted:", response.data);
            document.getElementById("deleted").innerText = `Deleted: ${teamName.value}`;
        })
        .catch(error => {
            console.error("Error deleting record:", error);
        });
    }
    return (
        <div>
            <h3>Delete team Record</h3>
            <form onSubmit={(e) => call_delete(e)} id="teamDeleteForm">
               
                <Input label="Team Name" type="text" id="teamName" name="teamName" required/>
                <Input label="Game Played" type="number" id="gameplayed" name="gameplayed" required />

            
<Input label="Game Win" type="number" id="gamewin" name="gamewin" required />


<Input label="Game Draw" type="number" id="gamedraw" name="gamedraw" required />


<Input label="Game Loss" type="number" id="gameloss" name="gameloss" required />


<Input label="Goal For" type="number or text" id="goalfor" name="goalfor" />


<Input label="Goal Against" type="number or text" id="goalagainst" name="goalagainst" />


<Input label="Game Point" type="number" id="gamepoints" name="gamepoints" />


<Input label ="Game Year" type="datetime-local" id="gameyear" name="gameyear" />

                <button type="submit">Delete</button>
            </form>
            <p id="deleted"></p>
        </div>
    )
}

export default Delete;