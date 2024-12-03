import React, { useState } from 'react';
import useTitle from '../Components/SetTitle';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Randomize from '../Components/Randomize';
import Alert from '../Components/Alert';


const Update = () => {

    const [updated, setUpdated] = useState('');
    useTitle('Update Team Data');

    function handleEvent(e) {
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

        setUpdated('Updated Successfully');


    }

    return (

        <div>
            {
                updated && <Alert type="success" timeout={10000}>Updated Successfully</Alert>

            }
            <h3 className='text-3xl mb-4 font-bold'>Update Team Statistics</h3>
            <form onSubmit={handleEvent} className='grid grid-cols-3 gap-4 items-start'>

                <Input label="Team Name" type="text" id="teamName" name="teamName" required />


                <Input label="Game Played" type="number" id="gameplayed" name="gameplayed" required />


                <Input label="Game Win" type="number" id="gamewin" name="gamewin" required />


                <Input label="Game Draw" type="number" id="gamedraw" name="gamedraw" required />


                <Input label="Game Loss" type="number" id="gameloss" name="gameloss" required />


                <Input label="Goal For" type="number" id="goalfor" name="goalfor" />


                <Input label="Goal Against" type="number" id="goalagainst" name="goalagainst" />


                <Input label="Game Point" type="number" id="gamepoints" name="gamepoints" />


                <Input label="Game Year" type="date" id="gameyear" name="gameyear" />

                <Button type='submit'>Update</Button>

            </form>

            <Randomize parentInputElStr='form input' />
        </div >
    )
}

export default Update