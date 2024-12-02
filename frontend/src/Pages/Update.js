import React from 'react';
import useTitle from '../Components/SetTitle';
import Input from '../Components/Input';

const Update =() =>{

    
    function call_update(e) {
        e.preventDefault();

        const { teamName, gameplayed, gamewin, gamedraw, gameloss, goalfor, goalagainst, gamepoints, gameyear } = e.target.elements;

        const data = {
            teamName: teamName.value,
            gameplayed: gameplayed.value,
            gamewin: gamewin.value,
            gamedraw: gamedraw.value,
            gameloss: gameloss.value,
            goalfor: goalfor.value,
            goalagainst: goalagainst.value,
            gamepoints: gamepoints.value,
            gameyear: gameyear.value,
        }

        
    }
return (

    <div>
        <h3>Update Team Statistics</h3>
        <form onSubmit={(e) => call_update(e)} id="teamUpdateForm" >
            
            <Input label="Team Name" type="text" id="teamName" name="teamName" required />

            
            <Input label="Game Played" type="number" id="gameplayed" name="gameplayed" required />

            
            <Input label="Game Win" type="number" id="gamewin" name="gamewin" required />

            
            <Input label="Game Draw" type="number" id="gamedraw" name="gamedraw" required />

            
            <Input label="Game Loss" type="number" id="gameloss" name="gameloss" required />

            
            <Input label="Goal For" type="number or text" id="goalfor" name="goalfor" />

            
            <Input label="Goal Against" type="number or text" id="goalagainst" name="goalagainst" />

            
            <Input label="Game Point" type="number" id="gamepoints" name="gamepoints" />

            
            <Input label ="Game Year" type="datetime-local" id="gameyear" name="gameyear" />

            <button type ='submit'>update</button>

        </form>
        <p id="updated"> Updated:</p>
    </div>
)
}

export default Update